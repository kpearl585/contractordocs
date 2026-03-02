import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ContractorDocuments.com — Professional Contractor Document Templates',
  description: 'Professional contractor documents written by legal experts. Estimates, contracts, lien waivers, change orders, and more. One-time payment. Instant download.',
  keywords: 'contractor documents, contractor contract template, lien waiver, change order form, contractor estimate template, subcontractor agreement',
  openGraph: {
    title: 'ContractorDocuments.com — Stop Losing Jobs Because You Had No Contract',
    description: 'Professional contractor documents written by legal experts. Protect your business, get paid faster. One-time payment. Instant download.',
    url: 'https://contractordocuments.com',
    siteName: 'ContractorDocuments.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContractorDocuments.com — Professional Contractor Document Templates',
    description: 'Stop losing jobs because you had no contract. Get all 8 professional templates for $97.',
  },
  metadataBase: new URL('https://contractordocuments.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0a0f1a' }}>{children}</body>
    </html>
  )
}
