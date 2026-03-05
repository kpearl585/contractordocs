const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
)

export default function BeforeAfter() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-tight">The Difference Is Clear</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-danger/5 border border-danger/15 rounded-xl p-8">
            <div className="text-danger font-bold text-xs tracking-[0.1em] uppercase mb-5">Without ContractorDocuments</div>
            <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
              {['Handshake agreements that fall apart', 'Disputes with no paper trail', 'Paying $500+ for basic contracts', 'Looking unprofessional to clients', 'Losing money on scope creep'].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                  <span className="shrink-0 mt-px"><XIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-success/5 border border-success/20 rounded-xl p-8">
            <div className="text-success font-bold text-xs tracking-[0.1em] uppercase mb-5">With ContractorDocuments</div>
            <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
              {['Signed contracts on every job', 'Clear scope eliminates disputes', 'Professional documents instantly', 'Legally protected on every job', 'Look like an established operation'].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                  <span className="shrink-0 mt-px"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
