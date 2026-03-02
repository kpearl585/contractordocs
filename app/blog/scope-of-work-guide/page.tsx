export const metadata = {
  title: 'How to Write a Scope of Work That Eliminates Disputes | ContractorDocuments.com',
  description: "The scope of work is your single best defense against \"that's not what I agreed to.\" Learn what to include on every job to protect yourself and get paid.",
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
  example: { background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.2)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 },
  cta: { background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: '12px', padding: '2rem', marginTop: '3rem', textAlign: 'center' as const },
}

export default function ArticlePage() {
  return (
    <main style={s.article}>
      <div style={s.inner}>
        <div style={s.eyebrow}>CONTRACTOR RESOURCES</div>
        <h1 style={s.h1}>How to Write a Scope of Work That Eliminates Disputes</h1>
        <div style={s.meta}>
          <span>March 2, 2026</span>
          <span>·</span>
          <span>4 min read</span>
          <span>·</span>
          <span><a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>ContractorDocuments.com</a></span>
        </div>

        <p style={s.p}>Most contractor disputes aren't about the quality of the work. They're about the boundaries of it. "That wasn't included" versus "I assumed it was." The scope of work is the document that ends that conversation before it starts.</p>
        <p style={s.p}>A strong scope of work (SOW) is not just a list of tasks. It's a legal record of exactly what you agreed to build, install, or repair — and just as importantly, what you didn't agree to. Get this right and your jobs close cleaner, your customers are happier, and your business runs with less friction.</p>

        <h2 style={s.h2}>What the Scope of Work Actually Does</h2>
        <p style={s.p}>The SOW serves three functions simultaneously:</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Defines deliverables</strong> — What exactly will be done, to what standard, using what materials?</li>
          <li style={s.li}><strong>Sets exclusions</strong> — What is explicitly not included in this contract?</li>
          <li style={s.li}><strong>Creates a baseline for change orders</strong> — Anything outside the SOW becomes a new negotiation, not an assumption.</li>
        </ul>
        <p style={s.p}>When all three are clear, you have a document that functions as the definitive answer to "is that included?" The answer is either in the SOW or it's a change order.</p>

        <h2 style={s.h2}>What to Include in Every Scope of Work</h2>
        <p style={s.p}><strong>1. Project description</strong> — A plain-English summary of the overall project. One to three sentences. What are you building or doing, and where?</p>
        <div style={s.example}>
          "Install a 6-foot privacy fence along the rear property line of 412 Elm Street, approximately 140 linear feet, using pressure-treated pine posts set in concrete and cedar dog-ear pickets."
        </div>

        <p style={s.p}><strong>2. Specific deliverables</strong> — Break the project into line items. The more specific, the better. Include dimensions, quantities, product names, and grades where applicable.</p>
        <div style={s.example}>
          {"— 4\"x4\" pressure-treated posts, 8' length, set 2' in concrete, spaced 8' on center\n— 1\"x6\" cedar dog-ear pickets, 6' height\n— (2) 4' walk gates with galvanized hinges and latch\n— All material hauled to site; no owner-supplied materials"}
        </div>

        <p style={s.p}><strong>3. Explicit exclusions</strong> — This is the most overlooked section and the one that prevents the most disputes. List everything the customer might reasonably expect but that you are not doing.</p>
        <div style={s.example}>
          {"NOT INCLUDED: removal of existing fence, landscaping restoration, permit acquisition, painting or staining, any work beyond the rear property line described above."}
        </div>

        <p style={s.p}><strong>4. Site conditions and access</strong> — What does the customer need to provide or prepare before you start? Utilities marked, area cleared, access to water, etc.</p>

        <p style={s.p}><strong>5. Materials specification</strong> — List exact materials with product names, grades, or SKUs where possible. Include your substitution policy: what happens if a specified material is unavailable?</p>

        <p style={s.p}><strong>6. Completion criteria</strong> — How will both parties know when the work is done? Define "complete" concretely. "Project is complete when all fence sections are installed, gates operate correctly, and site is cleared of construction debris."</p>

        <h2 style={s.h2}>What to Never Leave Out</h2>
        <p style={s.p}>Contractors who have been through disputes know the things that hurt most when missing:</p>
        <ul style={s.ul}>
          <li style={s.li}><strong>The exclusions list.</strong> If you don't write it down, courts assume it's included. "Painting not included" needs to be in writing.</li>
          <li style={s.li}><strong>Permit responsibility.</strong> Who pulls permits? Who pays for them? Don't leave this ambiguous.</li>
          <li style={s.li}><strong>Disposal and cleanup.</strong> Does your price include hauling debris? Spell it out.</li>
          <li style={s.li}><strong>Weather and delay provisions.</strong> What happens if the job takes longer due to rain, supply delays, or other factors outside your control?</li>
          <li style={s.li}><strong>Access requirements.</strong> If the customer doesn't have the site ready, what happens to your schedule and pricing?</li>
        </ul>

        <h2 style={s.h2}>The Scope + Change Order System</h2>
        <p style={s.p}>A tight scope of work only works if it's paired with a clear change order process. Your contract should state that any work outside the signed SOW requires a written change order, signed by both parties, before work begins. No verbal approvals. No "we'll figure it out later."</p>
        <p style={s.p}>This isn't adversarial — it's professional. Customers who understand the process appreciate it. They know exactly what they're getting, and they know how to add to it. You know you'll be compensated for anything added. Everyone wins.</p>
        <p style={s.p}>The contractors who run the cleanest jobs treat the SOW as a living document during the sales process — refining it until both parties are aligned — and then treat it as a closed contract once signed. What's in is in. What's out is a change order.</p>

        <div style={s.cta}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.625rem' }}>Get a Scope of Work Template That's Ready to Use</div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>ContractorDocuments.com includes a complete scope of work template with all the sections above — plus change order forms, contracts, and lien waivers.</p>
          <a href="/#pricing" style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '0.7rem 1.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Download Sample + See Pricing →</a>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', textDecoration: 'none' }}>← Back to all articles</a>
        </div>
      </div>
    </main>
  )
}
