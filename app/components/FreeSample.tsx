interface FreeSampleProps {
  email: string
  setEmail: (v: string) => void
  captured: boolean
  downloadUrl: string
  submitting: boolean
  onSubmit: (e: React.FormEvent) => void
}

export default function FreeSample({ email, setEmail, captured, downloadUrl, submitting, onSubmit }: FreeSampleProps) {
  return (
    <section id="sample" className="bg-accent/5 border-t border-b border-accent/12 py-20">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <div className="text-[11px] text-accent font-bold tracking-[0.25em] uppercase mb-3">FREE DOWNLOAD</div>
        <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-tight mb-3">Try Before You Buy</h2>
        <p className="text-muted mb-2 leading-relaxed">
          Download our Scope of Work template free. No credit card. No strings.
        </p>
        <p className="text-xs text-muted/70 mb-8">Join 1,000+ contractors who downloaded this template</p>
        {!captured ? (
          <form onSubmit={onSubmit} className="flex gap-3 flex-wrap justify-center">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 min-w-[220px] bg-white/7 border border-border-strong rounded-lg px-4 py-3 text-text text-sm outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-accent hover:bg-accent-light text-white border-none rounded-lg px-6 py-3 font-bold text-sm cursor-pointer whitespace-nowrap transition-colors disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Download Free Template'}
            </button>
          </form>
        ) : (
          <div>
            <a
              href={downloadUrl}
              download
              className="inline-block bg-success text-white px-8 py-3.5 rounded-lg font-bold text-[15px] mb-4"
            >
              Download Scope of Work Template
            </a>
            <p className="text-muted text-sm">Check your email for the full bundle offer.</p>
          </div>
        )}
        <p className="mt-4 text-white/25 text-xs">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
