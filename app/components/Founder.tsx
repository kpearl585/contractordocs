export default function Founder() {
  return (
    <section className="max-w-[800px] mx-auto py-20 px-6 flex gap-12 items-center flex-wrap">
      <div className="shrink-0">
        <img
          src="/keegan-pearl.jpg"
          alt="Keegan Pearl — Founder"
          className="w-[120px] h-[120px] rounded-full object-cover object-top border-[3px] border-accent/40 block"
        />
      </div>
      <div className="flex-1 min-w-[280px]">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 bg-warning/10 border border-warning/30 rounded-full px-3 py-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a84c"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span className="text-[11px] text-warning font-bold tracking-wider">U.S. NAVY VETERAN</span>
          </div>
          <span className="text-xs text-muted">Founder, Pearl Ventures</span>
        </div>
        <blockquote className="m-0 text-base text-white/85 leading-relaxed italic border-l-[3px] border-accent pl-5">
          &ldquo;I watched skilled contractors lose tens of thousands of dollars — not because they did bad work, but because they had no paperwork. A disputed scope, a client who &apos;forgot&apos; what was agreed, a job that went sideways with no contract to back them up. I built ContractorDocuments to fix that. These are the documents every contractor should have had from day one.&rdquo;
        </blockquote>
        <div className="mt-4 text-sm font-bold text-text">Keegan Pearl</div>
        <div className="text-xs text-muted">Founder · ContractorDocuments.com</div>
      </div>
    </section>
  )
}
