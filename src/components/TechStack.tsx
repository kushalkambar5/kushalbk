import { motion } from 'framer-motion'
import ScrollFloat from './ui/ScrollFloat'
import ScrollVelocity from './ui/ScrollVelocity'
import { Pointer } from './ui/pointer'
import MagicBento from './ui/MagicBento'

const HeartCursor = () => (
  <motion.div
    animate={{
      scale: [0.8, 1, 0.8],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-pink-600"
    >
      <motion.path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  </motion.div>
);

const CircularCursor = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" className="fill-purple-500" />
    <circle cx="12" cy="12" r="5" className="fill-white" />
  </svg>
);

const CustomPointerCursor = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transform -scale-x-100 rotate-[30deg]"
  >
    <path
      d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.892.052l-3.013-4.52a.5.5 0 0 0-.416-.223H1.23a.5.5 0 0 1-.41-.787L13.565 2.23a.5.5 0 0 1 .517-.048z"
      fill="white"
      stroke="#3b82f6"
      strokeWidth="2"
    />
  </svg>
);

const TECH_CATEGORIES = [
  {
    name: 'Languages',
    cursor: <CircularCursor />,
    techs: [
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    name: 'Web & Backend',
    cursor: <HeartCursor />,
    techs: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'FastAPI', logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.svg' },
      { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    name: 'Databases',
    cursor: <CustomPointerCursor />,
    techs: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'QdrantDB', logo: 'https://qdrant.tech/img/qdrant-logo.svg' },
    ],
  },
  {
    name: 'GenAI & RAG',
    cursor: <HeartCursor />,
    techs: [
      { name: 'LangChain', logo: 'https://assets.zenml.io/webflow/64a817a2e7e2208272d1ce30/986b08b5/68adafb26944ec2a46778809_langchain.png' },
      { name: 'LangGraph', logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/langgraph-color.png' },
      { name: 'LangSmith', logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/langsmith-color.png' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    cursor: <CustomPointerCursor />,
    techs: [
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
  {
    name: 'Currently Learning',
    cursor: <CircularCursor />,
    techs: [
      { name: 'AI-ML', logo: 'https://static.vecteezy.com/system/resources/thumbnails/035/742/223/small/artificial-intelligent-icon-line-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg' },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="space-y-12" id="stack">
      <div className="flex flex-col items-center">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          containerClassName="mb-4 text-center"
          textClassName="font-mono text-4xl md:text-5xl font-bold text-slate-100"
        >
          Tech Stack
        </ScrollFloat>
        <div className="h-1 w-20 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full" />
      </div>

      <MagicBento
        cardData={TECH_CATEGORIES}
        enableTilt={true}
        enableStars={true}
        enableSpotlight={true}
        glowColor="132, 0, 255"
        renderCard={(category, index, { cardProps, ParticleWrapper }) => (
          <Pointer key={category.name} pointer={category.cursor} className="rounded-xl overflow-hidden group">
            <ParticleWrapper>
              <div 
                className="relative text-center z-10 p-4 rounded-lg w-full bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png')] bg-cover bg-black h-full flex flex-col items-center"
                style={{
                  ...cardProps.style,
                  backgroundColor: 'transparent' // Let the background image and ParticleCard handle background
                }}
              >
                <div className="flex flex-col items-center mb-4">
                  <h1 className="text-2xl font-semibold tracking-tight text-white mt-0">
                    {category.name}
                  </h1>
                </div>
                
                <div className="grid grid-cols-3 gap-6 w-full mt-2">
                  {category.techs.map((tech: any) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2 group/tech">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-150 z-20">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback for missing logos
                            e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                          }}
                        />
                      </div>
                      <span className="text-[10px] md:text-xs font-mono text-slate-500 group-hover/tech:text-slate-300 transition-colors truncate w-full text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ParticleWrapper>
          </Pointer>
        )}
      />

      {/* Tech Stack Scroll Velocity Animation */}
      <div className="pt-12 border-t border-slate-900/50 overflow-hidden relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen">
        <ScrollVelocity
          texts={[
            <div className="flex gap-16 items-center px-4 pr-16">
              {TECH_CATEGORIES.flatMap(cat => cat.techs).map(tech => (
                <img 
                  key={tech.name} 
                  src={tech.logo} 
                  alt={tech.name} 
                  title={tech.name}
                  className="w-16 h-16 object-contain transition-all duration-300 transform hover:scale-125" 
                />
              ))}
            </div>
          ]}
          velocity={50}
          numCopies={8}
          className="py-4"
        />
      </div>
    </div>
  )
}
