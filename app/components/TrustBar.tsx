const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
)
const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)
const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)

export default function TrustBar() {
  const items = [
    { icon: <ShieldIcon />, label: 'Attorney-Reviewed Language' },
    { icon: <LockIcon />, label: 'Secure Checkout' },
    { icon: <DownloadIcon />, label: 'Instant Download' },
    { icon: <StarIcon />, label: '30-Day Guarantee' },
  ]

  return (
    <section className="bg-surface border-t border-b border-border py-5">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center flex-wrap gap-8">
        {items.map(item => (
          <div key={item.label} className="flex items-center gap-2.5 text-muted text-sm font-medium">
            <span className="text-accent">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <span className="text-xs text-muted/60">
          A{' '}
          <a href="https://pearllab.io" target="_blank" rel="noopener noreferrer" className="text-muted/80 hover:text-accent transition-colors">
            Pearl Ventures
          </a>
          {' '}Company
        </span>
      </div>
    </section>
  )
}
