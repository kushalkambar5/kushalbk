import { motion } from 'framer-motion'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import DeploymentSection from './components/DeploymentSection'
import MetricsCard from './components/MetricsCard'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-obsidian min-h-screen grid-bg">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-obsidian/30 border-b border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono font-bold text-xl gradient-text">KB</div>
          <div className="hidden md:flex gap-8">
            {[
              { label: 'Work', href: '#work' },
              { label: 'Stack', href: '#stack' },
              { label: 'Metrics', href: '#metrics' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-400 hover:text-slate-100 transition font-mono text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Section */}
        <section id="stack" className="max-w-7xl mx-auto px-6 py-32">
          <TechStack />
        </section>

        {/* Deployment Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <DeploymentSection />
        </section>

        {/* Metrics Section */}
        <section id="metrics" className="max-w-7xl mx-auto px-6 py-32">
          <MetricsCard />
        </section>

        {/* Projects Section */}
        <section id="work" className="max-w-7xl mx-auto px-6 py-32">
          <Projects />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
