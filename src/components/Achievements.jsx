import { motion } from 'framer-motion'
import { HiMiniTrophy, HiMiniBolt, HiMiniShieldCheck } from 'react-icons/hi2'
import { achievements, certifications } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const iconMap = {
  trophy: HiMiniTrophy,
  target: HiMiniBolt,
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-dark section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-copper/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block">Recognition</span>
          <h2 className="section-heading text-charcoal dark:text-cream-100 max-w-3xl">
            Awards &amp;{' '}
            <span className="italic text-copper">credentials.</span>
          </h2>
          <p className="section-subtext mt-6 text-charcoal/50 dark:text-cream-200/50 max-w-2xl">
            Honors, hackathon wins, and professional validations.
          </p>
        </motion.div>

        {/* Horizontal rule */}
        <div className="rule mb-12" />

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 max-w-4xl mb-16"
        >
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || HiMiniTrophy
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="card-sharp p-6 flex items-start gap-5 group hover:border-copper/20 transition-colors duration-300"
              >
                {/* Icon wrapper */}
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-copper/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-copper" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-cream-100 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/50 dark:text-cream-200/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-copper" />
            <h3 className="font-mono text-sm tracking-wider uppercase text-charcoal/50 dark:text-cream-200/50">
              Certifications
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="card-sharp p-5 flex items-start gap-4 group hover:border-copper/20 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-sm bg-copper/10 flex items-center justify-center flex-shrink-0">
                  <HiMiniShieldCheck className="w-4 h-4 text-copper" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif text-sm font-semibold text-charcoal dark:text-cream-100 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="font-mono text-xs text-charcoal/40 dark:text-cream-200/40 mt-1 uppercase tracking-wider">
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
