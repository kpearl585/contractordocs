export default function Hero() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr,400px] gap-16 items-center">
          <div>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight mb-6">
              Stop Losing Jobs Because You{' '}
              <span className="gradient-text">Had No Contract.</span>
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Attorney-Reviewed', 'All 50 States', 'Instant Download'].map(item => (
                <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium text-muted bg-surface-2 border border-border rounded-full px-3 py-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://buy.stripe.com/aFafZa6E15858tK1Ced3i02"
                className="accent-glow bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg font-bold text-base transition-colors"
              >
                Get All 8 Templates — $97
              </a>
              <a
                href="#sample"
                className="border border-border-strong hover:border-muted text-white/80 px-6 py-4 rounded-lg font-semibold text-sm transition-colors"
              >
                Download Free Sample
              </a>
            </div>

            <p className="text-sm text-muted max-w-md">
              One disputed job costs more than this entire bundle. Protect every job starting today.
            </p>
          </div>

          {/* Floating document card — desktop only */}
          <div className="hidden lg:block">
            <div className="bg-surface border border-border rounded-xl p-8 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase mb-4">Document Preview</div>
              <div className="font-display text-lg font-bold mb-6">SERVICE AGREEMENT</div>
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-2.5 bg-surface-2 rounded" style={{ width: `${85 - i * 8}%` }} />
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between text-xs text-muted">
                  <span>Contractor Signature</span>
                  <span>Client Signature</span>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="h-px w-24 bg-border-strong" />
                  <div className="h-px w-24 bg-border-strong" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          {[
            { stat: '$97 one-time', label: 'No subscription' },
            { stat: '8 documents', label: 'Everything you need' },
            { stat: '30 days', label: 'Money-back guarantee' },
            { stat: 'All 50 states', label: 'Attorney-reviewed' },
          ].map(item => (
            <div key={item.stat} className="text-center">
              <div className="font-display text-xl font-bold text-text">{item.stat}</div>
              <div className="text-xs text-muted mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
