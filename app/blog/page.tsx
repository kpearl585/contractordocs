export const metadata = {
  title: 'Contractor Business Tips | ContractorDocuments.com',
  description: 'Guides on contracts, lien waivers, scope of work, and protecting your contracting business legally.',
}

const posts = [
  {
    slug: 'why-contractors-lose-money-without-contracts',
    title: 'Why Contractors Lose Thousands Without a Signed Contract',
    excerpt: "A handshake deal costs the average contractor $2,400 per dispute. Here's why written contracts are the single highest-ROI tool in your business.",
    date: 'February 28, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'lien-waivers-explained',
    title: 'Lien Waivers Explained: What Every Contractor Needs to Know',
    excerpt: "Conditional vs. final, partial vs. full — lien waivers protect both parties. Here's how to use them correctly on every job.",
    date: 'March 1, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'scope-of-work-guide',
    title: 'How to Write a Scope of Work That Eliminates Disputes',
    excerpt: "The scope of work document is your single best defense against \"that's not what I agreed to.\" Here's what to include on every job.",
    date: 'March 2, 2026',
    readTime: '4 min read',
  },
]

export default function BlogPage() {
  return (
    <main style={{ background: '#0a0f1a', minHeight: '100vh', color: '#fff', padding: '6rem 2rem 4rem' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.7rem', color: '#2563eb', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.75rem' }}>CONTRACTOR RESOURCES</div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>Protect Your Business.<br />Get Paid Faster.</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>Practical guides on contracts, lien waivers, and running a professional contracting operation.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '2rem', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.625rem', lineHeight: 1.3, color: '#fff' }}>{post.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, fontSize: '0.9rem', margin: 0 }}>{post.excerpt}</p>
              <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#2563eb', fontWeight: 600 }}>Read article →</div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none' }}>← Back to ContractorDocuments.com</a>
        </div>
      </div>
    </main>
  )
}
