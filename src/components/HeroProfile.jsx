import BadgeSystem from './BadgeSystem'

function HeroProfile({ profile }) {
  if (!profile) {
    return (
      <section id="hero-profile" className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-12 text-center shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
          <p className="text-sm uppercase tracking-[0.3em] text-red-300">Hero profile</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Claim your hero identity.</h2>
          <p className="mt-4 text-slate-400">
            Register as a hero and your profile will appear here with your achievements, rank, and donation stats.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="hero-profile" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Hero profile</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{profile.fullName}</h2>
            <p className="mt-2 text-slate-400">Hero ID: <span className="text-white">{profile.heroId}</span></p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Donor since</p>
                <p className="mt-3 text-2xl font-semibold text-white">{profile.heroSince}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Next eligible donation</p>
                <p className="mt-3 text-2xl font-semibold text-white">{profile.nextEligible}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Donations</p>
                <p className="mt-3 text-3xl font-semibold text-white">{profile.donationCount}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Lives saved</p>
                <p className="mt-3 text-3xl font-semibold text-white">{profile.livesSaved}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Level</p>
                <p className="mt-3 text-3xl font-semibold text-white">{profile.level}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Motivation</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">You’ve saved {profile.livesSaved} lives.</h3>
              <p className="mt-4 text-slate-400 leading-7">
                Your dedication inspires the community. Keep donating to climb the ranks and unlock new hero badges.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Progress</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>XP</span>
                  <span>{profile.xp} / {profile.nextLevelXp}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-900/80">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-pink-400" style={{ width: `${(profile.xp / profile.nextLevelXp) * 100}%` }} />
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Badges</p>
              <div className="mt-6">
                <BadgeSystem profile={profile} small />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroProfile
