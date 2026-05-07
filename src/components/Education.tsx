import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, Trophy, Target, Zap } from 'lucide-react'
import ScrollFloat from './ui/ScrollFloat'
import Stack from './ui/Stack'
import ProfileCard from './ui/ProfileCard'
import TiltCard from './ui/TiltCard'
import kushalNitkId from '../assets/kushal_nitk_id.jpg'

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

  const achievementCards = [...ACADEMIC_ACHIEVEMENTS]
    .sort((a, b) => {
      const order = ["Mains", "IISER", "KCET", "Advanced"];
      const indexA = order.findIndex(o => a.title.includes(o));
      const indexB = order.findIndex(o => b.title.includes(o));
      return indexA - indexB;
    })
    .map((achievement, i) => {
      const id = (i + 1).toString().padStart(2, '0');
      let name = achievement.title.split(' ')[0].toUpperCase();
      if (achievement.title.includes('Mains')) name = "JEE MAINS";
      if (achievement.title.includes('Advanced')) name = "JEE ADV";
      if (achievement.title.includes('IISER')) name = "IISER";
      if (achievement.title.includes('KCET')) name = "KCET";

      return (
        <div key={name} className="w-full h-full">
          <ProfileCard
            name={name}
            role={achievement.value}
            image={achievement.logo}
            categories={[
              achievement.description.split(' ')[0],
              achievement.description.split(' ')[1] || "Exam",
              "AIR Rank",
              "2025"
            ]}
            mainTitle="rank*cert"
            subTitle="leistungskarte"
            id={id}
            variant="mini"
            themeColor={
              achievement.color.includes('purple') ? '#a855f7' : 
              achievement.color.includes('blue') ? '#3b82f6' : 
              achievement.color.includes('green') ? '#22c55e' : 
              '#eab308'
            }
          />
        </div>
      );
    });

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
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Education Info - Actual ID Card */}
        <div className="lg:col-span-2 flex justify-center items-start">
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center"
          >
            <TiltCard className="rounded-2xl shadow-2xl">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={kushalNitkId} 
                  alt="NITK ID Card" 
                  className="relative w-full max-w-[600px] rounded-2xl border border-slate-800/50"
                />
              </div>
            </TiltCard>
          </motion.div>
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

