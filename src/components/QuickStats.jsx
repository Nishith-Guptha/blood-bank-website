import { useEffect, useState } from 'react'

const stats = [
  { label: 'Total donors', value: 1248, icon: '🩸' },
  { label: 'Lives saved', value: 892, icon: '❤️' },
  { label: 'Blood units', value: 1334, icon: '🧪' },
  { label: 'Partner hospitals', value: 56, icon: '🏥' }
]

function QuickStats() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => {
        return prev.map((current, index) => {
          const target = stats[index].value
          if (current >= target) return target
          const step = Math.ceil(target / 40)
          return Math.min(target, current + step)
        })
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="stats" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-300">Quick stats</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Performance you can trust.</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Track your organization’s impact with premium analytics and donor outreach statistics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.3)] transition hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/80 text-2xl shadow-[0_20px_50px_rgba(239,68,68,0.1)]">
                {item.icon}
              </div>
              <p className="mt-6 text-4xl font-bold text-white">{counts[index].toLocaleString()}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickStats
