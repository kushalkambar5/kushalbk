import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HorizontalScroll(): JSX.Element {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section className="relative">
      <section ref={targetRef} className='h-[500vh] relative'>
        <div className='sticky top-0 h-screen overflow-hidden'>
          <motion.ul style={{ x }} className='flex w-[500vw] h-full'>
            <li className='h-screen w-screen bg-red-400 flex flex-col justify-center overflow-hidden items-center shrink-0 relative'>
              <HeaderShift progress={scrollYProgress} range={[0, 0.2]}>
                CURIOSITY
              </HeaderShift>
            </li>
            <li className='h-screen w-screen bg-blue-400 flex flex-col justify-center overflow-hidden items-center shrink-0 relative'>
              <HeaderShift progress={scrollYProgress} range={[0.2, 0.4]}>
                PRECISION
              </HeaderShift>
            </li>
            <li className='h-screen w-screen bg-orange-400 flex flex-col justify-center overflow-hidden items-center shrink-0 relative'>
              <HeaderShift progress={scrollYProgress} range={[0.4, 0.6]}>
                EXECUTION
              </HeaderShift>
            </li>
            <li className='h-screen w-screen bg-yellow-400 flex flex-col justify-center overflow-hidden items-center shrink-0 relative'>
              <HeaderShift progress={scrollYProgress} range={[0.6, 0.8]}>
                IMPACT
              </HeaderShift>
            </li>
            <li className='h-screen w-screen bg-green-400 flex flex-col justify-center overflow-hidden items-center shrink-0 relative'>
              <HeaderShift progress={scrollYProgress} range={[0.8, 1.0]}>
                VISION
              </HeaderShift>
            </li>
          </motion.ul>
        </div>
      </section>
    </section>
  );
}

function HeaderShift({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) {
  const x = useTransform(progress, range, [400, -400]);
  
  return (
    <motion.h2 
      style={{ x }}
      className='text-[20vw] font-semibold relative bottom-5 inline-block text-black z-0 pointer-events-none'
    >
      {children}
    </motion.h2>
  );
}
