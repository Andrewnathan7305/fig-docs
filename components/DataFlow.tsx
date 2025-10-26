'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Shield, Database, Zap } from 'lucide-react'

export default function DataFlow() {
  const flowSteps = [
    {
      step: 1,
      icon: Globe,
      title: 'Traffic Interception',
      description: 'mitmproxy intercepts HTTP requests from the browser',
      details: [
        'Browser sends HTTP/HTTPS request',
        'mitmproxy captures the request',
        'Request is parsed and validated',
        'Headers, body, and metadata are extracted',
        'Request is queued for processing'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      step: 2,
      icon: ArrowRight,
      title: 'Request Serialization',
      description: 'Request data is serialized into structured JSON format',
      details: [
        'Request converted to JSON format',
        'Headers array structure created',
        'Body data encoded (base64 for binary)',
        'Query parameters extracted',
        'Metadata added (timestamp, session ID)'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      icon: Zap,
      title: 'WebSocket Forwarding',
      description: 'Request is sent via WebSocket to the backend service',
      details: [
        'WebSocket connection established',
        'JSON payload sent to backend',
        'Message queued in processing pipeline',
        'Concurrent request handling (up to 100)',
        'Real-time status updates'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: 4,
      icon: Shield,
      title: 'Request Processing',
      description: 'Backend processes the request using curl for actual HTTP execution',
      details: [
        'ERC-7824 Nitrolite authentication',
        'curl command constructed from request data',
        'HTTP request executed to target server',
        'Response captured and processed',
        'Blockchain session management updated'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      step: 5,
      icon: Database,
      title: 'IPFS Storage (if needed)',
      description: 'Large payloads are automatically stored in IPFS',
      details: [
        'Payload size checked (>512KB threshold)',
        'Large data uploaded to IPFS via Lighthouse',
        'Content ID (CID) generated',
        'Only CID transmitted instead of full data',
        'Bandwidth usage optimized'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      step: 6,
      icon: ArrowRight,
      title: 'Response Delivery',
      description: 'Modified response is sent back through the WebSocket chain',
      details: [
        'Response serialized to JSON format',
        'IPFS CIDs resolved if present',
        'WebSocket message sent to proxy',
        'mitmproxy reconstructs HTTP response',
        'Response delivered to browser'
      ],
      color: 'from-pink-500 to-rose-500'
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
          <h2 className="text-4xl font-bold text-white mb-6">Data Flow Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step-by-step breakdown of how data flows through the FIG ecosystem from browser request to response delivery
          </p>
        </motion.div>

        <div className="space-y-8">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mb-4`}>
                    {step.step}
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{step.description}</p>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Process Details:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100</div>
              <div className="text-gray-300">Concurrent Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">512KB</div>
              <div className="text-gray-300">IPFS Threshold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100MB</div>
              <div className="text-gray-300">Max Message Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">50</div>
              <div className="text-gray-300">Proxy Concurrency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
