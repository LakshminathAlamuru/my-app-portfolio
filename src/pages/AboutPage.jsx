import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AboutPage() {
  const education = [
    {
      college: "Syracuse University, USA",
      branch: "Master’s in Computer Engineering",
      cgpa: "3.95 / 4.0",
      duration: " Jan 2024 –  Dec 2025",
    },
    {
      college: "National Institute of Technology [NIT] Jamshedpur, India",
      branch: "Bachelor’s in Electronics and Communication Engineering",
      cgpa: "8.2 / 10.0",
      duration: "Aug 2016 –  May 2020",
    },
  ];

  const experience = [
    {
      title: "Software Developer Intern – Nokia [Sunnyvale, USA]",
      date: "Jan 2025 – Aug 2025",
      details:
        "Worked as an Embedded Software Engineer Intern in Nokia’s network infrastructure division, contributing to SRLinux-powered data-center routers. Engineered system-level features such as signal-safe time handling and per-core CPU monitoring for 64+ cores. Enhanced platform stability by improving diagnostics, reducing troubleshooting time, and resolving critical issues across core modules.",
    },
    {
      title: "Software Engineer – Qualcomm [Hyderabad, India]",
      date: "Apr 2022 - Jan 2024",
      details:
        "Worked in the Linux/Android telephony domain, contributing to mobile products built on Qualcomm Snapdragon chipsets. Developed and optimized telephony and IMS features across QCRIL, AOSP, and Vendor IMS, improving call reliability, API consistency, and cross-OEM compatibility. Enhanced testing and debugging workflows through modem simulation, feature validation tools, and log-analysis frameworks, reducing issue resolution time and boosting developer efficiency.",
    },
    {
      title: "Associate Engineer, SW – Harman Intl[Bangalore, India]",
      date: "Oct 2020 – Mar 2022",
      details:
        "Worked in the automotive telematics domain, contributing to connected-car platforms for OEMs such as BMW and Volvo. Developed and optimized modem registration, bootup, and telephony modules, enabling reliable 4G/5G data, voice, SMS, and SIM functionality through the oFono framework. Strengthened system stability and launch readiness by resolving critical bring-up issues, improving initialization performance, and enhancing modularity through Bitbake and D-Bus configurations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-mono">
      <Navbar />

      {/* ABOUT ME */}
      <motion.section
        className="max-w-4xl mx-auto mt-40 px-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-gray-400">
          I’m a recent graduate with a
          <span className="text-orange-500"> Master’s in Computer Engineering from Syracuse University and a Bachelor’s in Electronics and Communication Engineering from NIT Jamshedpur</span>.
          I specialize in embedded systems and have hands-on experience across automotive telematics, mobile chipset platforms (Qualcomm Snapdragon and Samsung Exynos), and network infrastructure systems like Nokia’s SRLinux.
          My work spans building reliable embedded software, improving system performance, and contributing to production-grade platform development.
        </p>
      </motion.section>



      {/* EXPERIENCE SECTION */}
      <section className="mt-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>

        {experience.map((item, index) => {
          const [open, setOpen] = useState(false);

          return (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg border border-gray-800 hover:border-green-400 transition duration-300 bg-[#111] shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <h3 className="text-lg text-green-400 font-semibold">{item.title}</h3>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              {open && (
                <p className="mt-3 text-gray-300 text-sm transition-all duration-300">
                  {item.details}
                </p>
              )}
            </div>
          );
        })}
      </section>

      {/* EDUCATION SECTION */}
      <section className="mt-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>

        {education.map((item, index) => {
          const [open, setOpen] = useState(false);
          return (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg border border-gray-800 hover:border-blue-400 transition duration-300 bg-[#111] shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <h3 className="text-lg text-orange-500 font-semibold">{item.college}</h3>
                <span className="text-sm text-gray-400">{item.duration}</span>
              </div>
              {open && (
                <p className="mt-3 text-gray-300 text-sm transition-all duration-300">
                  <span className="font-semibold text-gray-200">Program:</span> {item.branch}<br />
                  <span className="font-semibold text-gray-200">CGPA:</span> {item.cgpa}
                </p>
              )}
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
