import { motion } from 'framer-motion';
import { useInViewCounter } from '../hooks/useInViewCounter';

const stats = [
  { label: 'Companies Formed', value: 320 },
  { label: 'Placements Completed', value: 580 },
  { label: 'Advisory Projects', value: 150 },
  { label: 'Satisfied Clients', value: 420 }
];

export default function StatsSection() {
  const [ref, controls] = useInViewCounter();
  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="p-4"
            initial="hidden"
            animate={controls}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } } }}
          >
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}