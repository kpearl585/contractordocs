'use client'

import { useState, useEffect } from 'react'

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
)
const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)
const StarIcon = ({ size = 20, fill = 'none', color = 'currentColor' }: { size?: number; fill?: string; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)
const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
)
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
)
const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
)
const VetStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
)
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>
)

const DOCUMENTS = [
  { name: 'Contractor Estimate Template', desc: 'Professional quote with scope, materials, labor breakdown and payment terms', file: 'contractor-estimate-template.txt', slug: 'contractor-estimate' },
  { name: 'Service Agreement / Contract', desc: 'Protect yourself legally on every job with a signed contract', file: 'contractor-agreement.txt', slug: 'contractor-agreement' },
  { name: 'Change Order Form', desc: 'Document every change to avoid disputes and get paid for extras', file: 'change-order-form.txt', slug: 'change-order' },
  { name: 'Conditional Lien Waiver', desc: 'Required for progress payments in most states', file: 'lien-waiver-conditional.txt', slug: 'lien-waiver-conditional' },
  { name: 'Final Lien Waiver', desc: 'Close out jobs cleanly and protect your clients', file: 'lien-waiver-final.txt', slug: 'lien-waiver-final' },
  { name: 'Scope of Work', desc: "Define exactly what is and isn't included in every job", file: 'scope-of-work.txt', slug: 'scope-of-work' },
  { name: 'Subcontractor Agreement', desc: 'Hire subs legally with clear terms and liability protection', file: 'subcontractor-agreement.txt', slug: 'subcontractor-agreement' },
  { name: 'Warranty Certificate', desc: 'Professional warranty documentation that builds trust', file: 'warranty-certificate.txt', slug: 'warranty-certificate' },
]

const PREVIEWS: Record<string, string> = {
  'contractor-estimate-template.txt': `================================================================================\n                          CONTRACTOR ESTIMATE / PROPOSAL\n================================================================================\n\nCONTRACTOR INFORMATION\n----------------------\nCompany Name:     [YOUR COMPANY NAME]\nLicense Number:   [LICENSE NUMBER]\nAddress:          [ADDRESS], [CITY], [STATE] [ZIP]`,
  'contractor-agreement.txt': `================================================================================\n                    CONTRACTOR SERVICE AGREEMENT / CONTRACT\n================================================================================\n\nThis Contractor Service Agreement ("Agreement") is entered into as of\n[DATE] by and between:\n\nCONTRACTOR:\n  Company Name:     [YOUR COMPANY NAME]\n  License Number:   [LICENSE NUMBER]`,
  'change-order-form.txt': `================================================================================\n                             CHANGE ORDER FORM\n================================================================================\n\nCHANGE ORDER #:   [CO-NUMBER — e.g., CO-001]\nDATE:             [DATE]\nPROJECT:          [PROJECT NAME / ADDRESS]\n\nCONTRACTOR:\n  Company Name:   [YOUR COMPANY NAME]`,
  'lien-waiver-conditional.txt': `================================================================================\n              CONDITIONAL WAIVER AND RELEASE ON PROGRESS PAYMENT\n================================================================================\n\nIMPORTANT NOTICE: This document waives and releases lien and payment bond\nrights conditionally. You may not enforce this waiver unless and until you\nconfirm that the check has cleared.`,
  'lien-waiver-final.txt': `================================================================================\n            UNCONDITIONAL WAIVER AND RELEASE ON FINAL PAYMENT\n================================================================================\n\nIMPORTANT NOTICE: This document waives and releases lien and payment bond\nrights unconditionally. This is effective regardless of whether you have\nactually been paid.`,
  'scope-of-work.txt': `================================================================================\n                         SCOPE OF WORK DOCUMENT\n================================================================================\n\nPROJECT INFORMATION\n-------------------\nProject Name:       [PROJECT NAME]\nJob Number:         [JOB NUMBER]\nDate Prepared:      [DATE]\nVersion:            [1.0]\n\nCONTRACTOR:\n  Company Name:`,
  'subcontractor-agreement.txt': `================================================================================\n                       SUBCONTRACTOR AGREEMENT\n================================================================================\n\nThis Subcontractor Agreement ("Agreement") is entered into as of\n[DATE] by and between:\n\nGENERAL CONTRACTOR ("Contractor"):\n  Company Name:     [YOUR COMPANY NAME]`,
  'warranty-certificate.txt': `================================================================================\n                         WARRANTY CERTIFICATE\n================================================================================\n\n                    CERTIFICATE OF LIMITED WARRANTY\n\n================================================================================\n\nCONTRACTOR:\n  Company Name:     [YOUR COMPANY NAME]`,
}

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

