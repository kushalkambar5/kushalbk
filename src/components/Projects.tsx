import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import React, { useRef } from 'react'
import ReactLenis from 'lenis/react'
import ScrollFloat from './ui/ScrollFloat'

const PROJECTS = [
  {
    title: 'Horyn AI',
    role: 'Full-Stack & AI Developer',
    date: '2025 - Present',
    tech: ['MERN', 'FastAPI', 'LangChain', 'LangGraph', 'PostgreSQL', 'RAG', 'Mem0'],
    description:
      'AI-Powered Adaptive Learning Platform for JEE prep with AI-driven analytics, adaptive practice sessions, and personalized study recommendations.',
    achievements: [
      'Implemented session analytics & concept tracking',
      'Built AI study assistant using Gemini APIs',
      'Designed PostgreSQL schemas for student data',
      'Personalized chatbot for preparation discussion',
    ],
    link: '#',
    github: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Glosupchain',
    role: 'Backend & AI Architect',
    date: '2025',
    tech: ['Next.js', 'Node.js', 'FastAPI', 'LangChain', 'LangGraph', 'PostgreSQL', 'Drizzle'],
    description:
      'AI-Powered Global Supply Chain Optimization for maritime logistics, using AIS telemetry and weather data for optimal routing.',
    achievements: [
      'LangGraph-based AI agents for dynamic rerouting',
      'Integrated OSRM, TomTom & OpenWeather APIs',
      'Architected multi-service backend with FastAPI',
      'Real-time fleet dashboards with Next.js',
    ],
    link: '#',
    github: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Fundify',
    role: 'Full-Stack Developer',
    date: '2024 - 2025',
    tech: ['React', 'Express.js', 'FastAPI', 'MongoDB', 'Gemini', 'ChromaDB'],
    description:
      'AI-Based Personal Finance Intelligence Platform with health scoring, stress testing, and portfolio analysis.',
    achievements: [
      'RAG-based financial advisory using ChromaDB',
      'FastAPI microservice for analytics processing',
      'JWT authentication & real-time dashboards',
      'Portfolio analysis across multiple accounts',
    ],
    link: '#',
    github: '#',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Movie Recommendation',
    role: 'AI Developer',
    date: '2025',
    tech: ['Python', 'LangChain', 'Qdrant DB', 'LLM'],
    description:
      'RAG-Based Semantic Search engine for personalized movie recommendations using natural language queries.',
    achievements: [
      'Implemented vector embeddings & similarity search',
      'LLM-generated personalized explanations',
      'Semantic retrieval from large movie datasets',
      'Natural language query processing',
    ],
    link: '#',
    github: '#',
    color: 'from-orange-500 to-red-500',
  },
]

const StickyProjectCard = ({
  project,
  i,
  progress,
  range,
  targetScale,
}: {
  project: typeof PROJECTS[0];
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center min-h-[70vh] py-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(8vh + ${i * 40}px)`,
        }}
        className="glass-effect rounded-2xl overflow-hidden hover:shadow-glass-dark transition-all duration-300 group w-full max-w-4xl relative origin-top"
      >
        {/* Header with gradient */}
        <div className={`h-2 bg-gradient-to-r ${project.color}`} />

        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="font-mono text-2xl md:text-3xl font-bold text-slate-100 mb-2">
                {project.title}
              </h3>
              <div className="flex gap-4 text-sm text-slate-400 font-mono flex-wrap">
                <span>• {project.role}</span>
                <span>• {project.date}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                <ExternalLink className="w-5 h-5 text-slate-300" />
              </motion.a>
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                <Github className="w-5 h-5 text-slate-300" />
              </motion.a>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-6 pb-6 border-b border-slate-700/50">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-xs font-mono text-slate-300 hover:border-slate-500 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-mono text-sm font-bold text-slate-100 mb-3">
              Key Achievements
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.achievements.map((achievement) => (
                <motion.li
                  key={achievement}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="w-4 h-4 rounded-full border border-slate-500 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div>
        <div className="mb-6 flex flex-col items-center">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="mb-4 text-center"
            textClassName="font-mono text-4xl md:text-5xl font-bold text-slate-100"
          >
            Featured Projects
          </ScrollFloat>
          <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full" />
        </div>

        <div ref={container} className="relative">
          {PROJECTS.map((project, i) => {
            const targetScale = Math.max(0.85, 1 - (PROJECTS.length - i - 1) * 0.05);
            return (
              <StickyProjectCard
                key={project.title}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * (1 / PROJECTS.length), 1]}
                targetScale={targetScale}
              />
            )
          })}
        </div>

        {/* Experience Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect-subtle rounded-xl p-8 text-center mt-20"
        >
          <p className="text-slate-400 font-mono">
            Currently building more projects with RAG applications and GenAI integration
          </p>
        </motion.div>
      </div>
    </ReactLenis>
  )
}
