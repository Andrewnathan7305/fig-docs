'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Key, Database, Network } from 'lucide-react'

export default function SecurityArchitecture() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'All data transmission is encrypted using public/private key encryption',
      details: [
        'RSA-OAEP with 2048-bit keys for asymmetric encryption',
        'AES-GCM for symmetric encryption of large data',
        'Hybrid encryption approach for optimal performance',
        'Client-side key generation and management',
        'No server-side key exposure or storage'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Lock,
      title: 'TEE-Based Processing',
      description: 'Mining nodes run in Trusted Execution Environment hardware',
      details: [
        'Hardware-level security guarantees',
        'Zero-knowledge processing capabilities',
        'Tamper-proof execution environment',
        'Prevents data access even by miners',
        'Privacy by design architecture'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Key,
      title: 'Blockchain Authentication',
      description: 'Uses ERC-7824 Nitrolite protocol for secure authentication',
      details: [
        'ECDSA signing for all blockchain interactions',
        'Decentralized identity management',
        'Session-based authentication system',
        'Private key security in environment variables',
        'Cryptographic proof of authenticity'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Zero-Knowledge Browsing',
      description: 'No one can see any text or content about your browsing',
      details: [
        'Complete data protection from source to destination',
        'No centralized data collection or storage',
        'Anonymous browsing capabilities',
        'No tracking or analytics collection',
        'Privacy-first design principles'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Decentralized Storage',
      description: 'IPFS-based storage with content addressing',
      details: [
        'Content addressing via CIDs (Content Identifiers)',
        'Distributed storage across multiple nodes',
        'No single point of failure',
        'Automatic content deduplication',
        'Censorship-resistant storage'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Network,
      title: 'State Channel Security',
      description: 'Yellow Network state channels ensure secure user interactions',
      details: [
        'Off-chain transaction processing',
        'Reduced transaction costs and complexity',
        'Real-time secure messaging',
        'Scalable architecture for high volume',
        'Efficient user interaction model'
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const securityComparison = [
    {
      solution: 'Traditional VPNs',
      issues: ['ISP sees VPN usage', 'VPN company sees all data', 'Centralized infrastructure', 'Single point of failure'],
      ourAdvantage: 'Complete anonymity with no third-party visibility'
    },
    {
      solution: 'Tor Network',
      issues: ['Entry and exit nodes can monitor traffic', 'Slow performance', 'Limited scalability', 'Known vulnerabilities'],
      ourAdvantage: 'TEE-based processing prevents any monitoring'
    },
    {
      solution: 'Traditional Browsers',
      issues: ['All data flows through centralized servers', 'User tracking and analytics', 'Data collection for ads', 'Privacy violations'],
      ourAdvantage: 'Decentralized, encrypted, privacy-preserving architecture'
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Security Architecture</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multi-layered security approach ensuring complete privacy and data protection in the FIG ecosystem
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Security Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Security Comparison</h3>
          <div className="space-y-8">
            {securityComparison.map((comparison, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-3">{comparison.solution}</h4>
                    <ul className="space-y-2">
                      {comparison.issues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-4xl text-gray-500">→</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Our Solution</h4>
                    <p className="text-gray-300 text-sm">{comparison.ourAdvantage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Security Benefits</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Privacy Protection</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Complete data encryption end-to-end</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Zero-knowledge browsing capabilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">No tracking or data collection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Anonymous browsing experience</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Technical Security</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">TEE-based hardware security</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Blockchain-based authentication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Decentralized architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">No single point of failure</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
