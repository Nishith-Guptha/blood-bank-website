import { useState } from 'react'

const faqs = [
  {
    question: 'How often can I donate blood?',
    answer: 'Most donors can safely give blood every 8 weeks. LifeStream will help you track your donation schedule and eligibility.',
    category: 'Donation Process'
  },
  {
    question: 'Is my personal information safe?',
    answer: 'Yes. This demo uses mock data only, and the UI is designed for accessibility and clarity in a secure environment.',
    category: 'Safety'
  },
  {
    question: 'What should I bring to a donation drive?',
    answer: 'Bring a valid ID, a list of medications, and plenty of water. Wear comfortable clothing for a smooth experience.',
    category: 'General'
  },
  {
    question: 'Can I donate if I am on medication?',
    answer: 'Certain medications may require a waiting period. Always answer the medical history questions honestly and consult the staff if unsure.',
    category: 'Health'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-300">Frequently asked questions</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything donors and staff want to know.</h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Get answers to the most common questions about donation safety, process, and eligibility.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 shadow-[0_25px_80px_rgba(15,23,42,0.28)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-slate-100 transition hover:bg-slate-900/80"
                >
                  <div>
                    <p className="text-lg font-semibold">{item.question}</p>
                    <p className="mt-2 text-sm text-slate-400">Category: {item.category}</p>
                  </div>
                  <span className="text-2xl">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`px-6 pb-6 text-slate-300 transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0 overflow-hidden'}`}
                >
                  <p className="pt-2 leading-7">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
