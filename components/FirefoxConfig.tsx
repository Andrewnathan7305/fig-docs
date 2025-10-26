'use client'

import { motion } from 'framer-motion'
import { Shield, Settings, AlertTriangle, CheckCircle } from 'lucide-react'

export default function FirefoxConfig() {
  const configSteps = [
    {
      step: 1,
      title: 'Open Firefox Settings',
      description: 'Navigate to the network settings in Firefox',
      details: [
        'Open Firefox browser',
        'Click the hamburger menu (☰) in the top-right corner',
        'Select "Settings" from the dropdown menu',
        'Click on "General" in the left sidebar',
        'Scroll down to "Network Settings" section'
      ]
    },
    {
      step: 2,
      title: 'Configure Proxy Settings',
      description: 'Set up manual proxy configuration',
      details: [
        'Click "Settings..." next to "Network Settings"',
        'Select "Manual proxy configuration"',
        'Set HTTP Proxy to: 127.0.0.1',
        'Set Port to: 8080',
        'Check "Use this proxy server for all protocols"',
        'Click "OK" to save settings'
      ]
    },
    {
      step: 3,
      title: 'Install mitmproxy Certificate',
      description: 'Add mitmproxy CA certificate to Firefox',
      details: [
        'Start mitmproxy: mitmproxy --host',
        'In Firefox, navigate to: http://mitm.it',
        'Click "Get mitmproxy-ca-cert.pem" for Firefox',
        'Download the certificate file',
        'Go to Firefox Settings > Privacy & Security > Certificates',
        'Click "View Certificates..."',
        'Go to "Authorities" tab and click "Import..."',
        'Select the downloaded certificate file',
        'Check "Trust this CA to identify websites"',
        'Click "OK" and restart Firefox'
      ]
    }
  ]

  const troubleshooting = [
    {
      issue: 'Certificate not trusted',
      solution: 'Make sure to check "Trust this CA to identify websites" when importing the certificate'
    },
    {
      issue: 'HTTPS sites not loading',
      solution: 'Verify the certificate is properly installed and Firefox is restarted'
    },
    {
      issue: 'Proxy connection failed',
      solution: 'Ensure mitmproxy is running on port 8080 before configuring Firefox'
    },
    {
      issue: 'Certificate download fails',
      solution: 'Make sure mitmproxy is running and accessible at http://mitm.it'
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Firefox Configuration</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Configure Firefox to use mitmproxy and install the necessary certificates for HTTPS traffic
          </p>
        </motion.div>

        {/* Configuration Steps */}
        <div className="space-y-8 mb-12">
          {configSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl mb-8 border-l-4 border-yellow-500"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-3 text-yellow-400" />
            Important Notes
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start space-x-2">
              <Shield className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Always start mitmproxy before configuring Firefox proxy settings</span>
            </li>
            <li className="flex items-start space-x-2">
              <Settings className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Restart Firefox after installing the certificate to ensure it takes effect</span>
            </li>
            <li className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <span>Only use this setup for development and testing purposes</span>
            </li>
          </ul>
        </motion.div>

        {/* Troubleshooting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Troubleshooting</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">{item.issue}</h4>
                <p className="text-gray-300 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
