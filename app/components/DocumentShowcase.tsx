const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
)

export const DOCUMENTS = [
  { name: 'Contractor Estimate Template', desc: 'Professional quote with scope, materials, labor breakdown and payment terms', file: 'contractor-estimate-template.txt', slug: 'contractor-estimate' },
  { name: 'Service Agreement / Contract', desc: 'Protect yourself legally on every job with a signed contract', file: 'contractor-agreement.txt', slug: 'contractor-agreement' },
  { name: 'Change Order Form', desc: 'Document every change to avoid disputes and get paid for extras', file: 'change-order-form.txt', slug: 'change-order' },
  { name: 'Conditional Lien Waiver', desc: 'Required for progress payments in most states', file: 'lien-waiver-conditional.txt', slug: 'lien-waiver-conditional' },
  { name: 'Final Lien Waiver', desc: 'Close out jobs cleanly and protect your clients', file: 'lien-waiver-final.txt', slug: 'lien-waiver-final' },
  { name: 'Scope of Work', desc: "Define exactly what is and isn't included in every job", file: 'scope-of-work.txt', slug: 'scope-of-work' },
  { name: 'Subcontractor Agreement', desc: 'Hire subs legally with clear terms and liability protection', file: 'subcontractor-agreement.txt', slug: 'subcontractor-agreement' },
  { name: 'Warranty Certificate', desc: 'Professional warranty documentation that builds trust', file: 'warranty-certificate.txt', slug: 'warranty-certificate' },
]

interface DocumentShowcaseProps {
  onPreview: (doc: typeof DOCUMENTS[0]) => void
}

export default function DocumentShowcase({ onPreview }: DocumentShowcaseProps) {
  return (
    <section id="documents" className="bg-surface border-t border-b border-border py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] text-accent font-bold tracking-[0.25em] uppercase mb-3">WHAT YOU GET</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-tight">8 Professional Templates</h2>
          <p className="text-muted mt-3">Everything a contractor needs to operate professionally and legally.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DOCUMENTS.map((doc) => (
            <div key={doc.name} className="bg-surface-2/50 border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-border-strong transition-colors">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 bg-accent/12 rounded-lg flex items-center justify-center shrink-0 text-accent">
                  <FileIcon />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1 leading-snug">{doc.name}</div>
                  <div className="text-xs text-muted leading-relaxed">{doc.desc}</div>
                </div>
              </div>
              <button
                onClick={() => onPreview(doc)}
                className="bg-accent/10 border border-accent/25 text-accent-light rounded-md px-4 py-2 text-xs font-semibold cursor-pointer self-start hover:bg-accent/20 transition-colors"
              >
                Preview
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
