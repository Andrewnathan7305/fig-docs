'use client'

import { motion } from 'framer-motion'
import { Shield, Key, Lock, Eye } from 'lucide-react'

export default function EncryptOverview() {
  const features = [
    {
      icon: Shield,
      title: 'RSA-OAEP Encryption',
      description: 'Industry-standard asymmetric encryption with 2048-bit keys for secure data transmission',
      color: 'text-cyan-400'
    },
    {
      icon: Key,
      title: 'Hybrid Encryption',
      description: 'AES-GCM for large data with RSA key wrapping for optimal performance and security',
      color: 'text-purple-400'
    },
    {
      icon: Lock,
      title: 'Wallet-Based Keys',
      description: 'Public/private key encryption using wallet addresses for seamless Web3 integration',
      color: 'text-green-400'
    },
    {
      icon: Eye,
      title: 'Client-Side Processing',
      description: 'All encryption/decryption happens client-side with no server-side key exposure',
      color: 'text-pink-400'
    }
  ]

  const useCases = [
    'Secure message transmission between users',
    'Encrypting sensitive data before storage',
    'Protecting API responses and requests',
    'Securing file uploads and downloads',
    'End-to-end encrypted communication'
  ]

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
            Encryption Implementation Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guide for implementing the /encrypt page functionality in your FIG webapp repository
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <div className={`${feature.color} mb-4`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass p-8 rounded-xl mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Primary Applications</h3>
              <ul className="space-y-2">
                {useCases.slice(0, 3).map((useCase, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Additional Features</h3>
              <ul className="space-y-2">
                {useCases.slice(3).map((useCase, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Implementation Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass p-8 rounded-xl border-l-4 border-yellow-500"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Shield className="h-6 w-6 mr-3 text-yellow-400" />
            Implementation Notice
          </h2>
          <p className="text-gray-300 mb-4">
            The /encrypt page is a critical component of the FIG webapp that handles all encryption and decryption operations. 
            This guide provides detailed implementation instructions for developers working with the FIG ecosystem.
          </p>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-200 text-sm">
              <strong>Important:</strong> Ensure proper key management and never expose private keys in client-side code. 
              All encryption operations should be performed securely with proper error handling.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
