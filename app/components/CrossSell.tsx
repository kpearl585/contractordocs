const FenceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="4" height="16" rx="0.5" />
    <rect x="10" y="4" width="4" height="16" rx="0.5" />
    <rect x="18" y="4" width="4" height="16" rx="0.5" />
    <line x1="6" y1="8" x2="10" y2="8" />
    <line x1="6" y1="16" x2="10" y2="16" />
    <line x1="14" y1="8" x2="18" y2="8" />
    <line x1="14" y1="16" x2="18" y2="16" />
  </svg>
)

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

export default function CrossSell() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] text-accent font-bold tracking-[0.25em] uppercase mb-3">PEARL VENTURES</div>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight">Built by Pearl Ventures</h2>
          <p className="text-muted mt-3">ContractorDocuments is one product in a growing suite built for tradespeople.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          <div className="bg-surface border border-border rounded-xl p-8 hover:border-border-strong transition-colors">
            <div className="w-12 h-12 bg-accent/12 rounded-lg flex items-center justify-center text-accent mb-5">
              <FenceIcon />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">FenceEstimatePro</h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Full estimating and job management software for fence contractors. Build estimates in 5 min, track jobs, protect your margin.
            </p>
            <a
              href="https://fenceestimatepro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent font-semibold hover:text-accent-light transition-colors"
            >
              Try FenceEstimatePro →
            </a>
          </div>
          <div className="bg-surface border border-border rounded-xl p-8 hover:border-border-strong transition-colors">
            <div className="w-12 h-12 bg-accent/12 rounded-lg flex items-center justify-center text-accent mb-5">
              <CodeIcon />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">Need a custom website?</h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Pearl Labs builds custom web applications, SaaS platforms, and AI tools for contractors and businesses ready to compete.
            </p>
            <a
              href="https://pearllab.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent font-semibold hover:text-accent-light transition-colors"
            >
              See Pearl Labs →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
