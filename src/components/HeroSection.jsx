import React from 'react';
import { motion, useCycle } from 'framer-motion';
import heroBg1 from '../assets/jiexHero.png';
import heroBg2 from '../assets/jiexHero2.avif';
import { Button } from './shared/Button';

// Variants for crossfade
const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 0.4 },
  exit: { opacity: 0 }
};

export default function HeroSection() {
  // Cycle between two images
  const [current, cycle] = useCycle(
    { src: heroBg1, key: 'bg1' },
    { src: heroBg2, key: 'bg2' }
  );

  React.useEffect(() => {
    const interval = setInterval(() => cycle(), 8000);
    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <motion.img
        key={current.key}
        src={current.src}
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-start h-full px-8 lg:px-32 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold leading-snug">
          Jiex Consulting<br />Empowering Your Business Growth
        </h1>
        <p className="mt-4 max-w-xl text-lg">
          Expert solutions in business consultation, recruitment, company formation, and startup advisory.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Button variant="primary">Our Services</Button>
          <Button variant="secondary">About Jiex</Button>
        </div>
      </motion.div>
    </section>
  );
}