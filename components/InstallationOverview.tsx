'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react'

export default function InstallationOverview() {
  const prerequisites = [
    { icon: CheckCircle, text: 'Python 3.8+', status: 'required' },
    { icon: CheckCircle, text: 'Node.js 18+', status: 'required' },
    { icon: CheckCircle, text: 'mitmproxy', status: 'required' },
    { icon: CheckCircle, text: 'Firefox browser', status: 'required' },
    { icon: CheckCircle, text: 'Lighthouse API key', status: 'optional' },
  ]

  const warnings = [
    {
      icon: AlertTriangle,
      title: 'Proxy Required',
      description: 'This system requires mitmproxy running locally to intercept HTTP traffic'
    },
    {
      icon: Shield,
      title: 'Certificate Installation',
      description: 'Firefox must trust mitmproxy certificates for HTTPS traffic'
    },
    {
      icon: Clock,
      title: 'Service Dependencies',
      description: 'WebSocket bridge and backend services must be running simultaneously'
    }
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
            Installation Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete setup guide for the FIG ecosystem with mitmproxy integration and Firefox configuration
          </p>
        </motion.div>

        {/* Prerequisites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-xl mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Prerequisites</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Required Software</h3>
              <div className="space-y-3">
                {prerequisites.slice(0, 4).map((prereq, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <prereq.icon className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{prereq.text}</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                      {prereq.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Optional Components</h3>
              <div className="space-y-3">
                {prerequisites.slice(4).map((prereq, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <prereq.icon className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">{prereq.text}</span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      {prereq.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Warnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Important Warnings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {warnings.map((warning, index) => (
              <div key={index} className="glass p-6 rounded-xl border-l-4 border-yellow-500">
                <div className="flex items-start space-x-3">
                  <warning.icon className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {warning.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {warning.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Start Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Quick Start Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Install mitmproxy</h3>
              <p className="text-gray-300 text-sm">Set up the Python proxy tool</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Configure Firefox</h3>
              <p className="text-gray-300 text-sm">Set proxy and install certificates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Run Services</h3>
              <p className="text-gray-300 text-sm">Start all required components</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
