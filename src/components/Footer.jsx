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
      <footer className="border-t border-border-cream dark:border-border-light bg-cream-100 dark:bg-charcoal relative transition-colors duration-300">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="font-mono text-[10px] tracking-widest text-charcoal/50 dark:text-cream-200/40 uppercase text-center sm:text-left">
              © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName}. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
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
                    className="w-8 h-8 rounded-sm flex items-center justify-center text-charcoal/40 dark:text-cream-200/40 hover:text-copper dark:hover:text-copper-light hover:bg-cream-200 dark:hover:bg-charcoal-50 transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-sm bg-charcoal dark:bg-cream text-cream dark:text-charcoal hover:bg-copper dark:hover:bg-copper dark:hover:text-cream flex items-center justify-center transition-all duration-300 cursor-pointer border border-border-light dark:border-border-cream shadow-lg"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
