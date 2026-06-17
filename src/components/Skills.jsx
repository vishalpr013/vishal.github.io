import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const tagStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const tagFade = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-cream section-padding relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block">Technical Stack</span>
          <h2 className="section-heading text-charcoal dark:text-cream mb-6 max-w-3xl">
            Tools of the{' '}
            <span className="italic text-copper">trade.</span>
          </h2>
          <p className="section-subtext text-charcoal/50 dark:text-cream-200/50 max-w-lg">
            Core technologies and frameworks powering production AI systems.
          </p>
        </motion.div>

        {/* Horizontal rule */}
        <div className="rule-cream mb-12" />

        {/* Skills grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-10 lg:gap-16"
        >
          {skills.map((category, i) => (
            <motion.div key={i} variants={fadeUp}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-copper" />
                <h3 className="font-mono text-sm tracking-wider uppercase text-charcoal/60 dark:text-cream-200/60">
                  {category.category}
                </h3>
              </div>

              {/* Skill tags */}
              <motion.div
                variants={tagStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {category.items.map((skill, j) => (
                  <motion.span
                    key={j}
                    variants={tagFade}
                    className="mono-tag-light"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
