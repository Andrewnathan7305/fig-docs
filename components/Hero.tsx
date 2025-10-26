'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TerminalWindow from './TerminalWindow'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="glitch-text text-cyan-400" data-text="FIG">
                FIG
              </span>
              <br />
              <span className="text-white text-3xl lg:text-5xl font-light">
                Privacy-Preserving Web Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              A comprehensive system for decentralized, encrypted web browsing with blockchain integration, 
              distributed testing capabilities, and advanced security features.
            </p>

            {/* Live Demo Section */}
            <div className="mb-8 p-6 glass rounded-xl border border-cyan-500/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">🚀 Live Demo Available</h3>
                <a
                  href="https://figsearch.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-3xl lg:text-4xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 mb-4 neon-glow px-8 py-4 rounded-lg"
                >
                  https://figsearch.app/
                </a>
                <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-4 mt-4">
                  <p className="text-yellow-200 text-sm">
                    <strong>⚠️ Note:</strong> Full functionality requires local proxy and miner node installation. 
                    See <Link href="/installation" className="underline hover:text-yellow-100">Installation Guide</Link> for complete setup.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://figsearch.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Try Live Demo
              </a>
              <Link
                href="/installation"
                className="btn btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Full Installation
              </Link>
            </div>
          </motion.div>

          {/* Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <TerminalWindow />
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  )
}
