import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'ImposterCode Platform',
    role: 'Frontend Developer',
    date: 'DEC 2025',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    description:
      'Developed responsive frontend components for a student tech club platform. Integrated APIs, implemented reusable UI components, and improved UI consistency.',
    achievements: [
      'Built interactive UI with React & TailwindCSS',
      'Collaborated with student team on real-world applications',
      'Followed Git/GitHub workflow for version control',
      'Optimized performance for desktop & mobile',
    ],
    link: 'https://impostercode.vercel.app/',
    github: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'NITK Club Website',
    role: 'Full-Stack Developer',
    date: 'NOV 2025',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    description:
      'Complete website for a student club with interactive UI and clean layout. Implemented events, announcements, gallery, and member highlights.',
    achievements: [
      'Responsive design for all screen sizes',
      'Events section with real-time updates',
      'Gallery and member showcase pages',
      'Optimized performance metrics',
    ],
    link: 'https://polaris-work.vercel.app/',
    github: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'DevOfDev Platform',
    role: 'MERN Stack Developer',
    date: 'JAN 2026',
    tech: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'Developer-focused platform for learning, collaboration, and project sharing. Implemented user authentication, protected routes, and structured backend APIs.',
    achievements: [
      'User authentication with JWT & protected routes',
      'MongoDB schema design & optimization',
      'RESTful API architecture',
      'Secure data storage & handling',
    ],
    link: '#',
    github: '#',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function Projects() {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full" />
        <p className="text-slate-400 mt-4">
          Real-world applications built with production-grade code
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-8"
      >
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="glass-effect rounded-xl overflow-hidden hover:shadow-glass-dark transition-all duration-300 group"
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
        ))}
      </motion.div>

      {/* Experience Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-effect-subtle rounded-xl p-8 text-center"
      >
        <p className="text-slate-400 font-mono">
          Currently building more projects with RAG applications and GenAI integration
        </p>
      </motion.div>
    </div>
  )
}
