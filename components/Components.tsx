'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Components() {
  const components = [
    {
      title: 'FIG Webapp',
      badge: 'Frontend',
      description: 'Modern Next.js 15 application with cyberpunk UI, Web3 integration, and real-time WebSocket communication',
      features: ['Next.js 15', 'TypeScript', 'Web3', 'Encryption'],
      href: '/components#webapp',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'FIG Core',
      badge: 'Backend',
      description: 'HTTP request forwarding system with mitmproxy integration, blockchain authentication, and IPFS storage',
      features: ['Python', 'mitmproxy', 'TypeScript', 'IPFS'],
      href: '/components#core',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'FIG Browser',
      badge: 'Browser',
      description: 'Privacy-preserving P2P browser with TEE-based mining nodes and decentralized storage',
      features: ['P2P', 'TEE', 'Privacy', 'Decentralized'],
      href: '/components#browser',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Project Components
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The FIG ecosystem consists of three main components working together to provide 
            a complete privacy-preserving web infrastructure solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {component.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${component.color} text-white`}>
                  {component.badge}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {component.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {component.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Link
                href={component.href}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:translate-x-1 transform"
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
