'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, ExternalLink } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Overview' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/installation', label: 'Installation' },
    { href: '/components', label: 'Components' },
    { href: '/encrypt-guide', label: 'Encrypt Guide' },
  ]

  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="glitch-text text-2xl font-bold text-cyan-400" data-text="FIG">
              FIG
            </span>
            <span className="text-sm text-gray-400">Documentation</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* External Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Philotheephilix/fig-webapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              title="FIG Webapp"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://ethglobal.com/showcase/fig-search-yfit4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              title="ETHGlobal Showcase"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-cyan-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
