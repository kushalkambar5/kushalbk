import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './TradingCard.css';

interface TradingCardProps {
  title: string;
  id: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  className?: string;
}

const TradingCard: React.FC<TradingCardProps> = ({
  title,
  id,
  role,
  description,
  tech,
  link = "#",
  github = "#",
  className = ""
}) => {
  return (
    <div className={`trading-card-container ${className}`}>
      <div className="trading-card-inner">
        {/* Top Right ID */}
        <div className="trading-card-id">{id}</div>

        {/* Starburst */}
        <div className="trading-card-starburst" />

        {/* Main Title */}
        <h2 className="trading-card-title">{title}</h2>

        {/* Top Center Tech List */}
        <div className="trading-card-tech-list">
          {tech.slice(0, 5).map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </div>

        {/* Bottom Left Title */}
        <div className="trading-card-footer-text">{title}</div>

        {/* Bottom Center Description */}
        <div className="trading-card-description-box">
          <p>{description}</p>
        </div>

        {/* Links */}
        <div className="trading-card-links">
          <motion.a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="trading-card-link-item"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="trading-card-link-item"
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default TradingCard;
