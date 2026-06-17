import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2'
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
  const [mobileOpen, setMobileOpen] = useState(false)
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

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
            <a href="#hero" className="relative group flex items-center gap-0.5">
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

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className={`lg:hidden p-2.5 rounded-full border transition-all duration-300 ${
                  overDark
                    ? 'border-border-light bg-charcoal-50/50'
                    : 'border-border-cream bg-cream-50/50'
                }`}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? (
                  <HiXMark className={`w-5 h-5 ${overDark ? 'text-cream-200' : 'text-charcoal'}`} />
                ) : (
                  <HiBars3 className={`w-5 h-5 ${overDark ? 'text-cream-200' : 'text-charcoal'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream-100/98 dark:bg-charcoal/98 lg:hidden transition-colors duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="text-3xl font-serif font-semibold text-charcoal/70 dark:text-cream-200/70 hover:text-copper dark:hover:text-copper transition-colors py-3 px-6"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.06 }}
                className="mt-6 inline-flex items-center px-8 py-3.5 rounded-full text-base font-mono text-charcoal dark:text-cream border border-charcoal/20 dark:border-cream-200/20 hover:border-copper hover:text-copper transition-all duration-300"
              >
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
