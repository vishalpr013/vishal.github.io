import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
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

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.06] shadow-sm shadow-slate-900/5 dark:shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="relative group flex items-center"
            >
              <span className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white tracking-tighter select-none">
                VP
              </span>
              <span className="font-heading text-2xl font-extrabold text-cyan-400 tracking-tighter select-none group-hover:scale-125 transition-transform duration-300 origin-bottom">
                .
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link px-3 py-2">
                  {link.label}
                  <span className="nav-link-underline" />
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={() => setDark((d) => !d)}
                className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/40 dark:hover:border-cyan-400/20 transition-all duration-300 group"
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
                      <HiSun className="w-4 h-4 text-amber-400" />
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
                      <HiMoon className="w-4 h-4 text-violet-400" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* CTA button — desktop */}
              <a
                href="#contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 shadow-lg shadow-cyan-500/20 dark:shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? (
                  <HiXMark className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <HiBars3 className="w-5 h-5 text-slate-700 dark:text-slate-300" />
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
            className="fixed inset-0 z-40 bg-slate-50/95 dark:bg-dark-900/95 backdrop-blur-2xl lg:hidden"
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
                  className="text-2xl font-heading font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors py-3 px-6"
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
                className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/20"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
