import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-mono">
      <Navbar />

      <motion.div
        className="max-w-xl mx-auto pt-40 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl font-bold text-green-400 mb-6 text-center"initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}transition={{ delay: 0.3, duration: 0.8 }}>📬 Contact Me</h2>

        <form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          action="https://formspree.io/f/mqabbvdp"
          method="POST"
          className="flex flex-col space-y-6 bg-gray-900 p-8 rounded-lg border border-gray-800"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded transition-all"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <Footer />
    </div>
  );
}