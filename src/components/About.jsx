import { motion } from 'framer-motion'
import { HiSparkles, HiBolt, HiServer, HiAcademicCap } from 'react-icons/hi2'
import { about, personalInfo } from '../data/portfolio'

const iconMap = {
  sparkles: HiSparkles,
  bolt: HiBolt,
  server: HiServer,
  academic: HiAcademicCap,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute top-1/4 -right-60 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/10 to-violet-500/5 dark:from-cyan-400/[0.06] dark:to-violet-500/[0.03] blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column — text content (3 cols) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Label */}
            <motion.div variants={fadeUp}>
              <span className="section-label">About</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeUp} className="section-heading text-slate-900 dark:text-white">
              Building Intelligent{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Systems</span>
            </motion.h2>

            {/* Bio */}
            <motion.p variants={fadeUp} className="section-subtext leading-relaxed max-w-2xl">
              {about.bio}
            </motion.p>

            {/* Highlights */}
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
              {about.highlights.map((item, i) => {
                const Icon = iconMap[item.icon] || HiSparkles
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06] hover:border-cyan-400/30 dark:hover:border-cyan-400/15 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 dark:from-cyan-400/10 dark:to-violet-400/10 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-violet-500/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} className="grid grid-cols-3 gap-4 pt-4">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="text-center p-4 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06]"
                >
                  <div className="gradient-text text-xl sm:text-2xl font-bold font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — profile card (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            {/* Decorative gradients behind card */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 dark:from-cyan-400/10 dark:to-violet-500/10 blur-2xl opacity-60 rotate-2" />
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tl from-amber-400/10 to-cyan-400/10 dark:from-amber-400/5 dark:to-cyan-400/5 blur-2xl opacity-40 -rotate-3" />

            {/* Card */}
            <div className="relative glass-card p-8 sm:p-10 text-center">
              {/* Top badges */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <span className="font-heading text-base font-bold text-white">VP</span>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold font-heading tracking-wide">
                  {personalInfo.title}
                </span>
              </div>

              {/* Decorative monogram */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-8">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/20 dark:border-cyan-400/10 animate-spin-slow" />
                {/* Inner gradient circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-amber-500/10 dark:from-cyan-400/[0.08] dark:via-violet-400/[0.08] dark:to-amber-400/[0.08]" />
                {/* Monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-6xl sm:text-7xl font-extrabold gradient-text select-none leading-none">
                    VP
                  </span>
                </div>
                {/* Orbiting dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse-glow" />
              </div>

              {/* Name & info */}
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-1">
                {personalInfo.name} {personalInfo.lastName}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                B.E. in AI &amp; ML
              </p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">
                L.D. College of Engineering
              </p>

              {/* Pulsing accent dots */}
              <div className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow shadow-lg shadow-cyan-400/40" />
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse-glow delay-200 shadow-lg shadow-violet-400/40" />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-glow delay-400 shadow-lg shadow-amber-400/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
