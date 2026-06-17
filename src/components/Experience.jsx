import { motion } from 'framer-motion'
import { HiBriefcase, HiMapPin } from 'react-icons/hi2'
import { experience } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40" />
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Career</p>
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtext mt-4 max-w-2xl mx-auto">
            Building real-world AI systems — from research labs to production.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Vertical gradient line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500/20 rounded-full" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-10 sm:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5">
                <div className="relative flex items-center justify-center">
                  {/* Pulsing ring for current role */}
                  {exp.current && (
                    <>
                      <span className="absolute inline-flex w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-400/30 animate-ping" />
                      <span className="absolute inline-flex w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-400/20 animate-pulse" />
                    </>
                  )}
                  {/* Dot */}
                  <span className="relative w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/30 ring-4 ring-slate-50 dark:ring-dark-900" />
                </div>
              </div>

              {/* Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 group">
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide
                      ${
                        exp.current
                          ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20'
                          : 'bg-slate-100 text-slate-500 dark:bg-white/[0.06] dark:text-slate-400 border border-slate-200 dark:border-white/[0.08]'
                      }`}
                  >
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    )}
                    {exp.period}
                  </span>
                </div>

                {/* Company & location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400">
                    <HiBriefcase className="w-4 h-4 flex-shrink-0" />
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                    <HiMapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
