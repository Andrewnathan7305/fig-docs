'use client'

import { motion } from 'framer-motion'
import { Terminal, Download, CheckCircle } from 'lucide-react'

export default function MitmproxySetup() {
  const installationMethods = [
    {
      platform: 'Windows',
      icon: '🪟',
      commands: [
        'pip install mitmproxy',
        '# Or download from mitmproxy.org',
        'mitmproxy --version'
      ],
      description: 'Install via pip or download the installer'
    },
    {
      platform: 'macOS',
      icon: '🍎',
      commands: [
        'brew install mitmproxy',
        '# Or via pip',
        'pip install mitmproxy'
      ],
      description: 'Use Homebrew or pip for installation'
    },
    {
      platform: 'Linux',
      icon: '🐧',
      commands: [
        'pip install mitmproxy',
        '# Or via package manager',
        'sudo apt install mitmproxy'
      ],
      description: 'Install via pip or system package manager'
    }
  ]

  const verificationSteps = [
    'Check mitmproxy version',
    'Verify installation',
    'Test basic functionality'
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
          <h2 className="text-4xl font-bold text-white mb-4">mitmproxy Installation</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Install mitmproxy on your system to enable HTTP traffic interception
          </p>
        </motion.div>

        {/* Installation Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {installationMethods.map((method, index) => (
            <motion.div
              key={method.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{method.icon}</div>
                <h3 className="text-xl font-semibold text-white">{method.platform}</h3>
                <p className="text-gray-300 text-sm">{method.description}</p>
              </div>
              
              <div className="code-block">
                {method.commands.map((command, cmdIndex) => (
                  <div key={cmdIndex} className="mb-1">
                    <code className="text-cyan-400 font-mono text-sm">
                      {command}
                    </code>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 mr-3 text-green-400" />
            Verification Steps
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Check Installation</h4>
              <div className="code-block">
                <code className="text-cyan-400 font-mono text-sm">
                  mitmproxy --version
                </code>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                This should display the mitmproxy version number
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Test Basic Functionality</h4>
              <div className="code-block">
                <code className="text-cyan-400 font-mono text-sm">
                  mitmproxy --help
                </code>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                This should show available commands and options
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl border-l-4 border-cyan-500"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Terminal className="h-6 w-6 mr-3 text-cyan-400" />
            Next Steps
          </h3>
          <p className="text-gray-300 mb-4">
            Once mitmproxy is installed, you'll need to:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Configure Firefox to use mitmproxy as a proxy
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Install mitmproxy certificates in Firefox
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Set up the FIG application scripts
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
