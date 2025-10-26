'use client'

import Link from 'next/link'
import { Github, ExternalLink, FileText } from 'lucide-react'

export default function Footer() {
  const repositories = [
    { name: 'FIG Webapp', href: 'https://github.com/Philotheephilix/fig-webapp' },
    { name: 'FIG Core', href: 'https://github.com/Philotheephilix/fig' },
    { name: 'FIG Browser', href: 'https://github.com/Philotheephilix/fig-app' },
  ]

  const resources = [
    { name: 'ETHGlobal Showcase', href: 'https://ethglobal.com/showcase/fig-search-yfit4' },
    { name: 'mitmproxy Docs', href: 'https://docs.mitmproxy.org/' },
    { name: 'Lighthouse IPFS', href: 'https://files.lighthouse.storage/' },
  ]

  return (
    <footer className="bg-black/80 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="glitch-text text-2xl font-bold text-cyan-400" data-text="FIG">
                FIG
              </span>
              <span className="text-sm text-gray-400">Documentation</span>
            </div>
            <p className="text-gray-300 mb-4">
              Privacy-preserving web infrastructure with blockchain integration, 
              providing decentralized and encrypted browsing capabilities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://figsearch.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-bold text-lg"
                title="Live Demo"
              >
                🚀 Live Demo
              </a>
              <a
                href="https://github.com/Philotheephilix/fig-webapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://ethglobal.com/showcase/fig-search-yfit4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                title="ETHGlobal"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Repositories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Repositories</h3>
            <ul className="space-y-2">
              {repositories.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 FIG Project. Built with ❤️ for privacy and security.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/architecture" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Architecture
              </Link>
              <Link href="/installation" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Installation
              </Link>
              <Link href="/components" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
