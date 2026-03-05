export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-white/25 text-xs mb-2">
          &copy; 2026 ContractorDocuments.com &mdash; A Pearl Ventures Company
        </p>
        <p className="mb-3">
          <a href="https://fenceestimatepro.com" target="_blank" rel="noopener noreferrer" className="text-xs text-white/35 hover:text-white/50 transition-colors">
            Fence contractor? Try <span className="text-accent-light">FenceEstimatePro</span> — build estimates in 5 min, track jobs, protect your margin.
          </a>
        </p>
        <p className="text-white/20 text-xs flex gap-6 justify-center flex-wrap">
          <a href="https://pearllab.io" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-colors">Pearl Labs</a>
          <a href="mailto:support@contractordocuments.com" className="text-white/30 hover:text-white/50 transition-colors">support@contractordocuments.com</a>
          <a href="/privacy" className="text-white/30 hover:text-white/50 transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-white/30 hover:text-white/50 transition-colors">Terms</a>
        </p>
      </div>
    </footer>
  )
}
