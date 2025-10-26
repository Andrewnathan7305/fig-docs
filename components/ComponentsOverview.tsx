'use client'

import { motion } from 'framer-motion'

export default function ComponentsOverview() {
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
            Project Components
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detailed overview of each component in the FIG ecosystem
          </p>
        </motion.div>
      </div>
    </section>
  )
}
