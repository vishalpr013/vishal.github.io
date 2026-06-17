import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiEnvelope, HiArrowRight, HiCheckCircle } from 'react-icons/hi2'
import { SiGithub } from 'react-icons/si'
import { FaPaperPlane, FaLinkedin } from 'react-icons/fa'
import { personalInfo, googleFormConfig } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
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
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
    },
    {
      icon: HiEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
  ]

  return (
    <section id="contact" className="section-cream section-padding relative overflow-hidden">
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
                <span className="section-label mb-6 block">Get in Touch</span>
                <h2 className="section-heading text-charcoal dark:text-cream-100 mb-6">
                  Let's <span className="italic text-copper">connect.</span>
                </h2>
                <p className="section-subtext text-charcoal/60 dark:text-cream-200/50 mb-10 max-w-md">
                  I'm always excited to discuss new opportunities, AI research collaborations, or interesting projects. Feel free to reach out.
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
                      target={item.label !== 'Email' ? '_blank' : undefined}
                      rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="border border-border-cream dark:border-border-light p-4 bg-cream-50/50 dark:bg-charcoal-50/20 hover:bg-cream-100/50 dark:hover:bg-charcoal-50 hover:border-copper/30 dark:hover:border-copper/30 rounded-sm flex items-center justify-between group transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-sm bg-copper/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-copper" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-serif font-semibold text-charcoal dark:text-cream mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-xs text-charcoal/50 dark:text-cream-200/40 truncate max-w-[200px] sm:max-w-xs font-mono">
                            {item.value}
                          </p>
                        </div>
                      </div>
                      <HiArrowRight className="w-4 h-4 text-charcoal/30 dark:text-cream-200/30 group-hover:text-copper group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
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
            <div className="relative border border-border-cream dark:border-border-light bg-cream-50 dark:bg-charcoal-50/30 rounded-sm p-6 sm:p-8">
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
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-charcoal/50 dark:text-cream-200/50 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-sm bg-transparent border ${
                            errors.name ? 'border-rose-600 focus:border-rose-600' : 'border-border-cream dark:border-border-light focus:border-copper'
                          } text-charcoal dark:text-cream placeholder-charcoal/30 dark:placeholder-cream-200/30 focus:outline-none transition-all duration-300 font-sans`}
                        />
                        {errors.name && (
                          <span className="text-xs text-rose-600 mt-1.5 block font-medium">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-charcoal/50 dark:text-cream-200/50 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-sm bg-transparent border ${
                            errors.email ? 'border-rose-600 focus:border-rose-600' : 'border-border-cream dark:border-border-light focus:border-copper'
                          } text-charcoal dark:text-cream placeholder-charcoal/30 dark:placeholder-cream-200/30 focus:outline-none transition-all duration-300 font-sans`}
                        />
                        {errors.email && (
                          <span className="text-xs text-rose-600 mt-1.5 block font-medium">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-charcoal/50 dark:text-cream-200/50 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className={`w-full px-4 py-3 rounded-sm bg-transparent border ${
                          errors.subject ? 'border-rose-600 focus:border-rose-600' : 'border-border-cream dark:border-border-light focus:border-copper'
                        } text-charcoal dark:text-cream placeholder-charcoal/30 dark:placeholder-cream-200/30 focus:outline-none transition-all duration-300 font-sans`}
                      />
                      {errors.subject && (
                        <span className="text-xs text-rose-600 mt-1.5 block font-medium">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-charcoal/50 dark:text-cream-200/50 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        className={`w-full px-4 py-3 rounded-sm bg-transparent border ${
                          errors.message ? 'border-rose-600 focus:border-rose-600' : 'border-border-cream dark:border-border-light focus:border-copper'
                        } text-charcoal dark:text-cream placeholder-charcoal/30 dark:placeholder-cream-200/30 focus:outline-none transition-all duration-300 font-sans resize-none`}
                      />
                      {errors.message && (
                        <span className="text-xs text-rose-600 mt-1.5 block font-medium">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {status.error && (
                      <div className="p-4 bg-rose-500/10 border border-rose-600/25 rounded-sm text-sm text-rose-600 font-medium">
                        {status.error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-sm text-sm font-mono uppercase tracking-wider text-cream dark:text-charcoal bg-charcoal dark:bg-cream hover:bg-copper dark:hover:bg-copper dark:hover:text-cream transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status.submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
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
                      className="w-12 h-12 rounded-sm bg-copper/10 flex items-center justify-center mb-6"
                    >
                      <HiCheckCircle className="w-6 h-6 text-copper" />
                    </motion.div>
                    
                    <h3 className="text-xl font-serif font-bold text-charcoal dark:text-cream mb-3">
                      Message Sent!
                    </h3>
                    
                    <p className="text-charcoal/60 dark:text-cream-200/60 text-sm leading-relaxed max-w-md mb-8">
                      Thank you for reaching out. Your message has been successfully transmitted. I will get back to you as soon as possible.
                    </p>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm text-xs font-mono uppercase tracking-wider text-charcoal dark:text-cream border border-border-cream dark:border-border-light hover:border-copper transition-all duration-300 cursor-pointer"
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
