import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-mono">
      <Navbar />

      <motion.div
        className="max-w-xl mx-auto pt-40 px-6 text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-green-400 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          📄 My Resume
        </motion.h2>

        <p className="text-gray-400 mb-6">
          View or download my latest resume below.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
          href="/Lakshminath_Reddy_Alamuru_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-500 transition"
          >
         View Resume (PDF)
        </a>

          <a
         href="/Lakshminath_Reddy_Alamuru_Resume.pdf"
         download
           className="text-green-400 hover:underline"
          >
          Download Resume
        </a>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}