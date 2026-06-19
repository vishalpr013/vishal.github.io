import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return document.documentElement.classList.contains('dark')
    }
    return true
  })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Since all sections match the page theme, we are over dark when dark mode is enabled
  const overDark = dark

  // Dark mode toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])


  const textColor = overDark
    ? 'text-cream-200/60 hover:text-cream-100'
    : 'text-charcoal/50 hover:text-charcoal'

  const brandColor = overDark ? 'text-cream-100' : 'text-charcoal'
  const dotColor = overDark ? 'text-copper-light' : 'text-copper'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? overDark
              ? 'bg-charcoal/80 backdrop-blur-xl border-b border-border-dark/60'
              : 'bg-cream-100/80 backdrop-blur-xl border-b border-border-cream/60'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#hero" className="relative group flex items-center gap-3">
              <img
                src="/Symbol.jpg"
                alt="Logo Symbol"
                className="w-8 h-8 rounded-full object-cover border border-border-cream dark:border-border-light transition-transform duration-300 group-hover:scale-105"
              />
              <span className={`font-serif text-xl font-bold tracking-tight select-none transition-colors duration-300 ${brandColor}`}>
                {personalInfo.name} {personalInfo.lastName}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-mono tracking-wide transition-colors duration-300 ${textColor}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={() => setDark((d) => !d)}
                className={`relative p-2.5 rounded-full border transition-all duration-300 ${
                  overDark
                    ? 'border-border-light hover:border-copper/40 bg-charcoal-50/50'
                    : 'border-border-cream hover:border-copper/40 bg-cream-50/50'
                }`}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {dark ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="block"
                    >
                      <HiSun className={`w-4 h-4 ${dotColor}`} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="block"
                    >
                      <HiMoon className="w-4 h-4 text-charcoal/60" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA button — desktop */}
              <a
                href="#contact"
                className={`hidden lg:inline-flex items-center px-5 py-2 rounded-full text-sm font-mono tracking-wide border transition-all duration-300 hover:-translate-y-0.5 ${
                  overDark
                    ? 'border-cream-200/30 text-cream-100 hover:border-copper hover:text-copper-light'
                    : 'border-charcoal/20 text-charcoal hover:border-copper hover:text-copper'
                }`}
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
