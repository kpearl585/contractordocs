'use client'

import { useState } from 'react'

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>
)

const FAQS = [
  { q: 'Are these documents legally valid?', a: 'Yes. They use attorney-reviewed language that holds up. Always have both parties sign before work begins.' },
  { q: 'What states do these work in?', a: 'All 50 states. The State-Specific Package includes state law addendums tailored to your jurisdiction.' },
  { q: 'What format do I receive?', a: 'PDF + editable Word (.docx) versions are both included in your download.' },
  { q: 'Can I use these for multiple jobs?', a: 'Yes. Unlimited use license. Use them on every job, forever. No restrictions.' },
  { q: "What if they don't work for my business?", a: "30-day money back guarantee, no questions asked. Email us and you'll get a full refund." },
  { q: 'How is this different from free templates online?', a: 'Free templates are generic and often missing critical clauses. Ours are contractor-specific with proper indemnification, lien rights, and payment terms.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b border-border cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center py-5 gap-4">
        <span className="font-semibold text-[15px] text-text">{q}</span>
        <span className="shrink-0 text-white/40"><ChevronIcon open={open} /></span>
      </div>
      {open && (
        <div className="pb-5 text-muted text-sm leading-relaxed">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-surface border-t border-b border-border py-20">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] text-accent font-bold tracking-[0.25em] uppercase mb-3">FAQ</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">Common Questions</h2>
        </div>
        <div>
          {FAQS.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  )
}
