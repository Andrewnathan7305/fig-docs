'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

export default function QuickStart() {
  const steps = [
    {
      number: 1,
      title: 'Install mitmproxy',
      code: 'pip install mitmproxy',
      description: 'Install the Python-based proxy tool'
    },
    {
      number: 2,
      title: 'Configure Firefox',
      description: 'Set proxy to 127.0.0.1:8080 and install certificates',
      code: 'Configure in Firefox settings'
    },
    {
      number: 3,
      title: 'Run Services',
      code: 'mitmproxy -s app.py',
      description: 'Start the proxy and WebSocket services'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Quick Start
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get up and running with the FIG ecosystem in just a few steps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {step.description}
                  </p>
                  <div className="code-block">
                    <code className="text-cyan-400 font-mono text-sm">
                      {step.code}
                    </code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6">
                Follow our detailed installation guide to set up the complete FIG ecosystem 
                with all necessary components and configurations.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://figsearch.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold neon-glow"
                >
                  🚀 Try Live Demo
                </a>
                
                <Link
                  href="/installation"
                  className="btn btn-secondary w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold"
                >
                  Detailed Installation Guide
                </Link>
                
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Philotheephilix/fig-webapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex-1 inline-flex items-center justify-center px-4 py-3"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    FIG Webapp
                  </a>
                  <a
                    href="https://ethglobal.com/showcase/fig-search-yfit4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex-1 inline-flex items-center justify-center px-4 py-3"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    ETHGlobal
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
