export const metadata = {
  title: 'Why Every Contractor Needs a Change Order Form (And How to Use It) | ContractorDocuments.com',
  description: 'A change order form for contractors is the document that protects you when the job changes. Learn what to include and how to make it part of every project.',
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
        <h1 style={s.h1}>Why Every Contractor Needs a Change Order Form (And How to Use It)</h1>
        <div style={s.meta}>
          <span>March 5, 2026</span>
          <span>·</span>
          <span>5 min read</span>
          <span>·</span>
          <span><a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>ContractorDocuments.com</a></span>
        </div>

        <p style={s.p}>Every job changes. A customer wants to add a room. The original spec calls for a material that is out of stock. Demolition reveals a problem that was not visible during the estimate. The reasons are endless, but the result is always the same: the work you are about to do is different from the work you contracted for. That is exactly when you need a change order form for contractors — a document that captures the new scope, the updated price, and the signatures that make it official before anyone picks up a tool.</p>

        <p style={s.p}>The change order form is not a bureaucratic formality. It is the document that stands between you and an unpaid invoice at the end of a job where the scope grew by thirty percent and nobody wrote anything down.</p>

        <h2 style={s.h2}>Why Verbal Approvals Are Not Enough</h2>
        <p style={s.p}>Most contractors who lose money on scope changes do not lose it because they did bad work. They lose it because a customer approved additional work verbally, mid-project, and then disputed the charge when the final invoice arrived. "I don't remember agreeing to that" is a complete defense in the absence of documentation. It does not matter what was said on-site if there is nothing in writing.</p>

        <p style={s.p}>A signed change order form for contractors eliminates this problem entirely. The customer cannot claim they did not approve the work because their signature is on a document that describes it explicitly, including the price. There is no ambiguity and no room for reinterpretation after the fact.</p>

        <h2 style={s.h2}>What Belongs on a Change Order Form</h2>
        <p style={s.p}>A change order form does not need to be complicated. It needs to be complete. Here are the fields that belong on every change order:</p>

        <ul style={s.ul}>
          <li style={s.li}><strong>Project reference.</strong> The original contract number, project address, and customer name so the change order is clearly tied to the right job.</li>
          <li style={s.li}><strong>Change order number.</strong> Number them sequentially. On a complex project, you may have multiple change orders, and they need to be identifiable.</li>
          <li style={s.li}><strong>Description of change.</strong> A plain-English description of what is being added, removed, or modified. Be specific. Vague language creates the same problems as no documentation at all.</li>
          <li style={s.li}><strong>Reason for change.</strong> Optional but useful. Noting that a change was caused by unforeseen conditions, a customer request, or a design modification can matter if the change is ever disputed.</li>
          <li style={s.li}><strong>Price adjustment.</strong> The additional cost (or credit) associated with this change. Include labor and materials separately if your original contract breaks them out that way.</li>
          <li style={s.li}><strong>Schedule impact.</strong> Will this change affect the project completion date? If so, by how much? Document it here.</li>
          <li style={s.li}><strong>Signatures and date.</strong> Both parties sign and date before work begins. No exceptions.</li>
        </ul>

        <p style={s.p}>A sample change order header might look like this:</p>
        <div style={s.example}>
          {"CHANGE ORDER #2\nProject: 742 Birchwood Drive — Bathroom Remodel\nOriginal Contract Date: February 15, 2026\nChange Order Date: March 5, 2026\n\nDescription: Customer has requested addition of a second exhaust fan in the master bath. Original contract included one fan.\n\nPrice Adjustment: +$385 (labor + materials)\nSchedule Impact: None\n\nCustomer Signature: _____________  Date: ______\nContractor Signature: ___________  Date: ______"}
        </div>

        <h2 style={s.h2}>How to Present a Change Order Without Friction</h2>
        <p style={s.p}>One reason contractors avoid using a change order form for contractors is that they worry it will create conflict with the customer. The opposite is usually true, especially when the process is established upfront.</p>

        <p style={s.p}>The best time to introduce your change order policy is at contract signing — before any work has started. Include a clause in your original contract that states: "Any modifications to the scope of work must be approved in writing via a signed change order before additional work begins." When the customer signs the original contract, they are also agreeing to this process. Later, when a change comes up, you are not introducing something new. You are following the process they already agreed to.</p>

        <p style={s.p}>Keep the tone professional and direct. "This is outside the original scope, so I need to put together a change order before we proceed. I'll have it to you within the hour." Most customers respect that approach. It signals that you are organized and that your pricing is not arbitrary.</p>

        <h2 style={s.h2}>Common Situations That Require a Change Order</h2>
        <p style={s.p}>Knowing when to issue a change order is as important as knowing how. Here are the most common scenarios where a change order form for contractors should be used immediately:</p>

        <ul style={s.ul}>
          <li style={s.li}>Customer requests an addition or upgrade beyond the original spec.</li>
          <li style={s.li}>Demolition uncovers existing damage, code violations, or conditions not visible during the estimate.</li>
          <li style={s.li}>A specified material is unavailable and a substitution is required.</li>
          <li style={s.li}>The customer changes their mind about a finish, fixture, or layout after work has begun.</li>
          <li style={s.li}>Permit requirements mandate additional work not included in the original scope.</li>
          <li style={s.li}>Access issues or site conditions require a different installation method.</li>
        </ul>

        <p style={s.p}>If you are ever uncertain whether something warrants a change order, the answer is yes. Issuing an unnecessary change order costs you five minutes. Skipping a necessary one can cost you several thousand dollars and a customer relationship.</p>

        <h2 style={s.h2}>Tracking Change Orders Across a Project</h2>
        <p style={s.p}>On larger projects, change orders can add up quickly. Keep a running log that tracks each change order by number, the description, the price adjustment, and the approval date. At the end of the project, your final invoice should reference the original contract plus a summary of all change orders. The customer should be able to reconcile the final number against a paper trail.</p>

        <p style={s.p}>This approach does two things. First, it makes your final invoice easier to understand and harder to dispute. Second, it demonstrates that you operated transparently throughout the project — that every addition was documented and approved as it happened, not assembled at the end.</p>

        <p style={s.p}>Contractors who use a consistent change order form for contractors on every job find that their billing disputes drop significantly. The document itself is simple. The discipline to use it on every job is what makes the difference.</p>

        <div style={s.cta}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.625rem' }}>Get a Change Order Form Built for Contractors</div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>ContractorDocuments.com includes a professional change order form for contractors alongside contracts, lien waivers, scope of work templates, and more — everything you need to run jobs cleanly.</p>
          <a href="/#pricing" style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '0.7rem 1.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Download Sample + See Pricing →</a>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', textDecoration: 'none' }}>← Back to all articles</a>
        </div>
      </div>
    </main>
  )
}
