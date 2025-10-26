'use client'

import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function WarningBanner() {
  return (
    <div className="warning-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <div className="text-center">
            <span className="font-bold">IMPORTANT:</span> Full functionality requires a proxy and socket server running locally with mitmproxy Python package.{' '}
            <Link href="/installation" className="underline hover:text-gray-800 font-medium">
              See Installation Guide
            </Link>{' '}
            for setup instructions. The <a href="https://figsearch.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800 font-medium">live demo</a> may have limited functionality without local setup.
          </div>
        </div>
      </div>
    </div>
  )
}
