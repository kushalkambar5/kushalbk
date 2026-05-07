import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Hero from './components/Hero'
import TechStack from './components/TechStack'

import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import ScrollBaseAnimation from './components/ui/scroll-text-marque'
import HorizontalScroll from './components/HorizontalScroll'
import { ReactLenis, useLenis } from 'lenis/react'

export default function App() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Hide navbar when scrolling down past a threshold, show when scrolling up
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    // Check if we are at the top of the page
    setIsAtTop(latest < 50);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href);
    }
  };

  return (
    <ReactLenis root>
      <div className="bg-obsidian min-h-screen grid-bg relative">
        {/* Navigation Bar */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: isVisible ? 0 : -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 w-full z-50 transition-all duration-500 border-b pointer-events-none ${
            isAtTop 
              ? "bg-transparent border-transparent py-6" 
              : "bg-obsidian/80 backdrop-blur-md border-slate-800/50 py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center pointer-events-auto">
            <div className="font-mono font-bold text-xl gradient-text">KB</div>
            <div className="hidden md:flex gap-8">
              {[
                { label: 'Projects', href: '#Projects' },
                { label: 'Stack', href: '#stack' },
                { label: 'Education', href: '#education' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-slate-400 hover:text-slate-100 transition font-mono text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>

        <main className="relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Tech Stack Section */}
          <section id="stack" className="max-w-7xl mx-auto px-6 py-32">
            <TechStack />
          </section>

          {/* Projects Section */}
          <section id="Projects" className="max-w-7xl mx-auto px-6 py-32 pb-0">
            <Projects />
          </section>

          {/* Marquee Section */}
          <div className='h-[500px] flex flex-col justify-center overflow-hidden'>
            <ScrollBaseAnimation
              baseVelocity={-3}
              clasname='font-bold tracking-[-0.07em] leading-[90%]'
            >
              Kushal B K - AI Engineer
            </ScrollBaseAnimation>
            <ScrollBaseAnimation
              baseVelocity={3}
              clasname='font-bold tracking-[-0.07em] leading-[90%]'
            >
              Student at NITK Surathkal
            </ScrollBaseAnimation>
          </div>


          {/* Education Section */}
          <section id="education" className="max-w-7xl mx-auto px-6 pb-32 pt-0">
            <Education />
          </section>

          {/* Horizontal Scroll Animation */}
          <HorizontalScroll />

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ReactLenis>
  )
}
