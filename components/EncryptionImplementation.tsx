'use client'

import { motion } from 'framer-motion'

export default function EncryptionImplementation() {
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
          <h2 className="text-3xl font-bold text-white mb-6">Encryption Implementation</h2>
          <p className="text-gray-300">
            Detailed implementation guide for the encryption functionality in the FIG webapp.
            This section covers RSA-OAEP encryption, hybrid AES support, and wallet-based key management.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
