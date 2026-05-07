import { motion } from 'framer-motion'
import RotatingText from './ui/RotatingText'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import VariableProximity from './VariableProximity'
import GhostCursor from './ui/GhostCursor'
import { useLenis } from 'lenis/react'

export default function Hero() {
  const containerRef = useRef(null)
  const lenis = useLenis()

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    lenis?.scrollTo('#Projects')
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Ghost Cursor Effect */}
      <GhostCursor
        color="#a855f7"
        brightness={1.2}
        edgeIntensity={0.2}
        trailLength={60}
        inertia={0.6}
        grainIntensity={0.03}
        bloomStrength={0.2}
        bloomRadius={1.2}
        bloomThreshold={0.05}
        fadeDelayMs={800}
        fadeDurationMs={1200}
        zIndex={0}
      />
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
            <VariableProximity
              label={'Kushal'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff='linear'
            />
          </h1>
        </motion.div>

        {/* Rotating text effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-24 md:h-32 flex items-center justify-center mb-8"
        >
          <div className="text-2xl md:text-4xl font-mono text-slate-300">
            <RotatingText
              texts={[
                'Full-Stack Developer',
                'AI Engineer | LangChain & LangGraph',
                'RAG Application Specialist',
                'MERN & FastAPI Expert',
                'MCP Developer',
                'Production-Ready Systems',
              ]}
              mainClassName="bg-[#a855f7] px-5 py-2 rounded-lg text-white font-bold justify-center overflow-hidden"
              staggerFrom={"last"}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>
        </motion.div>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 mb-4 max-w-3xl mx-auto"
        >
          Second-year B.Tech at NITK Surathkal | Engineering production-ready AI systems and scalable web applications.
        </motion.p>


        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap mb-16"
        >
          <a
            href="#Projects"
            onClick={handleScrollToProjects}
            className="glass-effect px-8 py-3 rounded-lg font-mono text-sm font-semibold hover:bg-slate-700/30 border border-slate-600 transition cursor-pointer"
          >
            View Projects
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

