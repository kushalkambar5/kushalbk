import { motion } from 'framer-motion'
import { Cloud, Database, Box, GitBranch, Server } from 'lucide-react'

const DEPLOYMENT_ITEMS = [
  {
    title: 'AWS Ecosystem',
    icon: Cloud,
    items: ['EC2 Instances', 'S3 Storage', 'Beanstalk'],
    color: 'text-orange-400',
  },
  {
    title: 'Containerization',
    icon: Box,
    items: ['Docker', 'Docker Compose', 'Registry'],
    color: 'text-blue-400',
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MongoDB', 'Schema Design', 'Optimization'],
    color: 'text-green-400',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    items: ['Git Workflow', 'CI/CD Pipelines', 'Deployment'],
    color: 'text-purple-400',
  },
]

const CLOUD_PROVIDERS = [
  { name: 'AWS', icon: '☁️', available: true },
  { name: 'Google Cloud', icon: '🔵', available: true },
  { name: 'Azure', icon: '🔷', available: true },
]

export default function DeploymentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Deployment & Architecture
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full" />
        <p className="text-slate-400 mt-4">
          Production-ready infrastructure with scalable, containerized systems
        </p>
      </motion.div>

      {/* System Architecture Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {DEPLOYMENT_ITEMS.map((item) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="glass-effect rounded-xl p-8 hover:shadow-glass-dark transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`${item.color} p-3 rounded-lg bg-slate-800/50`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg text-slate-100 mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.items.map((subItem, idx) => (
                      <motion.li
                        key={subItem}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="text-slate-300 text-sm font-mono flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-slate-500" />
                        {subItem}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Cloud Platforms */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="font-mono text-2xl font-bold text-slate-100 mb-6">
          Cloud Platforms
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLOUD_PROVIDERS.map((provider) => (
            <motion.div
              key={provider.name}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-8 text-center hover:shadow-glass-dark transition-all duration-300"
            >
              <div className="text-5xl mb-4">{provider.icon}</div>
              <h4 className="font-mono font-bold text-slate-100 mb-2">
                {provider.name}
              </h4>
              <p className="text-slate-400 text-sm font-mono">
                {provider.available && '✓ Deployment Ready'}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Server className="text-cyan-400" />
          <h3 className="font-mono text-2xl font-bold text-slate-100">
            Architecture Expertise
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Scalable backend architecture patterns',
            'Microservices & containerized deployments',
            'Database optimization & indexing',
            'Load balancing & auto-scaling',
            'CI/CD pipeline automation',
            'Security best practices & auth systems',
          ].map((feature) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-slate-400" />
              <span className="text-slate-300 font-mono">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
