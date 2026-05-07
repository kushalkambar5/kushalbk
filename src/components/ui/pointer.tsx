"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export function Pointer({
  children,
  className,
  pointer,
}: {
  children?: React.ReactNode;
  className?: string;
  pointer?: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      ref={ref}
      className={`relative cursor-none ${className || ""}`}
    >
      {children}
      <AnimatePresence>
        {isInside && (
          <motion.div
            style={{
              x: mouseX,
              y: mouseY,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            className="pointer-events-none absolute top-0 left-0 z-[100] h-fit w-fit -translate-x-1/2 -translate-y-1/2"
          >
            {pointer || (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white"
              >
                <path
                  d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.892.052l-3.013-4.52a.5.5 0 0 0-.416-.223H1.23a.5.5 0 0 1-.41-.787L13.565 2.23a.5.5 0 0 1 .517-.048z"
                  fill="currentColor"
                />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
