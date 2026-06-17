import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendarDays } from 'react-icons/hi2'
import { education } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Background</p>
          <h2 className="section-heading">
            Education <span className="gradient-text">&amp; Learning</span>
          </h2>
          <p className="section-subtext mt-4 max-w-2xl mx-auto">
            Academic foundations powering cutting-edge AI research and engineering.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card glass-card-hover p-6 sm:p-8 relative group"
            >
              {/* Gradient border-top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top row: icon + current badge */}
              <div className="flex items-start justify-between mb-5">
                {/* Graduation cap icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <HiAcademicCap className="w-6 h-6 text-white" />
                </div>

                {/* Current badge */}
                {edu.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              {/* Degree */}
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-base text-slate-500 dark:text-slate-400 mb-6">
                {edu.institution}
              </p>

              {/* Bottom row: board badge + period + score */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-200 dark:border-white/[0.08]">
                {/* Board badge */}
                <span className="inline-flex items-center rounded-md bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 text-xs font-semibold text-violet-600 dark:text-violet-400 tracking-wide">
                  {edu.board}
                </span>

                {/* Period */}
                <span className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                  <HiCalendarDays className="w-3.5 h-3.5" />
                  {edu.period}
                </span>

                {/* Score */}
                <span className="ml-auto text-sm font-semibold gradient-text">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