const FAQS = [
  { q: 'Are these documents legally valid?', a: 'Yes. They use attorney-reviewed language that holds up. Always have both parties sign before work begins.' },
  { q: 'What states do these work in?', a: 'All 50 states. The State-Specific Package includes state law addendums tailored to your jurisdiction.' },
  { q: 'What format do I receive?', a: 'PDF + editable Word (.docx) versions are both included in your download.' },
  { q: 'Can I use these for multiple jobs?', a: 'Yes. Unlimited use license. Use them on every job, forever. No restrictions.' },
  { q: 'What if they don\'t work for my business?', a: '30-day money back guarantee, no questions asked. Email us and you\'ll get a full refund.' },
  { q: 'How is this different from free templates online?', a: 'Free templates are generic and often missing critical clauses. Ours are contractor-specific with proper indemnification, lien rights, and payment terms.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', gap: '1rem' }}>
        <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>{q}</span>
        <span style={{ flexShrink: 0, color: 'rgba(255,255,255,0.4)' }}><ChevronIcon open={open} /></span>
      </div>
      {open && (
        <div style={{ paddingBottom: '1.25rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{a}</div>
      )}
    </div>
  )
}

function PreviewModal({ doc, onClose }: { doc: typeof DOCUMENTS[0]; onClose: () => void }) {
  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}
      onClick={onClose}
    >
      <div
        style={{ background: '#0f1729', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.5rem', width: '90vw', maxWidth: '900px', height: '85vh', overflow: 'auto', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Document Preview</div>
            <div style={{ fontWeight: 700, fontSize: '1rem' }}>{doc.name}</div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.07)', border: 'none', color: '#fff', borderRadius: '6px', padding: '0.5rem 0.75rem', cursor: 'pointer', fontSize: '0.85rem' }}
          >
            Close
          </button>
        </div>
        <iframe
          src={`/previews/${doc.slug}-preview.html`}
          style={{ width: '100%', height: 'calc(85vh - 80px)', border: 'none', borderRadius: '8px', background: '#fff' }}
          title={`${doc.name} Preview`}
        />
        <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>
          Sample preview. Full editable document included in your purchase.
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const [previewDoc, setPreviewDoc] = useState<typeof DOCUMENTS[0] | null>(null)
  const [email, setEmail] = useState('')
  const [captured, setCaptured] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [exitShown, setExitShown] = useState(false)
  const [exitEmail, setExitEmail] = useState('')
  const [exitSubmitted, setExitSubmitted] = useState(false)

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setCaptured(true)
        setDownloadUrl(data.downloadUrl)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const s = {
    page: { background: '#0a0f1a', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' } as React.CSSProperties,
    container: { maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' } as React.CSSProperties,
  }


  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShown) {
        setExitShown(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [exitShown])

  return (
    <main style={s.page}>
      {previewDoc && <PreviewModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />}

      {/* Urgency Bar */}
      <div style={{ background: '#1e3a5f', borderBottom: '1px solid rgba(37,99,235,0.3)', padding: '0.6rem 2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.8rem', color: '#93c5fd', letterSpacing: '0.02em' }}>
          <strong style={{ color: '#fff' }}>Introductory Pricing:</strong> Full bundle $97 through March 2026 — increases to $147 on April 1st.{' '}
          <a href="#pricing" style={{ color: '#60a5fa', textDecoration: 'underline', fontWeight: 600 }}>Lock in your price →</a>
        </span>
      </div>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 0' }}>
        <div style={{ ...s.container, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
            ContractorDocuments<span style={{ color: '#2563eb' }}>.com</span>
          </div>
          <a
            href="#pricing"
            style={{ background: '#2563eb', color: '#fff', padding: '0.55rem 1.25rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '-0.01em' }}
          >
            Get Templates
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: 'clamp(5rem,10vw,8rem) 0 4rem', textAlign: 'center' }}>
        <div style={s.container}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '2rem' }}>
            <VetStar />
            <span style={{ fontSize: '0.7rem', color: '#c9a84c', letterSpacing: '0.12em', fontWeight: 700 }}>VETERAN-OWNED & OPERATED</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Stop Losing Jobs<br /><span style={{ color: '#2563eb' }}>Because You Had No Contract.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem,1.5vw,1.15rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
            Professional contractor documents written with attorney-reviewed language. Protect your business, get paid faster, and look like the established operation you are — starting today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <a
              href="https://buy.stripe.com/aFafZa6E15858tK1Ced3i02"
              style={{ background: '#2563eb', color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', boxShadow: '0 0 40px rgba(37,99,235,0.3)', letterSpacing: '-0.01em' }}
            >
              Get All 8 Templates — $97
            </a>
            <a
              href="#sample"
              style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.85)', padding: '1rem 1.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Download Free Sample
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>Attorney-reviewed documents · Instant download · One-time price</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: 'rgba(255,255,255,0.025)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem 0' }}>
        <div style={{ ...s.container, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2.5rem' }}>
          {[
            { icon: <ShieldIcon />, label: 'Attorney-Reviewed Language' },
            { icon: <LockIcon />, label: 'Secure Checkout' },
            { icon: <DownloadIcon />, label: 'Instant Download' },
            { icon: <StarIcon />, label: '30-Day Guarantee' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontWeight: 500 }}>
              <span style={{ color: '#2563eb' }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section style={{ padding: '5rem 0' }}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#ef4444', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>THE REAL COST</div>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Sound familiar?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { problem: 'Customer disputes the scope after the job', cost: 'Avg loss: $2,400' },
              { problem: 'No signed contract = no legal protection', cost: 'Avg dispute: $5,000' },
              { problem: 'Attorney fees just to get basic docs', cost: 'Avg cost: $800+' },
            ].map(p => (
              <div key={p.problem} style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '10px', padding: '1.5rem' }}>
                <div style={{ color: '#ef4444', marginBottom: '0.75rem' }}><WarningIcon /></div>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.45, fontSize: '0.95rem' }}>{p.problem}</p>
                <p style={{ color: '#ef4444', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.02em' }}>{p.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flexShrink: 0 }}>
          <img src="/keegan-pearl.jpg" alt="Keegan Pearl — Founder" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '3px solid rgba(37,99,235,0.4)', display: 'block' }} />
        </div>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '100px', padding: '0.3rem 0.75rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span style={{ fontSize: '0.7rem', color: '#c9a84c', fontWeight: 700, letterSpacing: '0.08em' }}>U.S. ARMY VETERAN</span>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Founder, Pearl Ventures</span>
          </div>
          <blockquote style={{ margin: 0, fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, fontStyle: 'italic', borderLeft: '3px solid #2563eb', paddingLeft: '1.25rem' }}>
            &ldquo;I watched skilled contractors lose tens of thousands of dollars — not because they did bad work, but because they had no paperwork. A disputed scope, a client who &apos;forgot&apos; what was agreed, a job that went sideways with no contract to back them up. I built ContractorDocuments to fix that. These are the documents every contractor should have had from day one.&rdquo;
          </blockquote>
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>Keegan Pearl</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Founder · ContractorDocuments.com</div>
        </div>
      </section>

      {/* DOCUMENT SHOWCASE */}
      <section id="documents" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '5rem 0' }}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>WHAT YOU GET</div>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>8 Professional Templates</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem' }}>Everything a contractor needs to operate professionally and legally.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {DOCUMENTS.map((doc) => (
              <div key={doc.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', background: 'rgba(37,99,235,0.12)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#2563eb' }}>
                    <FileIcon />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem', lineHeight: 1.3 }}>{doc.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{doc.desc}</div>
                  </div>
                </div>
                <button
                  onClick={() => setPreviewDoc(doc)}
                  style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', color: '#60a5fa', borderRadius: '6px', padding: '0.45rem 1rem', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start', letterSpacing: '0.01em' }}
                >
                  Preview
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ padding: '5rem 0' }}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>The Difference Is Clear</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Without ContractorDocuments</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {['Handshake agreements that fall apart', 'Disputes with no paper trail', 'Paying $500+ for basic contracts', 'Looking unprofessional to clients', 'Losing money on scope creep'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ flexShrink: 0, marginTop: '1px' }}><XIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>With ContractorDocuments</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {['Signed contracts on every job', 'Clear scope eliminates disputes', 'Professional documents instantly', 'Legally protected on every job', 'Look like an established operation'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)' }}>
                    <span style={{ flexShrink: 0, marginTop: '1px' }}><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FREE SAMPLE / EMAIL CAPTURE */}
      <section id="sample" style={{ background: 'rgba(37,99,235,0.05)', borderTop: '1px solid rgba(37,99,235,0.12)', borderBottom: '1px solid rgba(37,99,235,0.12)', padding: '5rem 0' }}>
        <div style={{ ...s.container, maxWidth: '600px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>FREE DOWNLOAD</div>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Try Before You Buy</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', lineHeight: 1.65 }}>
            Download our Scope of Work template free. No credit card. No strings.
          </p>
          {!captured ? (
            <form onSubmit={handleCapture} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ flex: '1', minWidth: '220px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '7px', padding: '0.75rem 1rem', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: '7px', padding: '0.75rem 1.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                {submitting ? 'Sending...' : 'Download Free Template'}
              </button>
            </form>
          ) : (
            <div>
              <a
                href={downloadUrl}
                download
                style={{ display: 'inline-block', background: '#22c55e', color: '#fff', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}
              >
                Download Scope of Work Template
              </a>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>Check your email for the full bundle offer.</p>
            </div>
          )}
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '5rem 0' }}>
        <div style={s.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>PRICING</div>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Simple, One-Time Pricing</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.75rem' }}>No subscriptions. No renewals. Pay once, use forever.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {PRODUCTS.map(p => (
              <div key={p.id} style={{ background: p.popular ? 'rgba(37,99,235,0.08)' : 'rgba(255,255,255,0.03)', border: p.popular ? '2px solid rgba(37,99,235,0.5)' : '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '2rem', position: 'relative' }}>
                {p.popular && (
                  <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#2563eb', color: '#fff', fontSize: '0.68rem', fontWeight: 700, padding: '0.3rem 1rem', borderRadius: '100px', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{p.name}</div>
                <div style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.25rem' }}>{p.price}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>one-time</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                {p.id === 'single' && (
                  <select style={{ width: '100%', padding: '0.625rem', marginBottom: '0.75rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.85rem' }}>
                    <option value="" style={{ background: '#0a0f1a' }}>Select a document...</option>
                    <option value="estimate" style={{ background: '#0a0f1a' }}>Contractor Estimate Template</option>
                    <option value="agreement" style={{ background: '#0a0f1a' }}>Service Agreement / Contract</option>
                    <option value="change-order" style={{ background: '#0a0f1a' }}>Change Order Form</option>
                    <option value="lien-conditional" style={{ background: '#0a0f1a' }}>Conditional Lien Waiver</option>
                    <option value="lien-final" style={{ background: '#0a0f1a' }}>Final Lien Waiver</option>
                    <option value="scope" style={{ background: '#0a0f1a' }}>Scope of Work</option>
                    <option value="subcontractor" style={{ background: '#0a0f1a' }}>Subcontractor Agreement</option>
                    <option value="warranty" style={{ background: '#0a0f1a' }}>Warranty Certificate</option>
                  </select>
                )}
                <a
                  href={p.link}
                  style={{ display: 'block', background: p.popular ? '#2563eb' : 'rgba(255,255,255,0.08)', color: '#fff', padding: '0.875rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem', letterSpacing: '-0.01em' }}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { stat: '$2,400', label: 'Avg cost of a scope dispute' },
            { stat: '$800+', label: 'Typical attorney fee for basic docs' },
            { stat: '8', label: 'Documents in the full bundle' },
            { stat: '100%', label: 'Money-back guarantee' },
          ].map(item => (
            <div key={item.stat}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>{item.stat}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.25rem' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '5rem 0' }}>
        <div style={{ ...s.container, maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Common Questions</h2>
          </div>
          <div>
            {FAQS.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div style={s.container}>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            One disputed job costs more than<br />10 years of protection.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', fontSize: '1rem' }}>
            Get all 8 templates for a one-time payment. No subscriptions.
          </p>
          <a
            href="https://buy.stripe.com/aFafZa6E15858tK1Ced3i02"
            style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '1.1rem 3rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 0 60px rgba(37,99,235,0.35)', letterSpacing: '-0.01em' }}
          >
            Get the Full Bundle — $97
          </a>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.875rem', flexWrap: 'wrap' }}>
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#1A1F71"/><text x="4" y="14" fontFamily="Arial" fontWeight="bold" fontSize="9" fill="white">VISA</text></svg>
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#252525"/><circle cx="13" cy="10" r="6" fill="#EB001B"/><circle cx="19" cy="10" r="6" fill="#F79E1B"/><path d="M16 5.7a6 6 0 0 1 0 8.6A6 6 0 0 1 16 5.7z" fill="#FF5F00"/></svg>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '0.2rem 0.5rem' }}>
                  <svg width="10" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>Secured by Stripe</span>
                </div>
              </div>
          <p style={{ marginTop: '1.25rem', color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>
            Instant download · Unlimited use · 30-day guarantee
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2rem 0' }}>
        <div style={{ ...s.container, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            &copy; 2026 ContractorDocuments.com &mdash; A Pearl Ventures Company
          </p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@contractordocuments.com" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>support@contractordocuments.com</a>
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms</a>
          </p>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      {exitShown && !exitSubmitted && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ background: '#0f1929', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '16px', padding: '3rem 2.5rem', maxWidth: '480px', width: '100%', textAlign: 'center', position: 'relative' }}>
            <button onClick={() => setExitShown(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.08)', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
            <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>WAIT — FREE GIFT</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.2 }}>Before You Go — Get the Scope of Work Template Free</h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '1.75rem' }}>The document that eliminates &quot;that&apos;s not what I agreed to&quot; on every job. Yours free, no credit card.</p>
            <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
              <input type="email" value={exitEmail} onChange={e => setExitEmail(e.target.value)} placeholder="your@email.com" style={{ padding: '0.875rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.9rem', outline: 'none' }} />
              <button onClick={async () => { if (!exitEmail.includes('@')) return; await fetch('/api/capture', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ email: exitEmail, source: 'exit_intent' }) }); setExitSubmitted(true); setTimeout(() => setExitShown(false), 3000) }} style={{ padding: '0.875rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>Send Me the Free Template</button>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>No spam. One email with your download link.</p>
          </div>
        </div>
      )}
      {exitShown && exitSubmitted && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setExitShown(false)}>
          <div style={{ background: '#0f1929', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '16px', padding: '3rem', maxWidth: '400px', textAlign: 'center' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem' }}><polyline points="20 6 9 17 4 12"/></svg>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Check Your Email</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>Your free Scope of Work template is on its way.</p>
          </div>
        </div>
      )}
    </main>
  )
}
