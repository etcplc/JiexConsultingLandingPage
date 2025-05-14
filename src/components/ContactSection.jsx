import { motion } from 'framer-motion';
import { Input } from './shared/Input';
import { Textarea }  from './shared/Textarea';

export default function ContactSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8 max-w-2xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
        >Get In Touch</motion.h2>
        <motion.form className="space-y-6" onSubmit={e => e.preventDefault()} initial={{ scale:0.95, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input type="text" name="name" placeholder="Your Name *" required />
            <Input type="email" name="email" placeholder="Your Email *" required />
            <Input type="tel" name="phone" placeholder="Your Phone *" required />
            <select name="service" className="p-3 bg-gray-100 rounded focus:outline-none">
              <option>Select Service</option>
              <option>Business Consultation</option>
              <option>Recruitment</option>
              <option>Company Formation</option>
              <option>Startup Advisory</option>
            </select>
          </div>
          <Textarea name="message" rows={5} placeholder="Your Message *" required />
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus:ring-2">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}