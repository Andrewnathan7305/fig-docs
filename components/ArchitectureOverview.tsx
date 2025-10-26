'use client'

import { motion } from 'framer-motion'

export default function ArchitectureOverview() {
  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            System Architecture
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding the FIG ecosystem's distributed architecture and data flow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {/* Browser */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Browser</h3>
              <p className="text-xs text-gray-400">User Interface</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-cyan-400 text-2xl">→</div>
            </div>

            {/* Proxy */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔀</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">mitmproxy</h3>
              <p className="text-xs text-gray-400">Traffic Interception</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-cyan-400 text-2xl">→</div>
            </div>

            {/* WebSocket */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">WebSocket Bridge</h3>
              <p className="text-xs text-gray-400">Communication Layer</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-cyan-400 text-2xl">→</div>
            </div>

            {/* Backend */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Processing Backend</h3>
              <p className="text-xs text-gray-400">Request Processing</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-cyan-400 text-2xl">→</div>
            </div>

            {/* Blockchain */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⛓️</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Yellow Network</h3>
              <p className="text-xs text-gray-400">Blockchain Integration</p>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="text-cyan-400 text-2xl">→</div>
            </div>

            {/* IPFS */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">IPFS Storage</h3>
              <p className="text-xs text-gray-400">Decentralized Storage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
