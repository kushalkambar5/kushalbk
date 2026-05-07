import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import React, { useRef } from 'react'
import ReactLenis from 'lenis/react'
import ScrollFloat from './ui/ScrollFloat'
import TradingCard from './ui/TradingCard'

const PROJECTS = [
  {
    title: 'HORYN AI',
    id: '137',
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
    title: 'GLOSUPCHAIN',
    id: '042',
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
    title: 'FUNDIFY',
    id: '088',
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
    title: 'MOVREC',
    id: '015',
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
      className="sticky top-0 flex items-center justify-center min-h-[80vh] py-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 40}px)`,
        }}
        className="w-full max-w-4xl relative origin-top"
      >
        <TradingCard 
          title={project.title}
          id={project.id}
          role={project.role}
          description={project.description}
          tech={project.tech}
          link={project.link}
          github={project.github}
        />
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

        <div ref={container} className="relative pb-[50vh]">
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


      </div>
    </ReactLenis>
  )
}
