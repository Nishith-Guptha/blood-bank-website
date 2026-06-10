import { useState } from 'react'

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
const medicalOptions = [
  'No known issues',
  'High blood pressure',
  'Medication or allergies',
  'Recent travel or vaccination'
]

function DonorRegistration({ onHeroSubmit, hero }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    bloodType: 'O+',
    lastDonation: '',
    medicalNotes: '',
    conditions: [],
    emergency: false
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please use a valid email.'
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{7,20}$/.test(formData.phone)) nextErrors.phone = 'Enter a valid phone number.'
    if (!formData.age || Number(formData.age) < 16 || Number(formData.age) > 80) nextErrors.age = 'Age must be between 16 and 80.'
    if (!formData.lastDonation) nextErrors.lastDonation = 'Select your last donation date.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleInput = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const toggleCondition = (option) => {
    setFormData((prev) => {
      const conditions = prev.conditions.includes(option)
        ? prev.conditions.filter((item) => item !== option)
        : [...prev.conditions, option]
      return { ...prev, conditions }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSuccess(true)
    if (onHeroSubmit) {
      onHeroSubmit({
        fullName: formData.fullName,
        bloodType: formData.bloodType,
        emergency: formData.conditions.length > 1
      })
    }
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      bloodType: 'O+',
      lastDonation: '',
      medicalNotes: '',
      conditions: [],
      emergency: false
    })
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12" aria-labelledby="register-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">Interactive application</p>
              <h2 id="register-heading" className="text-3xl font-semibold text-white sm:text-4xl">Complete your donor registration.</h2>
              <p className="text-slate-400 leading-7">
                Fill out the form and join LifeStream’s premium donor network with fast registration and personalized readiness guidance.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInput}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                    placeholder="Alex Morgan"
                  />
                  {errors.fullName && <span className="text-sm text-red-300">{errors.fullName}</span>}
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                    placeholder="alex@example.com"
                  />
                  {errors.email && <span className="text-sm text-red-300">{errors.email}</span>}
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInput}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                    placeholder="+1 555 014 233"
                  />
                  {errors.phone && <span className="text-sm text-red-300">{errors.phone}</span>}
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  Age
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInput}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                    placeholder="29"
                  />
                  {errors.age && <span className="text-sm text-red-300">{errors.age}</span>}
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  Blood Type
                  <select
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleInput}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                  >
                    {bloodTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  Last Donation Date
                  <input
                    type="date"
                    name="lastDonation"
                    value={formData.lastDonation}
                    onChange={handleInput}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                  />
                  {errors.lastDonation && <span className="text-sm text-red-300">{errors.lastDonation}</span>}
                </label>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Medical history</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {medicalOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleCondition(option)}
                      className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${formData.conditions.includes(option)
                        ? 'border-red-500 bg-red-500/10 text-white'
                        : 'border-white/10 bg-slate-950/90 text-slate-300 hover:border-red-500 hover:text-white'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <label className="space-y-2 text-sm text-slate-300">
                Medical notes
                <textarea
                  name="medicalNotes"
                  rows="4"
                  value={formData.medicalNotes}
                  onChange={handleInput}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                  placeholder="Notes for the medical team"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-600"
              >
                {loading ? 'Submitting...' : 'Submit application'}
              </button>
              {success && (
                <p className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200">
                  Registration successful! We’ll contact you with next steps shortly.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_70px_rgba(15,23,42,0.25)]">
              <p className="text-sm uppercase tracking-[0.3em] text-red-300">Designed for donors</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Speed, safety, and support.</h3>
              <p className="mt-4 text-slate-400 leading-7">
                This premium registration form is built for responsive mobile use and provides the clarity donors need to submit information confidently.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">✅</p>
                <p className="mt-4 font-semibold text-white">Accessible inputs</p>
                <p className="mt-2 text-slate-400">Large touch targets and clean error messaging.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">🔔</p>
                <p className="mt-4 font-semibold text-white">Responsive feedback</p>
                <p className="mt-2 text-slate-400">Loading and confirmation states keep donors informed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonorRegistration
