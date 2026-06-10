import { useEffect, useMemo, useState } from 'react'

const initialHeroes = [
  { name: 'Avery Reed', type: 'O-', donations: 24, lives: 96, badges: ['first', 'lifesaver', 'platinum'], events: 7 },
  { name: 'Jordan Kim', type: 'A+', donations: 18, lives: 72, badges: ['first', 'platinum'], events: 5 },
  { name: 'Casey Nguyen', type: 'B+', donations: 12, lives: 48, badges: ['first', 'platinum', 'champion'], events: 9 },
  { name: 'Mia Patel', type: 'AB-', donations: 9, lives: 36, badges: ['first', 'champion'], events: 4 },
  { name: 'Noah Brooks', type: 'O+', donations: 8, lives: 32, badges: ['first'], events: 3 },
  { name: 'Riley Scott', type: 'A-', donations: 7, lives: 28, badges: ['first'], events: 2 },
  { name: 'Taylor Morgan', type: 'B-', donations: 5, lives: 20, badges: ['first'], events: 1 },
  { name: 'Emerson Lee', type: 'AB+', donations: 4, lives: 16, badges: ['first'], events: 0 },
  { name: 'Harper Chen', type: 'O-', donations: 3, lives: 12, badges: ['first'], events: 0 },
  { name: 'Quinn Ellis', type: 'A+', donations: 2, lives: 8, badges: ['first'], events: 0 }
]

function HeroesLeaderboard({ currentHero }) {
  const [heroes, setHeroes] = useState(initialHeroes)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroes((prev) => prev.map((hero, idx) => {
        if (idx < 3) {
          return { ...hero, donations: hero.donations + Math.round(Math.random() * 1), lives: hero.lives + Math.round(Math.random() * 2) }
        }
        return hero
      }))
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const ordered = useMemo(() => [...heroes].sort((a, b) => b.donations - a.donations), [heroes])

  return (
    <section id="heroes" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Heroes leaderboard</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Top donors climbing the ranks.</h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Cheer on the leaders and track your own hero progress as blood donations power hospital support.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
            {currentHero ? `You’ve unlocked ${currentHero.badges.length} badges` : 'Sign up to become a hero'}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {ordered.map((hero, index) => (
            <article
              key={hero.name}
              className={`rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 ${index === 0 ? 'border-yellow-400/40 shadow-yellow-400/10' : index === 1 ? 'border-slate-300/40 shadow-slate-300/10' : index === 2 ? 'border-amber-300/40 shadow-amber-300/10' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Rank #{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{hero.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">Blood type {hero.type}</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-xl text-white">{index < 3 ? ['🥇', '🥈', '🥉'][index] : index + 1}</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Donations</p>
                  <p className="mt-2 text-xl font-semibold text-white">{hero.donations}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Lives saved</p>
                  <p className="mt-2 text-xl font-semibold text-white">{hero.lives}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                {hero.badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{badge}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroesLeaderboard
