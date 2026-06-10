import AnimatedLottie from './AnimatedLottie'

function Hero({ hero, onDonate }) {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-24 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute right-[-5%] top-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink-500/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-slate-950/90 via-slate-950 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
          <div className="relative z-10 space-y-8 animate-slideUp">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-red-200 shadow-[0_20px_60px_rgba(239,68,68,0.12)]">
              <span className="text-base">🏆</span>
              Award-quality medical design with human-first clarity
            </span>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">The blood donation that saves lives, not just time</p>
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                You’re not just donating. <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-red-500 bg-clip-text text-transparent">you’re becoming a lifesaver.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Simple donation. extraordinary impact. LifeStream brings modern motion, elegant trust signals, and a premium experience to every blood donation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {hero ? (
                <button
                  type="button"
                  onClick={onDonate}
                  className="button-ripple inline-flex min-h-[52px] items-center justify-center rounded-full bg-red-500 px-7 py-4 text-base font-semibold text-white shadow-[0_24px_70px_rgba(239,68,68,0.24)] transition hover:-translate-y-0.5 hover:bg-red-600"
                >
                  Donate again
                </button>
              ) : (
                <a
                  href="#donors"
                  className="button-ripple inline-flex min-h-[52px] items-center justify-center rounded-full bg-red-500 px-7 py-4 text-base font-semibold text-white shadow-[0_24px_70px_rgba(239,68,68,0.24)] transition hover:-translate-y-0.5 hover:bg-red-600"
                >
                  Become a hero
                </a>
              )}
              <a
                href="#inventory"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:border-red-300 hover:text-red-100"
              >
                Explore urgent needs
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/85 p-6 text-slate-300 shadow-[0_30px_60px_rgba(15,23,42,0.25)]">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Impact</p>
                <p className="mt-4 text-xl font-semibold text-white">One donation supports 4+ critical patients.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/85 p-6 text-slate-300 shadow-[0_30px_60px_rgba(15,23,42,0.25)]">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Trust</p>
                <p className="mt-4 text-xl font-semibold text-white">Built for hospitals, emergency teams, and donors who need confidence.</p>
              </div>
            </div>
          </div>

          <div className="card-3d relative flex justify-center animate-fadeIn">
            <div className="card-3d-inner relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/80 p-8 shadow-intense backdrop-blur-xl transition-all duration-500 hover:bg-slate-900/90">
              <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.16),_transparent_70%)]" />
              <div className="relative space-y-6">
                <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.25)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Hero catalyst</p>
                      <h2 className="mt-3 text-3xl font-semibold text-white">Bespoke donor journey</h2>
                    </div>
                    <span className="rounded-3xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.35em] text-slate-200">Live lab</span>
                  </div>
                  <div className="mt-8 aspect-[4/3]">
                    <AnimatedLottie variant="drop" className="h-full w-full" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 text-slate-300 shadow-[0_18px_45px_rgba(15,23,42,0.22)]">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Motion</p>
                    <p className="mt-4 text-lg font-semibold text-white">Animated clarity, real motion.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 text-slate-300 shadow-[0_18px_45px_rgba(15,23,42,0.22)]">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Voice</p>
                    <p className="mt-4 text-lg font-semibold text-white">Minimal, confident, deeply human.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
