import { motion } from 'framer-motion'
import { Trophy, Target, Zap } from 'lucide-react'

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: 'JEE Mains 2025',
    value: '99.121%ile',
    description: 'Top percentile scorer',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Target,
    title: 'JEE Advanced 2025',
    value: 'AIR 17803',
    description: 'All India Rank',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'KCET 2025',
    value: 'AIR 3715',
    description: 'Karnataka entrance',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'IISER 2025',
    value: 'AIR 2053',
    description: 'Aptitude test rank',
    color: 'from-green-500 to-emerald-500',
  },
]

const METRICS = [
  { label: 'Projects Built', value: '5+', icon: '📊' },
  { label: 'Tech Stack', value: '15+', icon: '⚙️' },
  { label: 'Production Deployments', value: '3+', icon: '🚀' },
  { label: 'Years of Experience', value: '1+', icon: '⏱️' },
]

export default function MetricsCard() {
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
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
          Competitive Achievements
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full" />
        <p className="text-slate-400 mt-4">
          Proven excellence in competitive exams and technical assessments
        </p>
      </motion.div>

      {/* Achievement Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {ACHIEVEMENTS.map((achievement) => {
          const IconComponent = achievement.icon
          return (
            <motion.div
              key={achievement.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              }}
              className="glass-effect rounded-xl p-8 relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${achievement.color}`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl opacity-10">✓</div>
                </div>

                <h3 className="font-mono font-bold text-lg text-slate-100 mb-2">
                  {achievement.title}
                </h3>

                <div className="mb-4">
                  <div className="text-4xl font-mono font-bold gradient-text">
                    {achievement.value}
                  </div>
                  <p className="text-slate-400 text-sm mt-2">
                    {achievement.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs text-slate-500 font-mono">
                    Academic Excellence
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Quick Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-8 md:p-12"
      >
        <h3 className="font-mono text-2xl font-bold text-slate-100 mb-8">
          By the Numbers
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-3xl md:text-4xl font-mono font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <p className="text-slate-400 text-xs md:text-sm font-mono">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mindset Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-8 md:p-12 border-l-4 border-slate-400"
      >
        <h3 className="font-mono text-2xl font-bold text-slate-100 mb-4">
          Engineering Philosophy
        </h3>
        <p className="text-slate-300 leading-relaxed font-mono text-sm md:text-base">
          I work like a <span className="text-slate-100 font-bold">junior full-stack engineer</span>, not a student
          experimenting with tutorials. I've built and deployed real MERN-stack applications with clean backend
          architecture, authentication, REST APIs, and AWS deployment. I understand how systems behave in production,
          not just how they look in demos. I pick things up fast, take ownership, and don't need constant
          hand-holding—if something breaks, I debug it end-to-end. I add value quickly while continuing to scale my
          technical depth.
        </p>
      </motion.div>
    </div>
  )
}
