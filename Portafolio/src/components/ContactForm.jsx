import { useForm, ValidationError } from '@formspree/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

function ContactForm() {
  const { t } = useTranslation('contactform')
  const [state, handleSubmit] = useForm("xlgwajze")
  const [text, setText] = useState("")

  const handleAutoResize = (e) => {
    e.target.style.height = "auto"
    e.target.style.height = e.target.scrollHeight + "px"
  }

  if (state.succeeded) {
    return (
      <motion.div
        className="flex flex-col items-center gap-4 text-center
                   border border-[#22AED1]/30 bg-[#22AED1]/06
                   rounded-xl p-10 max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10 h-10 rounded-full border-[1.5px] border-[#22AED1]
                        flex items-center justify-center text-[#22AED1] text-lg">
          ✓
        </div>
        <p className="text-base font-medium text-[#e8f4fa]">{t('successTitle')}</p>
        <p className="text-sm font-mono text-[#8ab8cc]">// {t('successSubtitle')}</p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col gap-5
                 border border-[#0a3a5a] rounded-xl p-8
                 bg-[#084569]/18"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Name */}
      <Field label={t('name')} error={<ValidationError prefix="Name" field="name" errors={state.errors} />}>
        <input
          required
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          className="field-input"
        />
      </Field>

      {/* Email */}
      <Field label="Email" error={<ValidationError prefix="Email" field="email" errors={state.errors} />}>
        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          className="field-input"
        />
      </Field>

      {/* Message */}
      <Field label={t('message')} error={<ValidationError prefix="Message" field="message" errors={state.errors} />}>
        <textarea
          required
          id="message"
          name="message"
          value={text}
          rows={3}
          maxLength={300}
          placeholder={t('messagePlaceholder')}
          onChange={(e) => setText(e.target.value)}
          onInput={handleAutoResize}
          className="field-input resize-none overflow-hidden"
        />
        <p className="text-[11px] font-mono text-[#3a6a8a] text-right -mt-2">
          {text.length}/300
        </p>
      </Field>

      <hr className="border-[#0a3a5a]" />

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2
                   py-3 rounded-lg font-mono text-[.8rem] tracking-wider
                   text-[#c8e8f5] bg-[#084569]/50 border border-[#016FB9]
                   hover:bg-[#22AED1]/20 hover:border-[#22AED1] hover:text-[#22AED1]
                   disabled:opacity-40 disabled:cursor-not-allowed
                   transition-all duration-150"
        whileHover={{ x: 1 }}
        whileTap={{ scale: 0.98 }}
      >
        {state.submitting ? t('submitting') : t('submit')}
        {!state.submitting && <span className="text-sm">↗</span>}
      </motion.button>
    </motion.form>
  )
}

function Field({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-mono text-[#3a6a8a] tracking-widest uppercase">
        {label}
      </label>
      {children}
      {error}
    </div>
  )
}

function ContactFormSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
      {/* Header */}
      <div className="flex items-baseline justify-center gap-3 mb-2">
        <span className="text-2xl font-mono text-[#016FB9]">&gt;</span>
        <h2 className="text-4xl font-medium text-[#e8f4fa] tracking-tight">Contact</h2>
        <span className="text-2xl font-mono text-[#016FB9]">_</span>
      </div>
      <p className="text-center text-[11px] font-mono text-[#3a6a8a] tracking-widest mb-10">
        // get in touch
      </p>

      <ContactForm />
    </section>
  )
}

export default ContactFormSection