import { motion } from 'framer-motion'
import { useState } from 'react'

const TECH_CATEGORIES = [
  {
    name: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    color: 'from-purple-500 to-pink-500',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'AI & ML',
    color: 'from-orange-500 to-red-500',
    items: ['LangChain', 'LangGraph', 'RAG Applications', 'Prompt Engineering'],
  },
  {
    name: 'Infrastructure',
    color: 'from-green-500 to-emerald-500',
    items: ['AWS EC2/S3', 'Docker', 'Beanstalk', 'CI/CD'],
  },
  {
    name: 'Tools & Libraries',
    color: 'from-indigo-500 to-purple-500',
    items: ['Zod', 'Redux', 'Winston', 'Rate Limiting'],
  },
  {
    name: 'Platforms',
    color: 'from-yellow-500 to-amber-500',
    items: ['Google Cloud', 'Azure', 'AWS', 'Docker Registry'],
  },
]

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Tech Stack
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full" />
        <p className="text-slate-400 mt-4">
          Production-grade technologies for building scalable systems
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {TECH_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.name}
            variants={cardVariants}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative"
          >
            <div className="glass-effect rounded-xl p-6 overflow-hidden h-full transition-all duration-300"
              style={{
                boxShadow: hoveredIndex === idx
                  ? '0 20px 40px rgba(0, 0, 0, 0.5)'
                  : undefined,
              }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${category.color})`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <h3 className="font-mono font-bold text-lg text-slate-100">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: itemIdx * 0.05,
                        duration: 0.4,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-slate-400" />
                      <span className="text-slate-300 text-sm font-mono">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
