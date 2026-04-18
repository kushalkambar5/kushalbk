import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/kushalkambar5',
    handle: 'kushalkambar5',
    color: 'hover:text-slate-100',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/kushalbk',
    handle: 'kushalbk',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:kushalkambar07@gmail.com',
    handle: 'kushalkambar07@gmail.com',
    color: 'hover:text-orange-400',
  },
  {
    name: 'CodeForces',
    icon: Code2,
    url: '#',
    handle: 'kushalbkambar',
    color: 'hover:text-red-400',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    url: 'https://leetcode.com/Kushalk_05',
    handle: 'Kushalk_05',
    color: 'hover:text-yellow-400',
  },
]

const QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#work' },
  { label: 'Achievements', href: '#metrics' },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <footer className="border-t border-slate-800/50 bg-obsidian/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="font-mono font-bold text-3xl gradient-text mb-4">
                KB
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Full-stack developer & AI engineer crafting production-grade systems. Currently at NITK Surathkal.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h4 className="font-mono font-bold text-slate-100 mb-4">Navigation</h4>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-slate-100 transition text-sm font-mono flex items-center gap-2 group"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition">→</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Info */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h4 className="font-mono font-bold text-slate-100 mb-4">Contact</h4>
              <div className="space-y-3">
                <p className="text-slate-400 text-sm font-mono">
                  📍 NITK Surathkal, Karnataka, India
                </p>
                <p className="text-slate-400 text-sm font-mono">
                  📧 kushalkambar07@gmail.com
                </p>
                <p className="text-slate-400 text-sm font-mono">
                  📱 +91-9035035884
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="py-8 border-t border-slate-800/50">
            <h4 className="font-mono font-bold text-slate-100 mb-6">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`glass-effect p-4 rounded-lg transition group ${social.color}`}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-slate-100 transition" />
                  </motion.a>
                )
              })}
            </div>

            {/* Social Handles */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect-subtle p-3 rounded-lg hover:bg-slate-700/30 transition text-center font-mono text-slate-300"
                >
                  <div className="font-bold text-slate-100">{social.name}</div>
                  <div className="text-slate-500 mt-1 truncate">{social.handle}</div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="text-slate-500 text-xs font-mono">
              © 2026 Kushal Basavaraj Kambar. All rights reserved.
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1BwFsC2thamqpx_0g2fP5_7Z2HANNaJoY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-obsidian font-mono font-semibold rounded-lg hover:bg-slate-200 transition"
            >
              See Resume
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="pt-6 text-center text-slate-500 text-xs font-mono"
          >
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for full-time roles & collaborations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
