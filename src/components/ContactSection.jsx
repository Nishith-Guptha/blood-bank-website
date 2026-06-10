import { useState } from 'react'

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.'
    if (!formData.message.trim()) nextErrors.message = 'Please share a message.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 5000)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  return (
    <section id="contact" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Contact support</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Need help or want to connect?</h2>
            <p className="mt-4 text-slate-400 leading-7">
              Our support line is ready to answer donor questions, partnership inquiries, and donation drive coordination requests.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">📞</p>
                <p className="mt-4 font-semibold text-white">Phone</p>
                <p className="mt-2 text-slate-400">+1 (800) 555-0133</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">✉️</p>
                <p className="mt-4 font-semibold text-white">Email</p>
                <p className="mt-2 text-slate-400">hello@lifestream.org</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">📍</p>
                <p className="mt-4 font-semibold text-white">Location</p>
                <p className="mt-2 text-slate-400">Community Blood Center, City Hub</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">⏰</p>
                <p className="mt-4 font-semibold text-white">Support</p>
                <p className="mt-2 text-slate-400">24/7 donor coordination line</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Message us</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Send a quick note</h3>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="space-y-2 text-sm text-slate-300">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                  placeholder="Your name"
                />
                {errors.name && <span className="text-sm text-red-300">{errors.name}</span>}
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                  placeholder="you@example.com"
                />
                {errors.email && <span className="text-sm text-red-300">{errors.email}</span>}
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                  placeholder="How can we support you today?"
                />
                {errors.message && <span className="text-sm text-red-300">{errors.message}</span>}
              </label>
              <button className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-600">
                Send message
              </button>
              {success && (
                <p className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200">
                  Message sent. Our team will reach out shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
