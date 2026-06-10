function HeroNav({ hero }) {
  return (
    <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 md:flex">
      {hero ? (
        <>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-red-500/15 text-white">❤️</span>
          <div className="text-left leading-5">
            <p className="text-sm font-semibold text-white">{hero.fullName.split(' ')[0]}</p>
            <p className="text-xs text-slate-400">{hero.badges.length} badges</p>
          </div>
        </>
      ) : (
        <span className="rounded-full border border-white/10 bg-slate-800/70 px-3 py-2 text-white">Become a Hero</span>
      )}
    </div>
  )
}

export default HeroNav
