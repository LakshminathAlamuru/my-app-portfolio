import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto mt-20 px-6"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-400" text-justify leading-7>
        Embedded Software Engineer with 4+ years of experience at Qualcomm, Nokia, and Harman, specializing in Linux systems, telephony frameworks, and embedded platforms. Skilled in C/C++, Python, AOSP, HAL, and multithreaded programming with a proven
        record of optimizing performance, developing and integrating APIs, and enhancing reliability across Android and other embedded devices.
      </p>
    </motion.section>
  );
}