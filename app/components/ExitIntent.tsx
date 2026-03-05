interface ExitIntentProps {
  exitShown: boolean
  exitSubmitted: boolean
  exitEmail: string
  setExitEmail: (v: string) => void
  setExitShown: (v: boolean) => void
  setExitSubmitted: (v: boolean) => void
}

export default function ExitIntent({ exitShown, exitSubmitted, exitEmail, setExitEmail, setExitShown, setExitSubmitted }: ExitIntentProps) {
  if (!exitShown) return null

  if (exitSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/85 z-[200] flex items-center justify-center" onClick={() => setExitShown(false)}>
        <div className="bg-surface border border-success/30 rounded-2xl p-12 max-w-[400px] text-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4"><polyline points="20 6 9 17 4 12"/></svg>
          <h3 className="font-display text-xl font-bold mb-2">Check Your Email</h3>
          <p className="text-muted text-sm">Your free Scope of Work template is on its way.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/85 z-[200] flex items-center justify-center p-8">
      <div className="bg-surface border border-accent/30 rounded-2xl p-10 max-w-[480px] w-full text-center relative">
        <button
          onClick={() => setExitShown(false)}
          className="absolute top-4 right-4 bg-white/8 border-none text-white w-8 h-8 rounded-md cursor-pointer text-base hover:bg-white/12 transition-colors"
        >
          ✕
        </button>
        <div className="text-[11px] text-accent tracking-[0.2em] uppercase mb-4 font-bold">WAIT — FREE GIFT</div>
        <h3 className="font-display text-2xl font-bold tracking-tight mb-3 leading-tight">Before You Go — Get the Scope of Work Template Free</h3>
        <p className="text-sm text-muted leading-relaxed mb-7">
          The document that eliminates &quot;that&apos;s not what I agreed to&quot; on every job. Yours free, no credit card.
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            value={exitEmail}
            onChange={e => setExitEmail(e.target.value)}
            placeholder="your@email.com"
            className="py-3.5 px-4 rounded-lg border border-border-strong bg-surface-2 text-text text-sm outline-none focus:border-accent transition-colors"
          />
          <button
            onClick={async () => {
              if (!exitEmail.includes('@')) return
              await fetch('/api/capture', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: exitEmail, source: 'exit_intent' }),
              })
              setExitSubmitted(true)
              setTimeout(() => setExitShown(false), 3000)
            }}
            className="py-3.5 bg-accent hover:bg-accent-light text-white border-none rounded-lg font-bold cursor-pointer text-sm transition-colors"
          >
            Send Me the Free Template
          </button>
        </div>
        <p className="mt-4 text-xs text-white/25">No spam. One email with your download link.</p>
      </div>
    </div>
  )
}
