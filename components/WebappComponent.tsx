'use client'

import { motion } from 'framer-motion'
import { Globe, Zap, Shield, CreditCard, TestTube, Lock } from 'lucide-react'

export default function WebappComponent() {
  const features = [
    {
      icon: Globe,
      title: 'Cyberpunk UI',
      description: 'Modern terminal-inspired interface with glassmorphism design',
      details: [
        '3D terminal background with WebGL effects',
        'Glitch text animations and hover effects',
        'Glassmorphism components with backdrop blur',
        'Responsive design for all screen sizes',
        'Platform detection for OS-specific styling'
      ]
    },
    {
      icon: Zap,
      title: 'Real-time Communication',
      description: 'WebSocket-based messaging system for live updates',
      details: [
        'Live WebSocket connection monitoring',
        'Real-time status updates and notifications',
        'Multi-client message broadcasting',
        'Session management and lifecycle handling',
        'Error recovery and reconnection logic'
      ]
    },
    {
      icon: Shield,
      title: 'Web3 Integration',
      description: 'Blockchain authentication and transaction handling',
      details: [
        'MetaMask wallet integration',
        'ERC-7824 Nitrolite protocol support',
        'JWT-based session management',
        'Transaction verification and validation',
        'Private key security and protection'
      ]
    },
    {
      icon: Lock,
      title: 'Encryption Tools',
      description: 'Client-side encryption and decryption capabilities',
      details: [
        'RSA-OAEP asymmetric encryption (2048-bit keys)',
        'AES-GCM hybrid encryption for large data',
        'Wallet address-based key management',
        'Real-time encryption/decryption processing',
        'Copy to clipboard functionality'
      ]
    },
    {
      icon: TestTube,
      title: 'Testing Sandbox',
      description: 'Multi-browser testing environment with distributed execution',
      details: [
        'Distributed testing across multiple browsers',
        'WebSocket-based request execution',
        'HTTP GET/POST request testing',
        'Live monitoring of WebSocket messages',
        'Session creation and management'
      ]
    },
    {
      icon: CreditCard,
      title: 'Credit Shop',
      description: 'Ethereum-based payment system with token minting',
      details: [
        'Sepolia testnet integration',
        'ERC20 token minting after payment',
        'Credit packages (500, 1000, 10000 credits)',
        'On-chain transaction validation',
        'Real-time purchase confirmations'
      ]
    }
  ]

  const techStack = [
    { category: 'Frontend', items: ['Next.js 15.5.6', 'React 19.1.0', 'TypeScript 5', 'Tailwind CSS 4'] },
    { category: 'Web3', items: ['Viem 2.32.0', '@erc7824/nitrolite 0.4.0', 'WebSocket (ws 8.18.3)'] },
    { category: '3D Graphics', items: ['OGL 1.0.11', 'Preact 10.26.9', 'Framer Motion 12.23.21'] },
    { category: 'UI Components', items: ['React Icons 5.5.0', 'Lucide React', 'Custom Glassmorphism'] }
  ]

  return (
    <section className="py-16" id="webapp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">FIG Webapp</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern Next.js 15 application with cyberpunk UI, Web3 integration, and real-time WebSocket communication.
            This component provides the user interface for the FIG ecosystem.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
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

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-white mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="px-3 py-2 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h3>
          <div className="space-y-6">
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded font-mono">POST</span>
                <code className="text-cyan-400 font-mono">/api/circuit-test</code>
              </div>
              <p className="text-gray-300 mb-2">Execute HTTP requests via curl</p>
              <div className="code-block">
                <code className="text-gray-300 text-sm">Body: {`{ url, method, headers, body }`}</code>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded font-mono">POST</span>
                <code className="text-cyan-400 font-mono">/api/circuit-test-ws</code>
              </div>
              <p className="text-gray-300 mb-2">WebSocket-based request execution</p>
              <div className="code-block">
                <code className="text-gray-300 text-sm">Body: {`{ wsMessageData, sessionId }`}</code>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded font-mono">POST</span>
                <code className="text-cyan-400 font-mono">/api/claim</code>
              </div>
              <p className="text-gray-300 mb-2">Claim ERC20 tokens after payment</p>
              <div className="code-block">
                <code className="text-gray-300 text-sm">Body: {`{ txHash, address }`}</code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
