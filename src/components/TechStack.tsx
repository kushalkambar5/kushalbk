import { motion } from 'framer-motion'
import { Spotlight, SpotLightItem } from './ui/spotlight'
import ScrollFloat from './ui/ScrollFloat'
import ScrollVelocity from './ui/ScrollVelocity'

const TECH_CATEGORIES = [
  {
    name: 'Languages',
    techs: [
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    name: 'Web & Backend',
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
    techs: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'QdrantDB', logo: 'https://qdrant.tech/img/qdrant-logo.svg' },
    ],
  },
  {
    name: 'GenAI & RAG',
    techs: [
      { name: 'LangChain', logo: 'https://assets.zenml.io/webflow/64a817a2e7e2208272d1ce30/986b08b5/68adafb26944ec2a46778809_langchain.png' },
      { name: 'LangGraph', logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/langgraph-color.png' },
      { name: 'LangSmith', logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/langsmith-color.png' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    techs: [
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
  {
    name: 'Currently Learning',
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TECH_CATEGORIES.map((category) => (
          <div key={category.name} className="relative bg-black rounded-xl overflow-hidden border border-slate-900 group">
            <Spotlight className="w-full h-full" ProximitySpotlight={true}>
              <SpotLightItem>
                <div className="relative text-center z-10 p-8 rounded-lg w-full bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/sub-grid_hnhyvi.png')] bg-cover bg-black h-full flex flex-col items-center">
                  <div className="flex flex-col items-center mb-8">
                    <h1 className="text-2xl font-semibold tracking-tight text-white mt-4">
                      {category.name}
                    </h1>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 w-full mt-auto">
                    {category.techs.map((tech) => (
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
              </SpotLightItem>
            </Spotlight>
          </div>
        ))}
      </div>

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
