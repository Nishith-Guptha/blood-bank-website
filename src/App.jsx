import { useEffect, useMemo, useState } from 'react'
import ParticleBackground from './components/ParticleBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickStats from './components/QuickStats'
import InventoryTracker from './components/InventoryTracker'
import WhyDonate from './components/WhyDonate'
import DonorRegistration from './components/DonorRegistration'
import UpcomingDrives from './components/UpcomingDrives'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroProfile from './components/HeroProfile'
import HeroesLeaderboard from './components/HeroesLeaderboard'
import HeroCelebration from './components/HeroCelebration'
import Footer from './components/Footer'

const levelForDonations = (donationCount) => {
  if (donationCount >= 20) return 'Platinum'
  if (donationCount >= 10) return 'Gold'
  if (donationCount >= 5) return 'Silver'
  return 'Bronze'
}

const computeBadges = (profile) => {
  const badges = []
  if (!profile) return badges
  if (profile.donationCount >= 1) badges.push('first')
  if (profile.donationCount >= 10) badges.push('platinum')
  if (profile.livesSaved >= 50) badges.push('lifesaver')
  if (profile.events >= 5) badges.push('champion')
  if (profile.emergency) badges.push('emergency')
  if (profile.years >= 5) badges.push('loyalty')
  return badges
}

const getNextEligible = () => {
  const date = new Date()
  date.setDate(date.getDate() + 56)
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

const loadHeroProfile = () => {
  if (typeof window === 'undefined') return null
  try {
    const saved = window.localStorage.getItem('lifestreamHero')
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

function App() {
  const [heroProfile, setHeroProfile] = useState(null)
  const [showCelebration, setShowCelebration] = useState(false)
  const [welcomeBack, setWelcomeBack] = useState(false)

  useEffect(() => {
    const profile = loadHeroProfile()
    if (profile) {
      setHeroProfile(profile)
      setWelcomeBack(true)
      window.setTimeout(() => setWelcomeBack(false), 6000)
    }
  }, [])

  useEffect(() => {
    if (!heroProfile) return
    window.localStorage.setItem('lifestreamHero', JSON.stringify(heroProfile))
  }, [heroProfile])

  const handleHeroSubmit = (data) => {
    const now = new Date()
    const baseProfile = heroProfile || {
      heroId: `LS-${Math.floor(Math.random() * 90000) + 10000}`,
      donationCount: 0,
      livesSaved: 0,
      events: 0,
      years: 0,
      emergency: false,
      xp: 0,
      nextLevelXp: 1200,
      heroSince: now.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const updated = {
      ...baseProfile,
      fullName: data.fullName,
      bloodType: data.bloodType,
      donationCount: baseProfile.donationCount + 1,
      livesSaved: baseProfile.livesSaved + 4,
      events: Math.min(9, baseProfile.events + 1),
      emergency: baseProfile.emergency || data.emergency,
      years: baseProfile.years || 1,
      xp: baseProfile.xp + 180,
      level: levelForDonations(baseProfile.donationCount + 1),
      nextEligible: getNextEligible(),
      badges: [],
      heroSince: baseProfile.heroSince
    }
    updated.badges = computeBadges(updated)
    updated.nextLevelXp = Math.max(1200, (updated.level === 'Bronze' ? 1200 : updated.level === 'Silver' ? 1800 : updated.level === 'Gold' ? 2400 : 3200))

    setHeroProfile(updated)
    setShowCelebration(true)
  }

  const handleDonate = () => {
    if (!heroProfile) return
    setHeroProfile((prev) => {
      const next = {
        ...prev,
        donationCount: prev.donationCount + 1,
        livesSaved: prev.livesSaved + 4,
        xp: prev.xp + 200,
        level: levelForDonations(prev.donationCount + 1),
        nextEligible: getNextEligible(),
        badges: computeBadges({ ...prev, donationCount: prev.donationCount + 1, livesSaved: prev.livesSaved + 4 })
      }
      return next
    })
    setShowCelebration(true)
  }

  const profile = useMemo(() => heroProfile, [heroProfile])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <ParticleBackground />
      {showCelebration && profile && <HeroCelebration profile={profile} onClose={() => setShowCelebration(false)} />}
      <Header hero={profile} />
      <main className="relative z-10">
        {welcomeBack && heroProfile && (
          <div className="sticky top-[72px] z-40 mx-auto mb-6 max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="rounded-full border border-cyan-400/20 bg-slate-950/95 px-6 py-3 text-sm text-cyan-100 shadow-[0_30px_80px_rgba(6,182,212,0.12)]">
              Welcome back, {heroProfile.fullName.split(' ')[0]} — your hero profile is loaded.
            </div>
          </div>
        )}
        <Hero hero={profile} onDonate={handleDonate} />
        <QuickStats />
        <InventoryTracker hero={profile} />
        <WhyDonate />
        <DonorRegistration onHeroSubmit={handleHeroSubmit} hero={profile} />
        <HeroProfile profile={profile} />
        <HeroesLeaderboard currentHero={profile} />
        <UpcomingDrives />
        <Testimonials />
        <FAQ />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
