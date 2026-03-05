export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-display font-bold text-lg tracking-tight">
          ContractorDocuments<span className="text-accent">.com</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#documents" className="text-sm text-muted hover:text-text transition-colors">Documents</a>
          <a href="#pricing" className="text-sm text-muted hover:text-text transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-muted hover:text-text transition-colors">FAQ</a>
          <a href="/blog" className="text-sm text-muted hover:text-text transition-colors">Blog</a>
        </div>
        <a
          href="#pricing"
          className="bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Get Bundle — $97
        </a>
      </div>
    </nav>
  )
}
