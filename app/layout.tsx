import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WarningBanner from '@/components/WarningBanner'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FIG Documentation - Privacy-Preserving Web Infrastructure',
  description: 'Comprehensive documentation for the FIG ecosystem - a decentralized, encrypted web browsing system with blockchain integration.',
  keywords: ['FIG', 'privacy', 'blockchain', 'web3', 'encryption', 'decentralized', 'browsing'],
  authors: [{ name: 'FIG Project Team' }],
  openGraph: {
    title: 'FIG Documentation',
    description: 'Privacy-preserving web infrastructure with blockchain integration',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WarningBanner />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}