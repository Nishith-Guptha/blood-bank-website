import { useEffect, useMemo, useState } from 'react'

const initialInventory = [
  { type: 'A+', stock: 34 },
  { type: 'A-', stock: 14 },
  { type: 'B+', stock: 28 },
  { type: 'B-', stock: 10 },
  { type: 'O+', stock: 48 },
  { type: 'O-', stock: 12 },
  { type: 'AB+', stock: 22 },
  { type: 'AB-', stock: 8 }
]

const typeAccent = {
  'A+': 'border-cyan-400/40 shadow-cyan-500/20',
  'A-': 'border-pink-400/40 shadow-pink-500/20',
  'B+': 'border-yellow-400/40 shadow-yellow-500/20',
  'B-': 'border-emerald-400/40 shadow-emerald-500/20',
  'O+': 'border-fuchsia-400/40 shadow-fuchsia-500/20',
  'O-': 'border-cyan-400/40 shadow-cyan-500/20',
  'AB+': 'border-pink-400/40 shadow-pink-500/20',
  'AB-': 'border-yellow-400/40 shadow-yellow-500/20'
}

const statusLabel = (stock) => {
  if (stock <= 12) return 'CRITICAL'
  if (stock <= 22) return 'WATCH'
  if (stock <= 29) return 'STABLE'
  return 'STOCK'
}

const statusColor = (stock) => {
  if (stock <= 12) return 'text-red-400 bg-red-500/10 border-red-400/20'
  if (stock <= 22) return 'text-amber-300 bg-amber-500/10 border-amber-300/20'
  if (stock <= 29) return 'text-cyan-300 bg-cyan-500/10 border-cyan-300/20'
  return 'text-emerald-300 bg-emerald-500/10 border-emerald-300/20'
}

function InventoryTracker({ hero }) {
  const [inventory, setInventory] = useState(initialInventory)
  const [statusFilter, setStatusFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [selectedType, setSelectedType] = useState(initialInventory[0].type)
  const [displayStock, setDisplayStock] = useState(initialInventory.map((item) => item.stock))

  useEffect(() => {
    const interval = setInterval(() => {
      setInventory((prev) => {
        const updated = prev.map((item) => {
          const change = Math.floor(Math.random() * 5) - 2
          const next = Math.min(55, Math.max(5, item.stock + change))
          return { ...item, stock: next }
        })
        setLastUpdated(new Date())
        return updated
      })
    }, 9000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animation = setInterval(() => {
      setDisplayStock((current) => current.map((value, index) => {
        const target = inventory[index]?.stock ?? value
        if (value === target) return value
        const diff = target - value
        const step = Math.max(1, Math.ceil(Math.abs(diff) / 5))
        return value + Math.sign(diff) * step
      }))
    }, 80)

    return () => clearInterval(animation)
  }, [inventory])

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const status = statusLabel(item.stock)
      const matchesStatus = statusFilter === 'All' || status === statusFilter
      const matchesType = typeFilter === 'All' || item.type === typeFilter
      return matchesStatus && matchesType
    })
  }, [inventory, statusFilter, typeFilter])

  const selectedItem = inventory.find((item) => item.type === selectedType) || inventory[0]
  const selectedStock = displayStock[inventory.findIndex((item) => item.type === selectedItem.type)] ?? selectedItem.stock

  return (
    <section id="inventory" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Blood inventory tracker</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Monitor all blood types with neon clarity.</h2>
            <p className="max-w-2xl text-slate-400">
              LifeStream updates inventory in real time, highlights urgent needs with glowing cues, and helps donors move faster when hospital demand spikes.
            </p>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 text-sm text-slate-300 ring-1 ring-white/10">
              <span>Last updated</span>
              <span className="rounded-full bg-slate-900/90 px-3 py-1 text-slate-200">{lastUpdated.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block rounded-3xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-200">
              Filter status
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
              >
                <option>All</option>
                <option>STOCK</option>
                <option>STABLE</option>
                <option>WATCH</option>
                <option>CRITICAL</option>
              </select>
            </label>
            <label className="block rounded-3xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-200">
              Filter type
              <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none"
              >
                <option>All</option>
                {inventory.map((item) => (
                  <option key={item.type}>{item.type}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {hero && (
          <div className="mt-10 rounded-[2rem] border border-cyan-500/20 bg-cyan-500/5 p-6 text-slate-100 shadow-[0_30px_90px_rgba(6,182,212,0.18)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Hero mission</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{hero.fullName}, your next lifesaving donation is ready.</h3>
              </div>
              <div className="rounded-full bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                {hero.level} donor • {hero.badges.length} badges
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-slate-300">
              Keep the blood bank strong by responding to urgent needs in your area. Your profile is already active and ready to help.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredInventory.map((item) => {
            const displayIndex = inventory.findIndex((entry) => entry.type === item.type)
            return (
              <article
                key={item.type}
                onClick={() => setSelectedType(item.type)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.35)] transition duration-500 ${selectedType === item.type ? 'ring-1 ring-cyan-400/20' : 'hover:-translate-y-2 hover:border-red-500/30'} ${typeAccent[item.type]}`}
              >
                <div className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.type}</p>
                    <p className="mt-2 text-sm text-slate-400">Units available</p>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${statusColor(item.stock)}`}>
                    {statusLabel(item.stock)}
                  </span>
                </div>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <p className="text-5xl font-semibold text-white transition-all duration-500">{displayStock[displayIndex] ?? item.stock}</p>
                  <div className="rounded-3xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-200">{item.type}</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {statusLabel(item.stock) === 'CRITICAL' ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-2 text-xs font-semibold uppercase text-red-200 animate-pulseSlow">
                      ⚠️ Urgent need
                    </span>
                  ) : statusLabel(item.stock) === 'WATCH' ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-2 text-xs font-semibold uppercase text-amber-200">
                      ⏱️ Watch
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-2 text-xs font-semibold uppercase text-cyan-200">
                      ✅ Ready to dispatch
                    </span>
                  )}
                </div>
                <div className="tooltip-group mt-6">
                  <div className="tooltip rounded-3xl bg-slate-900/95 px-4 py-3 text-xs text-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                    Click to view detailed status and mission priority for this blood type.
                  </div>
                </div>
              </article>
            )
          })}

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Selected blood type</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{selectedItem.type} units are {statusLabel(selectedItem.stock).toLowerCase()}</h3>
            <p className="mt-4 max-w-2xl text-slate-400">
              {selectedItem.type} is currently flagged as {statusLabel(selectedItem.stock).toLowerCase()}. This gives your team a clear status pulse and helps donors respond faster.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Current stock</p>
                <p className="mt-3 text-3xl font-semibold text-white">{selectedStock}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Status</p>
                <p className="mt-3 text-3xl font-semibold text-white">{statusLabel(selectedItem.stock)}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Urgent support</p>
                <p className="mt-3 text-3xl font-semibold text-white">{selectedItem.stock <= 12 ? 'High' : selectedItem.stock <= 22 ? 'Medium' : 'Stable'}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-300">Mission control</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Supply gap</p>
                <p className="mt-3 text-lg font-semibold text-white">{Math.max(0, 30 - selectedItem.stock)} units needed</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Priority</p>
                <p className="mt-3 text-lg font-semibold text-white">{selectedItem.stock <= 12 ? 'Critical emergency' : 'Priority watch'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InventoryTracker
