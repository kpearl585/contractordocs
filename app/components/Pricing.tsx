const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)

const PRODUCTS = [
  {
    id: 'single',
    name: 'Single Document',
    price: '$27',
    desc: 'Pick any one document from our library.',
    features: ['1 professional template', 'Instant PDF download', 'Editable Word version', 'Unlimited use license'],
    cta: 'Buy Single Doc',
    popular: false,
    link: 'https://buy.stripe.com/7sY14g1jH441dO42Gid3i01',
  },
  {
    id: 'bundle',
    name: 'Contractor Bundle',
    price: '$97',
    desc: 'All 8 documents. Everything you need to run a professional contracting business.',
    features: ['All 8 templates', 'Instant download', 'Editable Word + PDF', 'Unlimited use license', 'Free updates', 'Email support'],
    cta: 'Get Full Bundle',
    popular: true,
    link: 'https://buy.stripe.com/aFafZa6E15858tK1Ced3i02',
  },
  {
    id: 'state',
    name: 'State-Specific Package',
    price: '$197',
    desc: "All 8 documents customized for your state's legal requirements.",
    features: ['All 8 templates', 'State law compliant', 'Attorney reviewed language', 'Instant download', 'Unlimited use license', 'Priority email support'],
    cta: 'Get State Package',
    popular: false,
    link: 'https://buy.stripe.com/14AdR20fD1VT4dubcOd3i03',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] text-accent font-bold tracking-[0.25em] uppercase mb-3">PRICING</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-tight">Simple, One-Time Pricing</h2>
          <p className="text-muted mt-3">No subscriptions. No renewals. Pay once, use forever.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PRODUCTS.map(p => (
            <div
              key={p.id}
              className={`rounded-xl p-8 relative ${
                p.popular
                  ? 'bg-accent/8 border-2 border-accent/50 accent-glow'
                  : 'bg-surface border border-border'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-[0.1em] whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <div className="font-semibold text-base mb-2">{p.name}</div>
              <div className="font-display text-5xl font-bold tracking-tighter leading-none mb-1">{p.price}</div>
              <div className="text-xs text-muted mb-5">one-time</div>
              <p className="text-sm text-muted leading-relaxed mb-6">{p.desc}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              {p.id === 'single' && (
                <select className="w-full p-2.5 mb-3 border border-border-strong rounded-md bg-surface-2 text-text text-sm">
                  <option value="" className="bg-background">Select a document...</option>
                  <option value="estimate" className="bg-background">Contractor Estimate Template</option>
                  <option value="agreement" className="bg-background">Service Agreement / Contract</option>
                  <option value="change-order" className="bg-background">Change Order Form</option>
                  <option value="lien-conditional" className="bg-background">Conditional Lien Waiver</option>
                  <option value="lien-final" className="bg-background">Final Lien Waiver</option>
                  <option value="scope" className="bg-background">Scope of Work</option>
                  <option value="subcontractor" className="bg-background">Subcontractor Agreement</option>
                  <option value="warranty" className="bg-background">Warranty Certificate</option>
                </select>
              )}
              <a
                href={p.link}
                className={`block text-center py-3.5 rounded-lg font-bold text-[15px] tracking-tight transition-colors ${
                  p.popular
                    ? 'bg-accent hover:bg-accent-light text-white'
                    : 'bg-white/8 hover:bg-white/12 text-white'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
