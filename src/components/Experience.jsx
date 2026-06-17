import { motion } from 'framer-motion'
import { HiBriefcase, HiMapPin } from 'react-icons/hi2'
import { experience } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experience() {
  return (
    <section id="experience" className="section-dark section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-copper/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block">Work</span>
          <h2 className="section-heading text-charcoal dark:text-cream-100 max-w-3xl">
            Where I've{' '}
            <span className="italic text-copper">shipped.</span>
          </h2>
          <p className="section-subtext mt-6 text-charcoal/50 dark:text-cream-200/50 max-w-2xl">
            Building real-world AI systems — from research labs to production.
          </p>
        </motion.div>

        {/* Horizontal rule */}
        <div className="rule mb-16" />

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-4xl"
        >
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-copper/60 via-copper/30 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-12 pb-16 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5">
                <div className="relative flex items-center justify-center">
                  {exp.current && (
                    <span className="absolute w-4 h-4 rounded-full bg-copper/20 animate-pulse" />
                  )}
                  <span className="relative w-[11px] h-[11px] rounded-full bg-copper ring-4 ring-cream-100 dark:ring-charcoal" />
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal dark:text-cream-100 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="inline-flex items-center gap-1.5 font-mono text-sm text-copper">
                        <HiBriefcase className="w-3.5 h-3.5 flex-shrink-0" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-charcoal/40 dark:text-cream-200/40">
                        <HiMapPin className="w-3 h-3 flex-shrink-0" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-1 font-mono text-xs tracking-wider uppercase ${
                      exp.current
                        ? 'bg-copper/10 text-copper border border-copper/20'
                        : 'bg-cream-50 text-charcoal/50 border border-border-cream dark:bg-charcoal-50 dark:text-cream-200/40 dark:border-border-light'
                    }`}
                  >
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
                    )}
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mt-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-charcoal/60 dark:text-cream-200/55 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-copper/60 flex-shrink-0" />
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
