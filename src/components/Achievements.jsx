import { motion } from 'framer-motion'
import { HiTrophy, HiBolt, HiShieldCheck } from 'react-icons/hi2'
import { achievements, certifications } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const iconMap = {
  trophy: HiTrophy,
  target: HiBolt,
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/8 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Recognition</p>
          <h2 className="section-heading">
            Achievements <span className="gradient-text">&amp; Certifications</span>
          </h2>
          <p className="section-subtext mt-4 max-w-2xl mx-auto">
            Awards, recognitions, and professional credentials that validate the journey.
          </p>
        </motion.div>

        {/* ─── Achievements Grid ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
        >
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || HiTrophy
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card glass-card-hover p-6 flex items-start gap-5 group"
              >
                {/* Icon circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/30 transition-shadow">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ─── Certifications ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <HiShieldCheck className="w-6 h-6 text-cyan-500" />
            Certifications
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card px-5 py-3 flex items-center gap-3 group hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                  <HiShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm text-slate-900 dark:text-white leading-tight">
                    {cert.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
