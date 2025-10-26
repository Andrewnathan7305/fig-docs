'use client'

import { motion } from 'framer-motion'
import { Zap, Database, Network, Cpu, Memory, HardDrive } from 'lucide-react'

export default function PerformanceSpecs() {
  const performanceMetrics = [
    {
      icon: Zap,
      title: 'Concurrency',
      metrics: [
        { label: 'Backend Processing', value: '100', unit: 'concurrent requests', description: 'Maximum concurrent request processing capacity' },
        { label: 'Proxy Layer', value: '50', unit: 'concurrent requests', description: 'Concurrent requests handled by proxy layer' },
        { label: 'WebSocket Connections', value: '1000+', unit: 'simultaneous', description: 'Maximum WebSocket client connections' }
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'Storage & Data',
      metrics: [
        { label: 'IPFS Threshold', value: '512', unit: 'KB', description: 'Automatic IPFS storage for large payloads' },
        { label: 'Max Message Size', value: '100', unit: 'MB', description: 'Maximum WebSocket message size support' },
        { label: 'Connection Pool', value: '50', unit: 'connections', description: 'HTTP connection pool size for optimization' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Network Performance',
      metrics: [
        { label: 'Request Latency', value: '< 100', unit: 'ms', description: 'Average request processing time' },
        { label: 'Throughput', value: '1000+', unit: 'req/min', description: 'Maximum requests per minute capacity' },
        { label: 'Bandwidth Optimization', value: '90%', unit: 'reduction', description: 'Bandwidth savings with IPFS integration' }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'System Resources',
      metrics: [
        { label: 'Memory Usage', value: '< 512', unit: 'MB', description: 'Typical memory consumption per instance' },
        { label: 'CPU Usage', value: '< 20%', unit: 'average', description: 'CPU utilization under normal load' },
        { label: 'Startup Time', value: '< 5', unit: 'seconds', description: 'Time to initialize all services' }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const optimizationFeatures = [
    {
      title: 'Connection Pooling',
      description: 'Reuses HTTP connections for better performance and reduced latency',
      benefits: ['Reduced connection overhead', 'Faster request processing', 'Lower resource usage']
    },
    {
      title: 'Intelligent Queuing',
      description: 'Smart request queuing when at capacity to prevent system overload',
      benefits: ['Prevents system crashes', 'Maintains performance under load', 'Graceful degradation']
    },
    {
      title: 'IPFS Integration',
      description: 'Automatic large payload storage in IPFS to reduce bandwidth usage',
      benefits: ['90% bandwidth reduction', 'Faster transfers', 'Decentralized storage']
    },
    {
      title: 'Binary Data Handling',
      description: 'Efficient base64 encoding/decoding for binary content processing',
      benefits: ['Optimized memory usage', 'Faster binary processing', 'Reduced CPU overhead']
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
          <h2 className="text-4xl font-bold text-white mb-6">Performance Specifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detailed performance metrics, optimization features, and system capabilities of the FIG ecosystem
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <div className="space-y-12 mb-16">
          {performanceMetrics.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="bg-gray-800/50 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        {metric.value}
                        <span className="text-lg text-gray-400 ml-1">{metric.unit}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white">{metric.label}</h4>
                    </div>
                    <p className="text-gray-300 text-sm text-center">{metric.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimization Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Performance Optimizations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {optimizationFeatures.map((feature, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">System Requirements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-cyan-400" />
                Minimum Requirements
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Python 3.8+ with mitmproxy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Node.js 18+ with TypeScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">2GB RAM minimum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">1GB available disk space</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-purple-400" />
                Recommended Setup
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Python 3.12+ with latest mitmproxy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Node.js 20+ with latest TypeScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">8GB RAM for optimal performance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">SSD storage for faster I/O</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
