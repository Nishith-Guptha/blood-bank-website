const badgeDefinitions = [
  { id: 'first', name: 'First Donation Hero', icon: '⭐', requirement: 'Complete your first donation' },
  { id: 'platinum', name: 'Platinum Hero', icon: '💎', requirement: '10+ donations' },
  { id: 'lifesaver', name: 'Lifesaver', icon: '🩸', requirement: '50+ lives saved' },
  { id: 'champion', name: 'Community Champion', icon: '🏆', requirement: '5+ community events' },
  { id: 'emergency', name: 'Emergency Response Hero', icon: '🚨', requirement: 'Emergency donation completed' },
  { id: 'loyalty', name: 'Loyalty Hero', icon: '👑', requirement: '5+ years of service' }
]

function BadgeSystem({ profile, preview, small }) {
  const earned = profile?.badges || []
  const previewBadges = preview ? badgeDefinitions : []

  return (
    <div className={`grid gap-3 ${small ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
      {(preview ? previewBadges : badgeDefinitions).map((badge) => {
        const unlocked = earned.includes(badge.id) || preview
        return (
          <div
            key={badge.id}
            className={`rounded-[1.75rem] border px-4 py-4 transition ${unlocked ? 'border-red-500/30 bg-red-500/10 shadow-[0_15px_40px_rgba(239,68,68,0.15)]' : 'border-white/10 bg-slate-900/80 opacity-80'}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <p className="font-semibold text-white">{badge.name}</p>
                <p className="mt-1 text-sm text-slate-400">{badge.requirement}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BadgeSystem
