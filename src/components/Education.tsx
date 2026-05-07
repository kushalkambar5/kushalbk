import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'
import ScrollFloat from './ui/ScrollFloat'

const EDUCATION = [
  {
    institution: 'National Institute of Technology Karnataka (NITK), Surathkal',
    degree: 'B.Tech in Mechanical Engineering',
    period: '2025 – 2029',
    location: 'Surathkal, Karnataka',
    score: 'CGPA: 7.98 / 10',
    details: [
      'Focusing on Robotics, AI in Manufacturing, and Computational Mechanics',
      'Actively involved in technical clubs and research projects',
      'Consistently maintaining strong academic performance while building production apps',
    ],
    color: 'from-blue-500 to-indigo-500',
  },
]

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="space-y-12">
      <div>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          containerClassName="mb-4"
          textClassName="font-mono text-4xl md:text-5xl font-bold text-slate-100"
        >
          Education
        </ScrollFloat>
        <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full" />
        <p className="text-slate-400 mt-4">
          Academic foundation and continuous learning journey
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-8"
      >
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            variants={itemVariants}
            className="glass-effect rounded-xl overflow-hidden group"
          >
            <div className={`h-2 bg-gradient-to-r ${edu.color}`} />
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-cyan-400 mb-2 font-mono text-sm">
                    <GraduationCap className="w-5 h-5" />
                    <span>University</span>
                  </div>
                  <h3 className="font-mono text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                    {edu.institution}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-slate-400 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <div className="glass-effect-subtle px-6 py-4 rounded-xl border border-slate-700/50 text-center md:min-w-[180px]">
                  <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-1">Current Score</div>
                  <div className="font-mono text-2xl font-bold text-slate-100">{edu.score.split(': ')[1]}</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-mono text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  {edu.degree}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {edu.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
