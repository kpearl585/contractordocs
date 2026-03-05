'use client'

import { useState, useEffect } from 'react'
import UrgencyBar from './components/UrgencyBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problems from './components/Problems'
import Founder from './components/Founder'
import DocumentShowcase, { DOCUMENTS } from './components/DocumentShowcase'
import BeforeAfter from './components/BeforeAfter'
import FreeSample from './components/FreeSample'
import Pricing from './components/Pricing'
import CredibilityStats from './components/CredibilityStats'
import FAQ from './components/FAQ'
import CrossSell from './components/CrossSell'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ExitIntent from './components/ExitIntent'
import PreviewModal from './components/PreviewModal'

export default function Home() {
  const [previewDoc, setPreviewDoc] = useState<typeof DOCUMENTS[0] | null>(null)
  const [email, setEmail] = useState('')
  const [captured, setCaptured] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [exitShown, setExitShown] = useState(false)
  const [exitEmail, setExitEmail] = useState('')
  const [exitSubmitted, setExitSubmitted] = useState(false)

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setCaptured(true)
        setDownloadUrl(data.downloadUrl)
      }
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShown) {
        setExitShown(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [exitShown])

  return (
    <main className="bg-background min-h-screen text-text font-body">
      {previewDoc && <PreviewModal doc={previewDoc} onClose={() => setPreviewDoc(null)} />}
      <UrgencyBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <Problems />
      <Founder />
      <DocumentShowcase onPreview={setPreviewDoc} />
      <BeforeAfter />
      <FreeSample
        email={email}
        setEmail={setEmail}
        captured={captured}
        downloadUrl={downloadUrl}
        submitting={submitting}
        onSubmit={handleCapture}
      />
      <Pricing />
      <CredibilityStats />
      <FAQ />
      <CrossSell />
      <FinalCTA />
      <Footer />
      <ExitIntent
        exitShown={exitShown}
        exitSubmitted={exitSubmitted}
        exitEmail={exitEmail}
        setExitEmail={setExitEmail}
        setExitShown={setExitShown}
        setExitSubmitted={setExitSubmitted}
      />
    </main>
  )
}
