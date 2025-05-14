import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
export function useInViewCounter() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);
  return [ref, controls];
}