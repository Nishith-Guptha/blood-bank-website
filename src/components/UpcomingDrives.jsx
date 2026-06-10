import { useMemo, useState } from 'react'

const drives = [
  {
    title: 'City Hub Donation Drive',
    location: 'City Hub',
    date: 'June 21, 2026',
    time: '10:00 AM – 3:00 PM',
    slots: 24
  },
  {
    title: 'Lakeview Community Center',
    location: 'Lakeview',
    date: 'June 28, 2026',
    time: '9:00 AM – 2:00 PM',
    slots: 18
  },
  {
    title: 'Northside Health Fair',
    location: 'Northside',
    date: 'July 5, 2026',
    time: '11:00 AM – 4:00 PM',
    slots: 12
  }
]

function UpcomingDrives() {
  const [locationFilter, setLocationFilter] = useState('All')

  const locations = useMemo(
    () => ['All', ...Array.from(new Set(drives.map((drive) => drive.location)))],
    []
  )

  const filteredDrives = useMemo(
    () => drives.filter((drive) => locationFilter === 'All' || drive.location === locationFilter),
    [locationFilter]
  )

  return (
    <section id="drives" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Upcoming blood drives</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Join a local donation event.</h2>
          </div>
          <label className="block rounded-3xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-200">
            Filter by location
            <select
              value={locationFilter}
              onChange={(event) => setLocationFilter(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none"
            >
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredDrives.map((drive) => (
            <article
              key={drive.title}
              className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.32)] transition hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{drive.location}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{drive.title}</h3>
              <p className="mt-4 text-slate-300">{drive.date}</p>
              <p className="text-slate-400">{drive.time}</p>
              <div className="mt-6 flex items-center justify-between gap-3 text-sm text-slate-300">
                <span>{drive.slots} slots available</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-cyan-200">Book now</span>
              </div>
              <button className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600">
                Register for drive
              </button>
            </article>
          ))}
          {filteredDrives.length === 0 && (
            <div className="col-span-full rounded-[2rem] border border-dashed border-white/10 bg-slate-950/80 p-10 text-center text-slate-400">
              No drives found for this location. Please choose another filter.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default UpcomingDrives
