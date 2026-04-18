import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-slate-700 to-obsidian rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-slate-800 to-obsidian rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-mono text-6xl md:text-7xl font-bold mb-6 text-slate-100">
            Kushal
          </h1>
        </motion.div>

        {/* Typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-24 md:h-32 flex items-center justify-center mb-8"
        >
          <div className="text-2xl md:text-4xl font-mono text-slate-300">
            <span className="gradient-text">
              <Typewriter
                words={[
                  'Full-Stack Developer',
                  'AI Engineer | LangChain & LangGraph',
                  'RAG Application Builder',
                  'AWS DevOps & Docker',
                  'Production-Ready Code',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 mb-4 max-w-3xl mx-auto"
        >
          B.Tech Student at NIT Karnataka Surathkal | Building scalable systems, not just demos
        </motion.p>

        {/* Achievement highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center gap-6 mb-12 text-sm md:text-base flex-wrap"
        >
          {[
            { label: 'JEE Mains', value: '99.121%ile' },
            { label: 'JEE Adv', value: 'AIR 17803' },
            { label: 'KCET', value: 'AIR 3715' },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-effect px-4 py-2 rounded-lg"
            >
              <div className="font-mono text-xs text-slate-400">{item.label}</div>
              <div className="font-mono font-bold text-slate-100">{item.value}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap mb-16"
        >
          <a
            href="#work"
            className="glass-effect px-8 py-3 rounded-lg font-mono text-sm font-semibold hover:bg-slate-700/30 border border-slate-600 transition"
          >
            View Work
          </a>
          <a
            href="https://github.com/kushalkambar5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-mono text-sm font-semibold bg-slate-100 text-obsidian hover:bg-slate-200 transition"
          >
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-slate-500" />
        </motion.div>
      </div>
    </section>
  )
}
