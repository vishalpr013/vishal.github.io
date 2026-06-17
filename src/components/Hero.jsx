import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi2'
import { personalInfo } from '../data/portfolio'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-cream relative min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200/50 dark:from-charcoal dark:via-charcoal/90 dark:to-charcoal/95 pointer-events-none transition-all duration-300" />

      {/* Top metadata row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 section-container pt-28 sm:pt-32 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs tracking-[0.15em] text-charcoal/50 dark:text-cream-200/40 uppercase">
            {personalInfo.location} · 23.0225°N
          </span>
        </div>
        <span className="font-mono text-xs tracking-[0.15em] text-charcoal/50 dark:text-cream-200/40 hidden sm:block">
          © Folio · Index {new Date().getFullYear()}
        </span>
      </motion.div>

      {/* Main hero content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 section-container flex-grow flex flex-col justify-center py-16 sm:py-20"
      >
        {/* Massive serif headline */}
        <motion.h1
          variants={fadeUp}
          className="font-serif font-bold text-charcoal dark:text-cream-100 leading-[1.05] tracking-tight mb-8"
          style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
        >
          Building
          <br />
          <span className="italic text-copper">intelligent</span>
          <br />
          systems
          <br />
          <span className="font-serif italic text-charcoal/30 dark:text-cream-200/30" style={{ fontSize: '0.85em' }}>
            that learn.
          </span>
        </motion.h1>

        {/* Bio and metadata row */}
        <motion.div
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-4"
        >
          {/* Left: Bio */}
          <p className="font-serif italic text-lg sm:text-xl text-charcoal/60 dark:text-cream-200/50 leading-relaxed max-w-lg">
            {personalInfo.tagline} From research labs to production pipelines — AI that reasons, decides, and ships work.
          </p>

          {/* Right: Metadata tags */}
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-wider text-copper bg-copper/10 px-2.5 py-1 rounded-sm">
                [ROLE]
              </span>
              <span className="font-mono text-sm text-charcoal/70 dark:text-cream-200/70">
                {personalInfo.title}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-wider text-copper bg-copper/10 px-2.5 py-1 rounded-sm">
                [EDU]
              </span>
              <span className="font-mono text-sm text-charcoal/70 dark:text-cream-200/70">
                B.E AI & ML · LDCE · 8.5 CGPA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-wider text-copper bg-copper/10 px-2.5 py-1 rounded-sm">
                [STATUS]
              </span>
              <span className="font-mono text-sm text-charcoal/70 dark:text-cream-200/70">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar with scroll and status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 section-container pb-10 flex items-end justify-between"
      >
        {/* Scroll indicator */}
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-charcoal/40 dark:text-cream-200/40">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <HiArrowDown className="w-4 h-4 text-charcoal/30 dark:text-cream-200/30" />
          </motion.span>
        </a>

        {/* Currently building */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.1em] uppercase text-charcoal/40 dark:text-cream-200/40">
            Currently building
          </span>
          <span className="font-mono text-xs tracking-wide text-copper uppercase">
            Hybrid RAG Systems
          </span>
        </div>
      </motion.div>
    </section>
  )
}
