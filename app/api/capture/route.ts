import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email?.includes('@')) return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    console.log('Lead captured:', email)
    return NextResponse.json({
      success: true,
      downloadUrl: '/docs/scope-of-work.txt',
      message: 'Download ready'
    })
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
