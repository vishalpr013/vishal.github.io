import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredSection, setHoveredSection] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'))

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const isOverDark = isDarkMode

  return (
    <div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className="relative group flex items-center"
            onMouseEnter={() => setHoveredSection(id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Label tooltip */}
            <AnimatePresence>
              {hoveredSection === id && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute right-6 whitespace-nowrap font-mono text-xs tracking-wide ${
                    isOverDark ? 'text-cream-200/70' : 'text-charcoal/50'
                  }`}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <div className="relative flex items-center justify-center">
              {isActive && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute w-2 h-6 rounded-full bg-copper"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-copper scale-0'
                    : isOverDark
                      ? 'bg-cream-200/30 hover:bg-cream-200/60'
                      : 'bg-charcoal/20 hover:bg-charcoal/40'
                }`}
              />
            </div>
          </a>
        )
      })}
    </div>
  )
}
