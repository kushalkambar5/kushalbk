import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, Trophy, Target, Zap } from 'lucide-react'
import ScrollFloat from './ui/ScrollFloat'
import Stack from './ui/Stack'

const EDUCATION = [
  {
    institution: 'National Institute of Technology Karnataka (NITK), Surathkal',
    degree: 'B.Tech in Mechanical Engineering',
    period: '2025 – 2029',
    location: 'Surathkal, Karnataka',
    score: 'CGPA: 7.98 / 10',
    details: [
      'Focusing on GenAI and AgenticAI',
      'Actively involved in technical clubs and projects',
      'Maintaining good academic performance',
    ],
    color: 'from-blue-500 to-indigo-500',
  },
]

const ACADEMIC_ACHIEVEMENTS = [
  {
    icon: Target,
    title: 'JEE Advanced 2025',
    value: 'AIR 17803',
    description: 'IIT Entrance Rank',
    color: 'from-purple-500 to-pink-500',
    logo: 'https://eastindiastory.com/wp-content/uploads/2025/04/JEE-Art.jpg'
  },
  {
    icon: Zap,
    title: 'KCET 2025',
    value: 'AIR 3715',
    description: 'Karnataka State Rank',
    color: 'from-blue-500 to-cyan-500',
    logo: 'https://education.sakshi.com/sites/default/files/images/2024/04/18/kcet-1713428641.jpg'
  },
  {
    icon: Target,
    title: 'IISER 2025',
    value: 'AIR 2053',
    description: 'Aptitude Test Rank',
    color: 'from-green-500 to-emerald-500',
    logo: 'https://www.iisertvm.ac.in/assets/images/iiser_logo.png'
  },
  {
    icon: Trophy,
    title: 'JEE Mains 2025',
    value: '99.121%ile',
    description: 'All India Rank Scorer',
    color: 'from-yellow-500 to-orange-500',
    logo: 'https://epaper.vidyarthimitra.org/media/2025-01/jee-main-exam1.png'
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

  const achievementCards = ACADEMIC_ACHIEVEMENTS.map((achievement, i) => (
    <div
      key={i}
      className={`w-full h-full glass-effect flex flex-col items-center justify-center p-6 relative overflow-hidden border-t-4`}
      style={{
        background: 'rgba(15, 12, 22, 0.98)',
        borderTop: '4px solid',
        borderImage: `linear-gradient(to right, ${achievement.color.includes('yellow') ? '#eab308, #f97316' : achievement.color.includes('purple') ? '#a855f7, #ec4899' : achievement.color.includes('green') ? '#22c55e, #10b981' : '#3b82f6, #06b6d4'}) 1`
      }}
    >
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img src={achievement.logo} alt="" className="w-4/5 grayscale" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        {/* Main Centered Logo */}
        <div className="w-20 h-20 mb-4 rounded-xl overflow-hidden bg-white/5 p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
          <img 
            src={achievement.logo} 
            alt={achievement.title} 
            className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <div className={`p-1 rounded-md bg-slate-800/50`}>
            <achievement.icon className="w-3 h-3 text-slate-100" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">2025</span>
        </div>
        
        <h4 className="text-sm font-mono font-bold text-slate-100 mb-1">{achievement.title}</h4>
        <div className="text-2xl font-mono font-bold gradient-text mb-1 leading-none">{achievement.value}</div>
        <p className="text-[10px] text-slate-400 font-mono max-w-[80%] mx-auto">{achievement.description}</p>
      </div>
    </div>
  ));

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
          Academic foundation and competitive achievements
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Education Info */}
        <div className="lg:col-span-2 space-y-8">
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              className="glass-effect rounded-xl overflow-hidden group h-full"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`} />
              <div className="p-8 md:p-10">
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

                  <div className="glass-effect-subtle px-6 py-4 rounded-xl border border-slate-700/50 text-center md:min-w-[150px]">
                    <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-1">Current Score</div>
                    <div className="font-mono text-2xl font-bold text-slate-100">{edu.score.split(': ')[1]}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-lg font-bold text-slate-100 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    {edu.degree}
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
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
        </div>

        {/* Academic Achievements Stack */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <div className="flex items-center gap-3 text-yellow-500 mb-4 font-mono text-sm pl-2">
            <Trophy className="w-5 h-5" />
            <span>Competitive Ranks</span>
          </div>
          <div className="flex-1 min-h-[300px] relative">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cards={achievementCards}
              autoplay={true}
              autoplayDelay={4000}
            />
          </div>
          <p className="text-center text-slate-500 font-mono text-[10px] mt-4 uppercase tracking-widest">
            Drag or click to cycle
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

