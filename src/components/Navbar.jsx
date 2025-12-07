import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-4 px-6 md:px-10 flex justify-between items-center fixed top-0 z-50 bg-[#0d0d0d] bg-opacity-95 backdrop-blur-sm"
    >
      {/* Left - Logo */}
      <div className="text-xl font-bold text-green-400 flex items-center gap-2">
        <FaHome className="text-green-400" />
        <Link to="/" className="text-green-400 hover:text-white">Home</Link>
      </div>

      {/* Right - Nav Links */}
      <ul className="flex space-x-6 text-sm text-white">
        <li><Link to="/about" className="hover:text-green-400">About</Link></li>
        <li><Link to="/skills" className="hover:text-green-400">Skills</Link></li>
        <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
        <li><Link to="/resume" className="hover:text-green-400">Resume</Link></li>
        <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
      </ul>
    </motion.nav>
  );
}