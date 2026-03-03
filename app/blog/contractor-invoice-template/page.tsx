export const metadata = {
  title: 'Contractor Invoice Templates: Get Paid Faster and Look Professional | ContractorDocuments.com',
  description: 'The right contractor invoice template gets you paid faster and reduces billing disputes. Learn what to include and how to structure your invoices for every job.',
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
        <h1 style={s.h1}>Contractor Invoice Templates: Get Paid Faster and Look Professional</h1>
        <div style={s.meta}>
          <span>March 6, 2026</span>
          <span>·</span>
          <span>5 min read</span>
          <span>·</span>
          <span><a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>ContractorDocuments.com</a></span>
        </div>

        <p style={s.p}>Getting paid on time starts before the work is done. It starts with how you invoice. A well-structured contractor invoice template communicates clearly, reduces back-and-forth, and gives customers a clean record they can approve and pay without asking questions. A poorly structured one creates confusion, invites disputes, and gives customers an unconscious reason to delay. The format of your invoice is not a minor detail. It is part of how you run your business.</p>

        <p style={s.p}>Contractors who use a consistent contractor invoice template on every job collect faster, argue less over billing, and present themselves as the kind of operation customers refer to their neighbors. Here is what a professional invoice actually looks like and how to build one you can use on every job.</p>

        <h2 style={s.h2}>What Every Contractor Invoice Must Include</h2>
        <p style={s.p}>Before you think about design or software, get the content right. A contractor invoice template that is missing key information will slow down payment because the customer has to come back to you with questions, or their accounts payable process kicks the invoice back as incomplete.</p>

        <ul style={s.ul}>
          <li style={s.li}><strong>Your business name, address, and contact information.</strong> Customers should be able to reach you without searching for your number. Commercial clients need your business address for their records.</li>
          <li style={s.li}><strong>Invoice number.</strong> Number your invoices sequentially. This makes record-keeping straightforward for both parties and is required by many commercial clients and general contractors.</li>
          <li style={s.li}><strong>Invoice date and payment due date.</strong> Not "Net 30" by itself — an actual calendar date. "Due by April 5, 2026" leaves no ambiguity.</li>
          <li style={s.li}><strong>Client name and project address.</strong> Especially important if the billing address and the job site are different.</li>
          <li style={s.li}><strong>Itemized line items.</strong> Break down what you are charging for. Labor and materials should be listed separately. Lump-sum invoices are harder to approve and easier to dispute.</li>
          <li style={s.li}><strong>Payment terms and accepted methods.</strong> How do you want to be paid? Check, ACH, credit card, Zelle? State it clearly. Include any late fee language from your contract.</li>
          <li style={s.li}><strong>Reference to the original contract or change orders.</strong> Tie the invoice back to the signed documents. This makes the math traceable.</li>
        </ul>

        <h2 style={s.h2}>How to Structure Line Items That Get Approved Quickly</h2>
        <p style={s.p}>The way you break down your line items affects how quickly invoices get approved. Vague descriptions slow things down because the customer has to interpret them. Overly detailed breakdowns can invite price-shopping or questions you do not want to answer mid-project.</p>

        <p style={s.p}>The right level of detail for a contractor invoice template is descriptive but not granular to the point of confusion. Here is an example of how the same work can be invoiced poorly versus well:</p>

        <div style={s.example}>
          {"POOR:\nLabor ............... $4,200\nMaterials ........... $1,900\n\nBETTER:\nFraming labor — master bedroom addition (48 hrs @ $65/hr) ... $3,120\nRough plumbing labor — new bath (18 hrs @ $85/hr) .......... $1,530\nLumber — 2x6 framing, treated sill plate, headers ......... $1,240\nPlumbing rough materials — PEX, fittings, shutoffs ........   $660"}
        </div>

        <p style={s.p}>The second version is easier for a customer to review and approve because they can match each line to work they witnessed. It is also stronger documentation if a payment dispute arises later.</p>

        <h2 style={s.h2}>Handling Deposits and Progress Billing</h2>
        <p style={s.p}>On jobs that span multiple weeks or carry significant material costs upfront, a single invoice at completion is a cash flow problem. A solid contractor invoice template should accommodate deposit invoices and progress billing as separate documents tied to the same project.</p>

        <p style={s.p}>A deposit invoice is simple: it references the original contract, states the deposit amount, and is sent before work begins. A progress invoice covers work completed through a specific date or milestone. A final invoice captures the remaining balance and references any approved change orders.</p>

        <p style={s.p}>Each document in this sequence should carry the same project reference, be numbered sequentially, and tie back to the original contract total so the customer can see how payments accumulate. At the end of the job, the customer should be able to see that the sum of all invoices equals the contract price plus any approved change orders.</p>

        <h2 style={s.h2}>Late Fees and What to Put on Your Invoice</h2>
        <p style={s.p}>If your contract includes late fees, they need to appear on your invoice as well. Do not assume a customer remembers the terms from a contract they signed six weeks ago. A simple note at the bottom of the invoice is sufficient:</p>

        <div style={s.example}>
          {"Payment Terms: Due by April 5, 2026.\nA late fee of 1.5% per month will be applied to invoices not paid within 30 days of the due date, per the terms of the signed contract dated February 28, 2026."}
        </div>

        <p style={s.p}>This language is not adversarial. It is professional. It reminds the customer that a contract exists and that the payment terms were agreed to. Most customers will pay on time when they see a clear due date and understand the consequences of missing it.</p>

        <h2 style={s.h2}>Presentation Matters More Than Contractors Realize</h2>
        <p style={s.p}>The presentation of your contractor invoice template signals something about your business. A handwritten invoice on a generic form, or a hastily assembled document in a plain text email, communicates a different level of professionalism than a clean, consistently formatted document with your company name and all the right fields in the right places.</p>

        <p style={s.p}>This matters because customers make purchasing decisions — including repeat business and referrals — based on the overall impression of how a contractor operates. The work quality is the foundation. But the administrative experience, from the contract through the invoice, is what tells them whether you are the kind of contractor worth calling again.</p>

        <p style={s.p}>You do not need custom software or an accountant to send professional invoices. You need a contractor invoice template that is consistent, complete, and easy to fill in quickly for every job. Build the template once, use it on every job, and focus your energy on the work.</p>

        <div style={s.cta}>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.625rem' }}>Get a Contractor Invoice Template That Gets You Paid</div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>ContractorDocuments.com includes professionally structured contractor invoice templates alongside contracts, change orders, lien waivers, and scope of work documents — everything in one place.</p>
          <a href="/#pricing" style={{ display: 'inline-block', background: '#2563eb', color: '#fff', padding: '0.7rem 1.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Download Sample + See Pricing →</a>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', textDecoration: 'none' }}>← Back to all articles</a>
        </div>
      </div>
    </main>
  )
}
