import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiEnvelope, HiPhone, HiArrowRight, HiCheckCircle } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { personalInfo, googleFormConfig } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  })

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required'
    if (!formData.message.trim()) tempErrors.message = 'Message is required'
    
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus({ submitting: true, submitted: false, error: null })

    const formBody = new URLSearchParams()
    formBody.append(googleFormConfig.fields.name, formData.name)
    formBody.append(googleFormConfig.fields.email, formData.email)
    formBody.append(googleFormConfig.fields.subject, formData.subject)
    formBody.append(googleFormConfig.fields.message, formData.message)

    const isMockMode = !googleFormConfig.submitUrl || googleFormConfig.submitUrl.includes('YOUR_FORM_ID_HERE')

    if (isMockMode) {
      // Simulate form submission
      setTimeout(() => {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 1500)
    } else {
      try {
        await fetch(googleFormConfig.submitUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody.toString(),
        })
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } catch (err) {
        setStatus({
          submitting: false,
          submitted: false,
          error: 'Failed to send message. Please check your internet connection or email me directly.',
        })
      }
    }
  }

  const handleReset = () => {
    setStatus({ submitting: false, submitted: false, error: null })
  }

  const socialLinks = [
    {
      icon: SiGithub,
      label: 'GitHub',
      value: 'vishalpr013',
      href: personalInfo.github,
      gradient: 'from-violet-600/10 to-purple-600/5 hover:border-violet-500/30 dark:hover:border-violet-500/20',
      iconColor: 'text-violet-500',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
      gradient: 'from-blue-600/10 to-cyan-600/5 hover:border-blue-500/30 dark:hover:border-blue-500/20',
      iconColor: 'text-blue-500',
    },
    {
      icon: HiEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: 'from-cyan-600/10 to-teal-600/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/20',
      iconColor: 'text-cyan-500',
    },
    
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/5 via-violet-500/5 to-transparent rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Heading + Intro + Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <p className="section-label mb-3">Get in Touch</p>
                <h2 className="section-heading text-left text-4xl sm:text-5xl mb-6">
                  Let&apos;s <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 max-w-md">
                  I&apos;m always excited to discuss new opportunities, AI research collaborations, or interesting projects. Feel free to reach out through any of the channels.
                </p>
              </motion.div>

              {/* Social Channels List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4"
              >
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={idx}
                      variants={itemVariants}
                      href={item.href}
                      target={item.label !== 'Phone' && item.label !== 'Email' ? '_blank' : undefined}
                      rel={item.label !== 'Phone' && item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`glass-card flex items-center justify-between p-4 bg-white/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] rounded-2xl group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/[0.02] dark:hover:shadow-cyan-500/[0.05] hover:bg-gradient-to-r ${item.gradient}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/[0.04] flex items-center justify-center border border-slate-200/40 dark:border-white/[0.06] group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-white/10 transition-transform duration-300`}>
                          <Icon className={`w-5 h-5 ${item.iconColor} transition-colors`} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[200px] sm:max-w-xs font-mono">
                            {item.value}
                          </p>
                        </div>
                      </div>
                      <HiArrowRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative glass-card bg-white/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.06] rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl overflow-hidden">
              {/* Dynamic glow in background */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-violet-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!status.submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name & Email Group */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-100/55 dark:bg-white/[0.03] border ${
                            errors.name ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/80 dark:border-white/[0.06] focus:border-cyan-500 focus:ring-cyan-500/10'
                          } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-300 font-sans`}
                        />
                        {errors.name && (
                          <span className="text-xs text-rose-500 mt-1.5 block font-medium">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-100/55 dark:bg-white/[0.03] border ${
                            errors.email ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/80 dark:border-white/[0.06] focus:border-cyan-500 focus:ring-cyan-500/10'
                          } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-300 font-sans`}
                        />
                        {errors.email && (
                          <span className="text-xs text-rose-500 mt-1.5 block font-medium">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-100/55 dark:bg-white/[0.03] border ${
                          errors.subject ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/80 dark:border-white/[0.06] focus:border-cyan-500 focus:ring-cyan-500/10'
                        } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-300 font-sans`}
                      />
                      {errors.subject && (
                        <span className="text-xs text-rose-500 mt-1.5 block font-medium">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-100/55 dark:bg-white/[0.03] border ${
                          errors.message ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-200/80 dark:border-white/[0.06] focus:border-cyan-500 focus:ring-cyan-500/10'
                        } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-4 transition-all duration-300 font-sans resize-none`}
                      />
                      {errors.message && (
                        <span className="text-xs text-rose-500 mt-1.5 block font-medium">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {status.error && (
                      <div className="p-4 bg-rose-500/10 border border-rose-500/25 rounded-xl text-sm text-rose-500 font-medium font-sans">
                        {status.error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/15 hover:shadow-xl hover:shadow-cyan-500/35 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status.submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success State */
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 flex flex-col items-center justify-center text-center py-12 px-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10"
                    >
                      <HiCheckCircle className="w-10 h-10 text-emerald-500" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-heading">
                      Message Sent!
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-md mb-8">
                      Thank you for reaching out. Your message has been successfully transmitted. I will review it and get back to you as soon as possible.
                    </p>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-400/40 dark:hover:border-cyan-400/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
