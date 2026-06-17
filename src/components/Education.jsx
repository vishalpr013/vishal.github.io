import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendarDays } from 'react-icons/hi2'
import { education } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Education() {
  return (
    <section id="education" className="section-dark section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-copper/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block">Background</span>
          <h2 className="section-heading text-charcoal dark:text-cream-100 max-w-3xl">
            Education{' '}
            <span className="italic text-copper">&amp; learning.</span>
          </h2>
          <p className="section-subtext mt-6 text-charcoal/50 dark:text-cream-200/50 max-w-2xl">
            Academic foundations powering cutting-edge AI research and engineering.
          </p>
        </motion.div>

        {/* Horizontal rule */}
        <div className="rule mb-12" />

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 max-w-4xl"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="card-sharp p-6 sm:p-8 relative group hover:border-copper/20 transition-colors duration-300"
            >
              {/* Top row: icon + current badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-sm bg-copper/10 flex items-center justify-center">
                  <HiAcademicCap className="w-5 h-5 text-copper" />
                </div>

                {edu.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-copper/10 border border-copper/20 px-2.5 py-1 font-mono text-xs text-copper tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              {/* Degree */}
              <h3 className="font-serif text-xl font-semibold text-charcoal dark:text-cream-100 mb-2">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-sm text-charcoal/50 dark:text-cream-200/50 mb-6">
                {edu.institution}
              </p>

              {/* Bottom row */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border-light">
                <span className="mono-tag">
                  {edu.board}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-charcoal/40 dark:text-cream-200/40">
                  <HiCalendarDays className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span className="ml-auto font-serif italic text-sm text-copper">
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
