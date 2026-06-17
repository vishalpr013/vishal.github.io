import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const colorMap = {
  cyan: {
    dot: 'bg-cyan-400',
    bg: 'bg-cyan-400/10 dark:bg-cyan-400/10',
    border: 'border-cyan-400/40 dark:border-cyan-400/25',
    text: 'text-cyan-600 dark:text-cyan-400',
    glow: 'shadow-cyan-400/20',
  },
  violet: {
    dot: 'bg-violet-400',
    bg: 'bg-violet-400/10 dark:bg-violet-400/10',
    border: 'border-violet-400/40 dark:border-violet-400/25',
    text: 'text-violet-600 dark:text-violet-400',
    glow: 'shadow-violet-400/20',
  },
  amber: {
    dot: 'bg-amber-400',
    bg: 'bg-amber-400/10 dark:bg-amber-400/10',
    border: 'border-amber-400/40 dark:border-amber-400/25',
    text: 'text-amber-600 dark:text-amber-400',
    glow: 'shadow-amber-400/20',
  },
  emerald: {
    dot: 'bg-emerald-400',
    bg: 'bg-emerald-400/10 dark:bg-emerald-400/10',
    border: 'border-emerald-400/40 dark:border-emerald-400/25',
    text: 'text-emerald-600 dark:text-emerald-400',
    glow: 'shadow-emerald-400/20',
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const tagStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const tagFade = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-b from-violet-500/[0.06] to-transparent dark:from-violet-400/[0.04] blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="section-label mb-4 block">Skills</span>
          <h2 className="section-heading text-slate-900 dark:text-white mb-4">
            Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtext max-w-lg mx-auto">
            Core technologies and frameworks I work with
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skills.map((category, i) => {
            const colors = colorMap[category.color] || colorMap.cyan
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card glass-card-hover p-6 sm:p-8 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center transition-all duration-300`}>
                    <span className={`w-3 h-3 rounded-full ${colors.dot} shadow-lg ${colors.glow}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
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
                      className={`skill-tag hover:${colors.border} text-slate-700 dark:text-slate-300`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} opacity-60`} />
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
