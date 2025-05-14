import { motion } from 'framer-motion';
import aboutUs from '../assets/image.png';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-8">

        <motion.div
          className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutUs}
            alt="Jiex Consulting Services"
            loading="lazy"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-12"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">About Jiex Consulting</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At Jiex Consulting, we partner with businesses to deliver tailored strategies and actionable plans. From setting up new entities to scaling established operations, our experts guide you every step of the way.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {[
              'Business Consultation',
              'Executive Recruitment',
              'Company Formation',
              'Startup Advisory',
              'Market Analysis',
              'Legal Compliance'
            ].map(item => (
              <li key={item} className="flex items-center before:content-['→'] before:mr-2">{item}</li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}