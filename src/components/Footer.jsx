function Footer() {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#donors', label: 'Donors' },
    { href: '#inventory', label: 'Inventory' },
    { href: '#about', label: 'About' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xl font-semibold text-white">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-red-500/15 text-2xl">❤️</span>
              LifeStream
            </div>
            <p className="max-w-xl text-slate-400">
              A premium blood donation platform designed for modern healthcare teams, donors, and communities.
            </p>
            <div className="flex flex-wrap gap-3 text-slate-300">
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">Twitter</span>
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">LinkedIn</span>
              <span className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2">Instagram</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Quick links</h3>
              <ul className="mt-6 space-y-3 text-slate-300">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Newsletter</h3>
              <p className="mt-6 text-slate-400">Stay informed about donation drives, inventory updates, and premium hospital partnerships.</p>
              <div className="mt-6 flex gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-red-500"
                />
                <button className="rounded-3xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 LifeStream. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
