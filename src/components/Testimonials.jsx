const reviews = [
  {
    name: 'Mia Thompson',
    bloodType: 'O+',
    quote: 'LifeStream made registration simple and helped me donate to a patient in need within days.',
    rating: 5
  },
  {
    name: 'Jordan Lee',
    bloodType: 'A-',
    quote: 'The dashboard is beautiful and the urgency alerts felt timely and professional.',
    rating: 5
  },
  {
    name: 'Sam Patel',
    bloodType: 'B+',
    quote: 'I love the community focus and the premium experience for donors.',
    rating: 4
  }
]

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-300">Testimonials</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Donors share their LifeStream stories.</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Hear from community members who have registered, donated, and made a real difference through LifeStream.
          </p>
        </div>

        <div className="mt-10 space-y-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
          {reviews.map((item) => (
            <article
              key={item.name}
              className="snap-center rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.35)] transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-400">Blood Type {item.bloodType}</p>
                </div>
                <span className="text-lg">⭐️</span>
              </div>
              <p className="mt-5 text-slate-300">“{item.quote}”</p>
              <div className="mt-6 flex gap-1 text-amber-300">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
