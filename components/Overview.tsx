'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Zap, Link as LinkIcon } from 'lucide-react'

export default function Overview() {
  const features = [
    {
      icon: Shield,
      title: 'Privacy-First',
      description: 'End-to-end encryption with TEE-based mining nodes ensuring zero-knowledge browsing',
      color: 'text-cyan-400'
    },
    {
      icon: Globe,
      title: 'Decentralized',
      description: 'No centralized servers, leveraging IPFS and Yellow Network for distributed processing',
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Concurrent processing up to 100 requests with intelligent queuing and connection pooling',
      color: 'text-green-400'
    },
    {
      icon: LinkIcon,
      title: 'Blockchain Integration',
      description: 'ERC-7824 Nitrolite protocol for secure session management and state channels',
      color: 'text-pink-400'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            System Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The FIG ecosystem provides a comprehensive solution for privacy-preserving web browsing 
            through decentralized architecture and blockchain integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
