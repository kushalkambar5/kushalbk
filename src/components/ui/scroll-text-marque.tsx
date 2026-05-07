import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

interface ScrollBaseAnimationProps {
  children: React.ReactNode;
  baseVelocity: number;
  clasname?: string;
  delay?: number;
}

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
}

export default function ScrollBaseAnimation({
  children,
  baseVelocity = 100,
  clasname,
}: ScrollBaseAnimationProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full py-4">
      <motion.div 
        className={`flex whitespace-nowrap flex-nowrap text-6xl md:text-9xl uppercase italic font-black text-slate-800/40 ${clasname}`} 
        style={{ x }}
      >
        <span className="block pr-10">{children} </span>
        <span className="block pr-10">{children} </span>
        <span className="block pr-10">{children} </span>
        <span className="block pr-10">{children} </span>
      </motion.div>
    </div>
  );
}

