import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { projects } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

export default function Projects() {
  return (
    <section id="projects" className="section-dark section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-copper/[0.03] blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <span className="section-label mb-6 block">Selected Projects</span>
            <h2 className="section-heading text-charcoal dark:text-cream-100">
              Things I've{' '}
              <br className="hidden sm:block" />
              <span className="italic text-copper">built.</span>
            </h2>
          </div>
          <p className="section-subtext text-charcoal/50 dark:text-cream-200/50 lg:text-right max-w-md lg:ml-auto">
            Production agents and research-grade systems. Each one ships, each one solves a real problem.
          </p>
        </motion.div>

        {/* Horizontal rule */}
        <div className="rule mb-16" />

        {/* Project cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-20"
        >
          {projects.map((project, i) => (
            <motion.article key={i} variants={fadeUp} className="group">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Left column — title & code preview */}
                <div>
                  <h3 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-copper mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-charcoal/40 dark:text-cream-200/40 mb-8">
                    {project.subtitle}
                  </p>

                  {/* Code-style preview card */}
                  <div className="card-sharp p-5 sm:p-6 overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                        <span className="font-mono text-xs text-charcoal/40 dark:text-cream-200/40 uppercase tracking-wider">
                          {project.title.replace(/\s+/g, '_').toLowerCase()}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-charcoal/30 dark:text-cream-200/30">
                        v{(i + 1)}.0
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs text-charcoal/50 dark:text-cream-200/50">
                      {project.bullets.map((bullet, j) => (
                        <p key={j} className="leading-relaxed">
                          <span className="text-emerald-400">✓</span>{' '}
                          <span className="text-charcoal/60 dark:text-cream-200/60">{bullet.length > 80 ? bullet.substring(0, 80) + '...' : bullet}</span>
                        </p>
                      ))}
                    </div>

                    <div className="border-t border-border-cream dark:border-border-light mt-5 pt-4">
                      <p className="font-serif italic text-sm text-charcoal/40 dark:text-cream-200/40">
                        {project.tech.join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right column — description & meta */}
                <div className="lg:pt-4">
                  <p className="text-base text-charcoal/60 dark:text-cream-200/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlight quote */}
                  <div className="border-l-2 border-copper/40 pl-5 py-3 mb-8 bg-copper/[0.04] rounded-r-sm">
                    <p className="font-serif italic text-sm text-charcoal/70 dark:text-cream-200/70 leading-relaxed">
                      {project.bullets[0]}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="mono-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm text-charcoal/60 dark:text-cream-200/60 hover:text-copper transition-colors duration-300 group/link"
                    >
                      <SiGithub className="w-4 h-4" />
                      <span className="underline underline-offset-4 decoration-border-cream dark:decoration-border-light group-hover/link:decoration-copper transition-colors">
                        GitHub
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Divider between projects */}
              {i < projects.length - 1 && (
                <div className="rule mt-20" />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
