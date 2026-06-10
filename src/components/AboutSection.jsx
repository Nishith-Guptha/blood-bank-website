function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">About LifeStream</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Premium coordination for modern blood services.</h2>
            <p className="mt-5 text-slate-400 leading-8">
              LifeStream brings trust, speed, and transparency to blood donation efforts through elegant UX, clear inventory signals, and reliable donor engagement.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">🎯</p>
                <p className="mt-4 font-semibold text-white">Mission</p>
                <p className="mt-2 text-slate-400">Help donors and hospitals stay aligned with fast, safe donation workflows.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-2xl">🌟</p>
                <p className="mt-4 font-semibold text-white">Vision</p>
                <p className="mt-2 text-slate-400">Create a community-first platform with intelligent blood inventory guidance.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: '🌐', title: 'Local coverage', text: 'Support nearby hospitals and clinics across the region.' },
              { icon: '🔒', title: 'Secure intake', text: 'Collect donor details clearly with strong visual hierarchy.' },
              { icon: '🤝', title: 'Community care', text: 'Prioritize donor comfort, safety, and trusted outreach.' },
              { icon: '📊', title: 'Smart tracking', text: 'Use inventory analytics to identify urgent needs quickly.' }
            ].map((value) => (
              <div key={value.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.28)] transition hover:-translate-y-1">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-red-500/10 text-2xl text-red-300">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-slate-400">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
