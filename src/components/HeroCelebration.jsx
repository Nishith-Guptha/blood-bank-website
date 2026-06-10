import { useEffect, useMemo, useState } from 'react'
import BadgeSystem from './BadgeSystem'
import AnimatedLottie from './AnimatedLottie'

function HeroCelebration({ profile, onClose }) {
  const [shared, setShared] = useState(false)
  const badgePreview = useMemo(() => profile?.badges || [], [profile])

  useEffect(() => {
    const timeout = setTimeout(onClose, 9000)
    return () => clearTimeout(timeout)
  }, [onClose])

  const handleShare = () => {
    setShared(true)
    if (navigator.clipboard) {
      navigator.clipboard.writeText('I just saved lives with LifeStream!')
    }
    window.setTimeout(() => setShared(false), 3000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-6 backdrop-blur-xl">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={index}
            className="confetti-piece"
            style={{ left: `${8 + index * 8}%`, animationDelay: `${index * 0.08}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.16),_transparent_25%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,116,144,0.18),_transparent_22%)]" />

        <div className="relative grid gap-8 text-center text-white">
          <div className="mx-auto inline-flex h-28 w-28 items-center justify-center rounded-full bg-red-500/20 text-5xl shadow-[0_0_90px_rgba(239,68,68,0.35)] animate-pulse">
            ❤️
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">You just saved lives today.</h2>
            <p className="text-lg text-slate-300 sm:text-xl">
              With your donation, <span className="font-semibold text-white">{profile?.livesSaved}</span> people will receive care — and your badge is now brighter than ever.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.25)]">
              <div className="relative mx-auto mb-6 h-60 w-full overflow-hidden rounded-[2rem] bg-slate-950/90">
                <AnimatedLottie variant="celebrate" className="h-full w-full" />
              </div>
              <div className="space-y-4 text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Hero badge</p>
                <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-cyan-400 p-1 shadow-[0_0_60px_rgba(239,68,68,0.35)]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/90 text-center text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-300">{profile?.level}</p>
                      <p className="mt-2 text-xl font-semibold">Hero</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.25)]">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Mission stats</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-slate-950/90 p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Donations</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{profile?.donationCount}</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-950/90 p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Lives saved</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{profile?.livesSaved}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.25)]">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Share the moment</p>
                <p className="mt-3 text-slate-300">
                  Celebrate your impact with the community and invite loved ones to join the next lifesaving mission.
                </p>
                <button
                  type="button"
                  onClick={handleShare}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  {shared ? 'Achievement copied!' : 'Share achievement'}
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.22)]">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Badge preview</p>
            <BadgeSystem profile={profile} small />
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-xl text-white transition hover:border-red-400"
          aria-label="Close celebration"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default HeroCelebration
