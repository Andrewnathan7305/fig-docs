'use client'

import { motion } from 'framer-motion'

export default function CoreComponent() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">FIG Core</h2>
          <p className="text-gray-300">
            HTTP request forwarding system with mitmproxy integration, blockchain authentication, and IPFS storage.
            This is the core backend component that handles all request processing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
