function ParticleBackground() {
  const particles = Array.from({ length: 12 })
  const crosses = Array.from({ length: 6 })

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.2),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_20%)] animate-backgroundShift" />
      <div className="absolute inset-0 opacity-80">
        {particles.map((_, index) => (
          <span
            key={`particle-${index}`}
            className={`particle particle-${index}`}
          />
        ))}
        {crosses.map((_, index) => (
          <span
            key={`cross-${index}`}
            className={`cross cross-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ParticleBackground
