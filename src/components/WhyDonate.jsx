const benefits = [
  {
    icon: '🩺',
    title: 'Verified readiness',
    description: 'Donors are supported with eligibility checks and personalized guidance.'
  },
  {
    icon: '⚡',
    title: 'Fast alerts',
    description: 'Receive immediate donor notifications when your blood type is needed.'
  },
  {
    icon: '🤝',
    title: 'Community care',
    description: 'Connect with local hospitals and donor networks that prioritize safety.'
  },
  {
    icon: '📈',
    title: 'Smart tracking',
    description: 'Access transparent inventory trends and donation history at a glance.'
  }
]

function WhyDonate() {
  return (
    <section id="donors" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Why donate</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Make every donation matter.</h2>
            <p className="mt-4 text-slate-400 leading-7">
              LifeStream makes donation easy with modern tracking, trusted alerts, and a secure registration experience built for donors and healthcare teams.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] transition hover:-translate-y-1">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-red-500/10 text-2xl text-red-300">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyDonate
