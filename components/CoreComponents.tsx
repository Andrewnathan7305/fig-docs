'use client'

import { motion } from 'framer-motion'
import { Terminal, Server, Database, Network } from 'lucide-react'

export default function CoreComponents() {
  const components = [
    {
      icon: Terminal,
      title: 'Proxy Layer (app/)',
      technology: 'Python + mitmproxy',
      description: 'Intercepts and processes HTTP traffic from browsers',
      features: [
        'HTTP/HTTPS traffic interception',
        'Request serialization to JSON format',
        'Concurrent processing (up to 50 requests)',
        'WebSocket communication with backend',
        'Response processing and forwarding',
        'IPFS integration for large payloads'
      ],
      files: [
        'app.py - Main proxy logic and request handling',
        'ws-code.py - WebSocket bridge server',
        'ipfs_utils.py - IPFS storage utilities',
        'requirements.txt - Python dependencies'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Server,
      title: 'Processing Backend (miner/)',
      technology: 'TypeScript + Node.js',
      description: 'Handles request processing and blockchain integration',
      features: [
        'ERC-7824 Nitrolite authentication',
        'HTTP request execution via curl',
        'High-concurrency processing (up to 100 requests)',
        'Connection pooling optimization',
        'App session management',
        'Blockchain state updates'
      ],
      files: [
        'listener.ts - Main service entry point',
        'utils/auth.ts - Authentication utilities',
        'utils/session.ts - Session management',
        'utils/websocket.ts - WebSocket service'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'WebSocket Bridge',
      technology: 'Python WebSocket Server',
      description: 'Facilitates real-time communication between components',
      features: [
        'Real-time bidirectional communication',
        'Message broadcasting to multiple clients',
        'Large message support (up to 100MB)',
        'IPFS integration for large payloads',
        'Client connection management',
        'Error handling and recovery'
      ],
      files: [
        'ws-code.py - WebSocket server implementation',
        'Connection management and broadcasting',
        'IPFS payload handling',
        'Message serialization/deserialization'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'IPFS Storage Layer',
      technology: 'Lighthouse Protocol + IPFS',
      description: 'Decentralized storage for large content and data',
      features: [
        'Automatic large payload detection (>512KB)',
        'Lighthouse API integration',
        'Content addressing via CIDs',
        'Distributed storage network',
        'Automatic content retrieval',
        'Bandwidth optimization'
      ],
      files: [
        'ipfs_utils.py - IPFS utilities',
        'Lighthouse API integration',
        'CID generation and resolution',
        'Content upload/download handling'
      ],
      color: 'from-orange-500 to-red-500'
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
          <h2 className="text-4xl font-bold text-white mb-6">Core Components</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detailed breakdown of each component in the FIG ecosystem, their responsibilities, and technical specifications
          </p>
        </motion.div>

        <div className="space-y-12">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <component.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{component.title}</h3>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
                      {component.technology}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg">{component.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {component.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Files</h4>
                      <ul className="space-y-2">
                        {component.files.map((file, fileIndex) => (
                          <li key={fileIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm font-mono">{file}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
