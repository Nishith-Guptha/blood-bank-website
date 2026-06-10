import { useState } from 'react'
import HeroNav from './HeroNav'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'donors', label: 'Donors' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'heroes', label: 'Heroes' },
  { id: 'about', label: 'About' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' }
]

function Header({ hero }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold text-white md:text-xl">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-red-500/15 text-2xl shadow-[0_20px_60px_rgba(239,68,68,0.24)]">
            ❤️
          </span>
          <span className="tracking-tight">LifeStream</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <HeroNav hero={hero} />
          <a
            href="#donors"
            className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
          >
            Register Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/90 text-white transition hover:border-red-500 md:hidden"
        >
          <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="space-y-6 border-t border-white/10 bg-slate-950/90 px-6 py-6 text-slate-200 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 transition hover:bg-slate-800/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#donors"
            onClick={() => setIsOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-red-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
