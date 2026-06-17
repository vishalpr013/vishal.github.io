import { useState } from 'react'
import { motion } from 'framer-motion'
import { about, personalInfo } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <section id="about" className="section-dark section-padding relative overflow-hidden">
      {/* Subtle warm glow in background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-copper/[0.03] blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">About</span>
        </motion.div>

        {/* Large heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="section-heading text-charcoal dark:text-cream-100 mb-16 max-w-4xl"
        >
          A quiet{' '}
          <span className="italic text-copper">obsession</span>
          <br />
          with AI that{' '}
          <span className="italic text-copper">ships.</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Interactive Decorative Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-full aspect-square max-w-lg mx-auto"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full border border-border-cream dark:border-border-light bg-[#0d0d0c] rounded-sm relative overflow-hidden flex items-center justify-center p-8 group cursor-pointer transition-colors duration-300"
            >
              {/* Background Stars (parallax in opposite direction) */}
              <motion.div
                animate={{ x: -mousePos.x * 0.4, y: -mousePos.y * 0.4 }}
                transition={{ type: 'spring', stiffness: 150, damping: 25 }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-[15%] left-[20%] w-[3px] h-[3px] bg-cream-200/40 rounded-full" />
                <div className="absolute top-[80%] left-[15%] w-[2px] h-[2px] bg-cream-200/30 rounded-full" />
                <div className="absolute top-[75%] right-[25%] w-[4px] h-[4px] bg-cream-200/50 rounded-full" />
                <div className="absolute top-[25%] right-[40%] w-[2px] h-[2px] bg-cream-200/30 rounded-full" />
              </motion.div>

              {/* Reticle / Crosshair */}
              <svg className="absolute top-8 right-8 w-6 h-6 text-cream-200/20 group-hover:text-copper/40 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 2v20M2 12h20" />
              </svg>

              {/* Left Top Label */}
              <div className="absolute top-8 left-8 flex flex-col font-mono text-[9px] tracking-[0.2em] text-cream-200/30 uppercase">
                <span>V · P</span>
                <span className="mt-1">FIG. 01</span>
              </div>

              {/* Parallax Layer 1: Background Rings (tilted behind planet) */}
              <motion.div
                animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }}
                transition={{ type: 'spring', stiffness: 150, damping: 25 }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
              >
                <svg className="w-full h-full opacity-25 text-copper" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
                  {/* Ring 1 - Tilted Left */}
                  <ellipse cx="53" cy="48" rx="36" ry="10" transform="rotate(-20 53 48)" />
                  {/* Ring 2 - Tilted Right */}
                  <ellipse cx="53" cy="48" rx="42" ry="14" transform="rotate(15 53 48)" />
                </svg>
              </motion.div>

              {/* Parallax Layer 2: Main Planet Orb */}
              <motion.div
                animate={{
                  x: mousePos.x,
                  y: mousePos.y,
                  scale: mousePos.x ? 1.02 : 1
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="relative w-[52%] h-[52%] rounded-full bg-gradient-to-br from-[#d4956a] via-[#c87941] to-[#402008] shadow-2xl shadow-copper/20 group-hover:shadow-copper/30 transition-shadow duration-300 flex-shrink-0"
              >
                {/* Planet Light reflection Spot */}
                <div className="absolute top-[18%] left-[18%] w-[32%] h-[32%] rounded-full bg-cream-100/30 blur-[2px]" />
                
                {/* Craters / Details */}
                <div className="absolute top-[22%] right-[32%] w-[6%] h-[6%] rounded-full bg-charcoal/30 blur-[0.5px]" />
                <div className="absolute top-[38%] right-[24%] w-[9%] h-[9%] rounded-full bg-charcoal/35 blur-[0.5px]" />
                <div className="absolute bottom-[38%] left-[42%] w-[5%] h-[5%] rounded-full bg-charcoal/20 blur-[0.5px]" />
                <div className="absolute bottom-[30%] left-[28%] w-[7%] h-[7%] rounded-full bg-charcoal/25 blur-[0.5px]" />
                <div className="absolute bottom-[35%] right-[34%] w-[11%] h-[11%] rounded-full bg-charcoal/40 blur-[0.5px]" />
              </motion.div>

              {/* Parallax Layer 3: Foreground Ring (wraps in front of planet) */}
              <motion.div
                animate={{ x: mousePos.x * 1.3, y: mousePos.y * 1.3 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
              >
                <svg className="w-full h-full opacity-35 text-[#d4956a]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  {/* Ring 3 - Deeply Tilted Ring in Foreground */}
                  <ellipse cx="53" cy="48" rx="46" ry="11" transform="rotate(-35 53 48)" />
                </svg>
              </motion.div>

              {/* Layer 4: Text Overlay (Priyank-style text layout) */}
              <div className="absolute left-10 bottom-12 z-20 pointer-events-none select-none">
                <h3 className="font-serif italic text-4xl sm:text-5xl text-white font-bold leading-none tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="font-mono text-[9px] tracking-[0.25em] text-cream-200/40 uppercase mt-3">
                  AI ENGINEER &nbsp;·&nbsp; EST. 2023
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Bio and stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {/* Big quote heading */}
            <motion.p variants={fadeUp} className="font-serif text-2xl sm:text-3xl text-charcoal dark:text-cream-100 leading-snug">
              I architect <span className="italic text-copper">intelligent</span> systems
              and ship the rest of the stack myself.
            </motion.p>

            {/* Bio paragraph */}
            <motion.p variants={fadeUp} className="text-base text-charcoal/70 dark:text-cream-200/60 leading-relaxed">
              I'm <strong className="text-charcoal dark:text-cream-100 font-semibold">{personalInfo.name} {personalInfo.lastName}</strong>, {about.bio.split('. ').slice(0, 2).join('. ')}.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-charcoal/70 dark:text-cream-200/60 leading-relaxed">
              {about.bio.split('. ').slice(2).join('. ')}
            </motion.p>

            <motion.p variants={fadeUp} className="text-base text-charcoal/50 dark:text-cream-200/50 font-serif italic leading-relaxed">
              I prefer software that does work over software that explains itself.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="border-t border-border-cream dark:border-border-light pt-8 grid grid-cols-3 gap-6"
            >
              {about.stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-serif italic text-3xl sm:text-4xl text-copper mb-2">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-charcoal/40 dark:text-cream-200/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
