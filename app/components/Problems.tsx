const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
)

const problems = [
  { problem: 'Customer disputes the scope after the job', cost: 'Avg loss: $2,400' },
  { problem: 'No signed contract = no legal protection', cost: 'Avg dispute: $5,000' },
  { problem: 'Attorney fees just to get basic docs', cost: 'Avg cost: $800+' },
]

export default function Problems() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[11px] text-danger font-bold tracking-[0.25em] uppercase mb-3">THE REAL COST</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-bold tracking-tight">Sound familiar?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map(p => (
            <div key={p.problem} className="bg-danger/5 border border-danger/15 rounded-xl p-6">
              <div className="text-danger mb-3"><WarningIcon /></div>
              <p className="text-text font-semibold text-[15px] mb-2 leading-snug">{p.problem}</p>
              <p className="text-danger text-sm font-bold tracking-wide">{p.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
