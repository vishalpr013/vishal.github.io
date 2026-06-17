import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiEnvelope, HiArrowDown, HiArrowDownTray } from 'react-icons/hi2'
import { personalInfo } from '../data/portfolio'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-dark-900"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 — Cyan */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-600/5 dark:from-cyan-400/10 dark:to-cyan-600/5 blur-3xl animate-float" />
        {/* Blob 2 — Violet */}
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-400/15 to-violet-600/5 dark:from-violet-500/10 dark:to-violet-600/5 blur-3xl animate-float-slow" />
        {/* Blob 3 — Amber */}
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-400/10 to-amber-600/5 dark:from-amber-400/[0.06] dark:to-amber-600/5 blur-3xl animate-float-delay" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-cyan-400/40 dark:bg-cyan-400/25 animate-float shadow-lg shadow-cyan-400/20" />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-violet-400/40 dark:bg-violet-400/25 animate-float-slow shadow-lg shadow-violet-400/20" />
        <div className="absolute bottom-[30%] left-[20%] w-2.5 h-2.5 rounded-sm bg-amber-400/30 dark:bg-amber-400/20 animate-float-delay rotate-45 shadow-lg shadow-amber-400/20" />
        <div className="absolute top-[60%] right-[10%] w-4 h-4 rounded-lg border border-cyan-400/20 dark:border-cyan-400/15 animate-float rotate-12" />
        <div className="absolute bottom-[20%] right-[30%] w-3 h-3 rounded-full border border-violet-400/20 dark:border-violet-400/15 animate-float-slow" />
      </div>

      {/* Center content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-12"
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Available for new opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={fadeUp} className="section-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading leading-[1.05] mb-4">
          <span className="text-slate-900 dark:text-white">{personalInfo.name}</span>
          <br />
          <span className="gradient-text">{personalInfo.lastName}</span>
        </motion.h1>

        {/* Title line */}
        <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 mb-5 font-heading tracking-wide">
          {personalInfo.subtitles.join(' • ')}
        </motion.p>

        {/* Tagline */}
        <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/15 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
            <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-cyan-400/40 dark:hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            <HiArrowDownTray className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
          {[
            { icon: SiGithub, href: personalInfo.github, label: 'GitHub' },
            { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: HiEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.08] hover:border-cyan-400/40 dark:hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10 transition-all duration-300 group hover:-translate-y-1"
            >
              <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <HiArrowDown className="w-4 h-4 text-cyan-500/60 dark:text-cyan-400/50" />
        </motion.span>
      </motion.a>
    </section>
  )
}
