import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await axios.get('/api/jobs');
        setJobs(res.data);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
        setError('Unable to load job postings at this time.');
        // Fallback sample data
        setJobs([
          { id: 1, title: 'Business Consultant', location: 'Remote', description: 'Provide expert business advice to growing enterprises.' },
          { id: 2, title: 'Recruitment Specialist', location: 'Lagos, NG', description: 'Manage full-cycle recruitment and talent sourcing.' },
          { id: 3, title: 'Recruitment Specialist', location: 'Lagos, NG', description: 'Manage full-cycle recruitment and talent sourcing.' },

        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <section className="job-section" id="careers">
      <div className="job-container">
        <h2 className="job-header">Careers at Jiex Consulting</h2>

        {loading && (
          <p className="text-center text-gray-600">Loading job listings...</p>
        )}

        {error && (
          <p className="text-center text-red-600 mb-4">{error}</p>
        )}

        <motion.div
          className="job-grid"
          variants={container}
          initial="hidden"
          animate={loading ? 'hidden' : 'visible'}
        >
          jobs ? {jobs.map((job) => (
            <motion.div
              key={job.id}
              className="job-card"
              variants={cardVariants}
            >
              <h3>{job.title}</h3>
              <p className="italic mb-2">{job.location}</p>
              <p className="mb-4">
                {job.description.length > 120
                  ? job.description.substring(0, 120) + '…'
                  : job.description}
              </p>
              <a
                href={`mailto:careers@jiexconsulting.com?subject=Application for ${encodeURIComponent(
                  job.title
                )}`}
                className="text-primary hover:underline"
              >
                Apply Now
              </a>
            </motion.div>
          ))} : `jobs not found`
        </motion.div>
      </div>
    </section>
  );
}
