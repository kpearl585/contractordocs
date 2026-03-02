export const metadata = {
  title: 'Lien Waivers Explained: What Every Contractor Needs to Know | ContractorDocuments.com',
  description: 'Conditional vs. final, partial vs. full — lien waivers protect both parties. Learn how to use them correctly on every job to avoid payment disputes.',
}

const s = {
  article: { background: '#0a0f1a', minHeight: '100vh', color: '#fff', padding: '6rem 2rem 5rem' },
  inner: { maxWidth: '680px', margin: '0 auto' },
  eyebrow: { fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.2em', textTransform: 'uppercase' as const, fontWeight: 700, marginBottom: '1rem' },
  h1: { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.25rem' },
  meta: { display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '2rem' },
  h2: { fontSize: '1.3rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '0.875rem', color: '#fff' },
  p: { color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' },
  ul: { color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '1.25rem', paddingLeft: '1.5rem' },
  li: { marginBottom: '0.5rem' },
  callout: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' },
  cta: { background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '12px', padding: '2rem', marginTop: '3rem', textAlign: 'center' as const },
}

export default function ArticlePage() {
  return (
    <main style={s.article}>
      <div style={s.inner}>
        <div style={s.eyebrow}>CONTRACTOR RESOURCES</div>
        <h1 style={s.h1}>Lien Waivers Explained: What Every Contractor Needs to Know</h1>
        <div style={s.meta}>
          <span>March 1, 2026</span>
          <span>·</span>
          <span>5 min read</span>
          <span>·</span>
          <span><a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>ContractorDocuments.com</a></span>
        </div>

        <p style={s.p}>If you've worked on any mid-size or commercial job, you've seen the request: "We need a lien waiver before we release your check." Most contractors sign whatever's handed to them and move on. That's a mistake that can cost you your right to collect.</p>
        <p style={s.p}>Lien waivers are powerful legal documents. Used correctly, they protect both you and your client. Used carelessly, they can permanently waive your right to file a mechanic's lien — even if you never got paid.</p>

        <h2 style={s.h2}>What Is a Lien Waiver?</h2>
        <p style={s.p}>A mechanic's lien is a legal claim against a property that a contractor, subcontractor, or supplier can file when they aren't paid for work or materials. It clouds the property title, which means the owner can't sell or refinance until the lien is resolved. It's one of the most powerful collection tools in the trades.</p>
        <p style={s.p}>A lien waiver is a document in which you agree to give up (waive) some or all of your lien rights in exchange for payment — or in anticipation of payment. That last part is where contractors get burned.</p>

        <h2 style={s.h2}>The Four Types of Lien Waivers</h2>
        <p style={s.p}>Most states recognize four distinct lien waiver types. Understanding the difference is non-negotiable:</p>

        <div style={s.callout}>
          <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>1. Conditional Partial Waiver</div>
          <p style={{ ...s.p, marginBottom: 0 }}>Waives lien rights for a specific progress payment — but only once that payment clears. This is the safest waiver for contractors receiving partial payments during a project. Sign this; get paid; lien rights for that amount are released.</p>
        </div>

        <div style={s.callout}>
          <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>2. Unconditional Partial Waiver</div>
          <p style={{ ...s.p, marginBottom: 0 }}>Waives lien rights for a specific amount immediately upon signing — regardless of whether payment actually arrives. Never sign this unless the check is already in your hand and has cleared.</p>
        </div>

        <div style={s.callout}>
          <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>3. Conditional Final Waiver</div>
          <p style={{ ...s.p, marginBottom: 0 }}>Waives all remaining lien rights once final payment is received. Safe to sign when submitting your final invoice — payment must clear before the waiver is effective.</p>
        </div>

        <div style={s.callout}>
          <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>4. Unconditional Final Waiver</div>
          <p style={{ ...s.p, marginBottom: 0 }}>Waives all lien rights immediately upon signing. This is the most dangerous document in construction. Once signed, you have zero legal recourse if payment doesn't come through. Do not sign this until final payment has cleared your bank.</p>
        </div>

        <h2 style={s.h2}>The Rule: Conditional Until It Clears</h2>
        <p style={s.p}>Here's the simple framework that protects you on every job:</p>
        <ul style={s.ul}>
          <li style={s.li}>During the project, for progress payments → <strong>Conditional Partial Waiver</strong></li>
          <li style={s.li}>At project completion, once final payment clears → <strong>Conditional Final Waiver</strong> (then it converts to unconditional by its own terms)</li>
          <li style={s.li}>Never sign an unconditional waiver before payment clears</li>
        </ul>
        <p style={s.p}>If a GC or owner pressures you to sign an unconditional waiver before issuing a check, that's a red flag. Legitimate clients don't need you to waive rights before they pay you.</p>

        <h2 style={s.h2}>What Happens Without a Lien Waiver Process</h2>
        <p style={s.p}>If you never use lien waivers, you leave yourself exposed in two directions. First, you might have valid lien rights but no documentation to show exactly what work and amounts were acknowledged by the owner — weakening your claim if you need to file. Second, without a structured waiver exchange, payment disputes get messier and harder to track.</p>
        <p style={s.p}>For owners and GCs, the risk runs the other way: without documented lien waivers from every sub on a project, a property can be liened by parties the owner thought were already paid — sometimes because the GC collected and never paid downstream.</p>
        <p style={s.p}>A clean lien waiver process protects everyone and keeps jobs moving.</p>

        <h2 style={s.h2}>State-Specific Requirements</h2>
        <p style={s.p}>Lien waiver law varies by state. Some states (California, Texas, Arizona, Nevada, Wyoming, and others) have mandatory statutory forms — using a non-conforming form can make the waiver unenforceable. Other states allow any written waiver that meets certain criteria.</p>
        <p style={s.p}>This is why using templates that are drafted with state-specific compliance in mind matters. A generic form downloaded from a random website may not hold up in your jurisdiction.</p>

        <div style={s.cta}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.625rem' }}>Get Lien Waiver Templates Built for the Trades</div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>All four lien waiver types, attorney-reviewed, ready to customize and use on your next job.</p>
          <a href="/#pricing" style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '0.7rem 1.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>See Pricing →</a>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', textDecoration: 'none' }}>← Back to all articles</a>
        </div>
      </div>
    </main>
  )
}
