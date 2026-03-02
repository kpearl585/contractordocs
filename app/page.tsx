'use client'

const PRODUCTS = [
  {
    id: 'single',
    name: 'Single Document',
    price: '$27',
    priceNote: 'one-time',
    description: 'Pick any one document from our library.',
    features: ['1 professional template', 'Instant PDF download', 'Editable Word version', 'Unlimited use license'],
    cta: 'Buy Single Doc',
    popular: false,
    stripeLink: '#'
  },
  {
    id: 'bundle',
    name: 'Contractor Bundle',
    price: '$97',
    priceNote: 'one-time',
    description: 'All 8 documents. Everything you need to run a professional contracting business.',
    features: ['All 8 templates', 'Instant download', 'Editable Word + PDF', 'Unlimited use license', 'Free updates', 'Email support'],
    cta: 'Get Full Bundle',
    popular: true,
    stripeLink: '#'
  },
  {
    id: 'state',
    name: 'State-Specific Package',
    price: '$197',
    priceNote: 'one-time',
    description: "All 8 documents customized for your state's legal requirements.",
    features: ['All 8 templates', 'State law compliant', 'Attorney reviewed language', 'Instant download', 'Unlimited use license', 'Priority email support'],
    cta: 'Get State Package',
    popular: false,
    stripeLink: '#'
  }
]

const DOCUMENTS = [
  { name: 'Contractor Estimate Template', desc: 'Professional quote with scope, materials, labor breakdown and payment terms' },
  { name: 'Service Agreement / Contract', desc: 'Protect yourself legally on every job with a signed contract' },
  { name: 'Change Order Form', desc: 'Document every change to avoid disputes and get paid for extras' },
  { name: 'Conditional Lien Waiver', desc: 'Required for progress payments in most states' },
  { name: 'Final Lien Waiver', desc: 'Close out jobs cleanly and protect your clients' },
  { name: 'Scope of Work', desc: "Define exactly what is and isn't included in every job" },
  { name: 'Subcontractor Agreement', desc: 'Hire subs legally with clear terms and liability protection' },
  { name: 'Warranty Certificate', desc: 'Professional warranty documentation that builds trust' },
]

export default function Home() {
  return (
    <main style={{ background: '#0a0f1a', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <nav style={{ padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>ContractorDocs<span style={{ color: '#2563eb' }}>.ai</span></div>
        <a href="#pricing" style={{ background: '#2563eb', color: '#fff', padding: '0.5rem 1.25rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>Get Templates →</a>
      </nav>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(5rem,10vw,8rem) 2rem 4rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '2rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb', display: 'block' }} />
          <span style={{ fontSize: '0.75rem', color: '#2563eb', letterSpacing: '0.08em', fontWeight: 600 }}>TRUSTED BY CONTRACTORS ACROSS THE US</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
          Stop Losing Jobs<br /><span style={{ color: '#2563eb' }}>Because You Had No Contract.</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem,1.5vw,1.2rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto 3rem' }}>
          Professional contractor documents written by legal experts. Protect your business, get paid faster, and look like the pro you are — starting today.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#pricing" style={{ background: '#2563eb', color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', boxShadow: '0 0 40px rgba(37,99,235,0.3)' }}>Get All 8 Templates — $97 →</a>
          <a href="#documents" style={{ color: 'rgba(255,255,255,0.6)', padding: '1rem 1.5rem', textDecoration: 'none', fontSize: '0.95rem' }}>See What&apos;s Included ↓</a>
        </div>
        <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>One-time payment. Instant download. No subscription.</p>
      </section>

      <section style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Sound familiar?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { problem: 'Customer disputes the scope after the job', cost: 'Avg loss: $2,400' },
              { problem: 'No signed contract = no legal protection', cost: 'Avg dispute: $5,000' },
              { problem: 'Attorney fees just to get basic docs', cost: 'Avg cost: $800+' },
            ].map(p => (
              <div key={p.problem} style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '10px', padding: '1.5rem', textAlign: 'left' }}>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.4 }}>{p.problem}</p>
                <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600 }}>{p.cost}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2.5rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
            One disputed job costs more than <strong style={{ color: '#fff' }}>10 years</strong> of ContractorDocs.ai.
          </p>
        </div>
      </section>

      <section id="documents" style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>WHAT YOU GET</div>
          <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>8 Professional Templates</h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem' }}>Everything a contractor needs to operate professionally and legally.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {DOCUMENTS.map((doc, i) => (
            <div key={doc.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(37,99,235,0.15)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#2563eb', fontWeight: 700, fontSize: '0.875rem' }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>{doc.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{doc.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Simple, One-Time Pricing</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem' }}>No subscriptions. No renewals. Pay once, use forever.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {PRODUCTS.map(p => (
              <div key={p.id} style={{ background: p.popular ? 'rgba(37,99,235,0.08)' : 'rgba(255,255,255,0.03)', border: p.popular ? '2px solid rgba(37,99,235,0.5)' : '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '2rem', position: 'relative' }}>
                {p.popular && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '0.3rem 1rem', borderRadius: '100px', letterSpacing: '0.08em' }}>MOST POPULAR</div>}
                <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{p.name}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>{p.price}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>{p.priceNote}</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={p.stripeLink} style={{ display: 'block', background: p.popular ? '#2563eb' : 'rgba(255,255,255,0.08)', color: '#fff', padding: '0.875rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem' }}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>30-Day Money-Back Guarantee</h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: '1rem' }}>
          If these templates don&apos;t work for your business, email us within 30 days for a full refund. No questions asked.
        </p>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>© 2026 ContractorDocs.ai — A Pearl Ventures Company · <a href="mailto:support@contractordocs.ai" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>support@contractordocs.ai</a></p>
      </footer>
    </main>
  )
}
