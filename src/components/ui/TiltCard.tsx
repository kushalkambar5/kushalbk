import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", glowColor = "rgba(255, 255, 255, 0.4)" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});
  const [transformStyle, setTransformStyle] = useState<string>('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const bounds = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    setTransformStyle(`
      perspective(1500px)
      scale3d(1.05, 1.05, 1.05)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance + 1) * 2}deg
      )
    `);
    
    setGlowStyle({
      backgroundImage: `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width/2}px
          ${center.y * 2 + bounds.height/2}px,
          ${glowColor},
          transparent
        )
      `
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
    setGlowStyle({});
  };

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ease-out cursor-pointer ${className}`}
      style={{ 
        transform: transformStyle,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
        style={{
          ...glowStyle,
          opacity: transformStyle ? 1 : 0
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
