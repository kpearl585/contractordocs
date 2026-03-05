export default function FinalCTA() {
  return (
    <section className="py-24 text-center relative overflow-hidden">
      {/* Subtle violet gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/5" />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight leading-tight mb-4">
          One disputed job costs more than<br />10 years of protection.
        </h2>
        <p className="text-muted mb-10 text-base">
          Get all 8 templates for a one-time payment. No subscriptions.
        </p>
        <a
          href="https://buy.stripe.com/aFafZa6E15858tK1Ced3i02"
          className="accent-glow inline-block bg-accent hover:bg-accent-light text-white px-12 py-4 rounded-lg font-bold text-lg tracking-tight transition-colors"
        >
          Get the Full Bundle — $97
        </a>
        <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#1A1F71"/><text x="4" y="14" fontFamily="Arial" fontWeight="bold" fontSize="9" fill="white">VISA</text></svg>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="20" rx="3" fill="#252525"/><circle cx="13" cy="10" r="6" fill="#EB001B"/><circle cx="19" cy="10" r="6" fill="#F79E1B"/><path d="M16 5.7a6 6 0 0 1 0 8.6A6 6 0 0 1 16 5.7z" fill="#FF5F00"/></svg>
          <div className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded px-2 py-1">
            <svg width="10" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span className="text-[10px] text-white/50 tracking-wider">Secured by Stripe</span>
          </div>
        </div>
        <p className="mt-5 text-white/25 text-xs">
          Instant download · Unlimited use · 30-day guarantee
        </p>
      </div>
    </section>
  )
}
