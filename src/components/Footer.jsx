import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi2'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'

const socialLinks = [
  {
    icon: SiGithub,
    href: personalInfo.github,
    label: 'GitHub',
    external: true,
  },
  {
    icon: FaLinkedin,
    href: personalInfo.linkedin,
    label: 'LinkedIn',
    external: true,
  },
  {
    icon: HiOutlineEnvelope,
    href: `mailto:${personalInfo.email}`,
    label: 'Email',
    external: false,
  },
]

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="border-t border-slate-200 dark:border-white/[0.06] relative">
        {/* Subtle gradient line at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <div className="section-container py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
              © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon
                return (
                  <a
                    key={idx}
                    href={link.href}
                    aria-label={link.label}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
