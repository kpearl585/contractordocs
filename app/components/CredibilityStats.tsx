const stats = [
  { stat: '$2,400', label: 'Avg cost of a scope dispute' },
  { stat: '$800+', label: 'Typical attorney fee for basic docs' },
  { stat: '8', label: 'Documents in the full bundle' },
  { stat: '100%', label: 'Money-back guarantee' },
]

export default function CredibilityStats() {
  return (
    <div className="bg-surface border-t border-b border-border py-10 px-6">
      <div className="max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(item => (
          <div key={item.stat}>
            <div className="font-display text-3xl font-bold text-text tracking-tight">{item.stat}</div>
            <div className="text-xs text-muted mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
