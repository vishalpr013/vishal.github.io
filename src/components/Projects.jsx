import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { projects } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-400/[0.06] to-violet-500/[0.04] dark:from-cyan-400/[0.04] dark:to-violet-500/[0.03] blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="section-label mb-4 block">Projects</span>
          <h2 className="section-heading text-slate-900 dark:text-white mb-4">
            What I&apos;ve{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtext max-w-lg mx-auto">
            Projects that showcase my engineering skills
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-8"
        >
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="glass-card glass-card-hover p-8 sm:p-10 group relative overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400/5 to-violet-500/5 dark:from-cyan-400/[0.03] dark:to-violet-400/[0.03] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Title row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* GitHub link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] hover:border-cyan-400/40 dark:hover:border-cyan-400/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 group/btn flex-shrink-0"
                    >
                      <HiArrowTopRightOnSquare className="w-3.5 h-3.5 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                      GitHub
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-5 max-w-3xl">
                  {project.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-6">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 shadow-sm shadow-cyan-400/40" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.08] bg-white/40 dark:bg-white/[0.02] hover:border-cyan-400/30 dark:hover:border-cyan-400/15 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
