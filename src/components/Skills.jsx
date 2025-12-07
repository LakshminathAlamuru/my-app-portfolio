import { motion } from "framer-motion";

const skills = [
  {
    label: "Programming Languages",
    color: "text-green-400",
    items: "Modern C++, C, Python, Android Java, Verilog, Assembly, Bash"
  },
  {
    label: "Frameworks & Modules",
    color: "text-green-400",
    items: "SRLinux, AOSP, QCRIL, QtiDailer, HALs, Vendor IMS, Yocto, oFono, Exynos-RIL"
  },
  {
    label: "Software Technologies & Tools",
    color: "text-green-400",
    items: "Embedded Linux, Android SDK, ADB, CMake, Yocto, Bitbake, Git, Modem-Simulator, QXDM, LAF, YANG, gRPC, Docker, BSP, Device Drivers, Wireshark, GDB, ModelSim, Visual Studio, Jira, Confluence"
  },
  {
    label: "Others",
    color: "text-green-400",
    items: "OOPS Concepts, Design Patterns, Multithreading, 3GPP specification, SIP protocol, TCP/IP, SOC, SPI, I2C, Embedded Systems, Agile, Debugging, Code Review, Root Cause Analysis"
  }
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-4xl mx-auto mt-20 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-10">🛠️ Technical Skills</h2>

      <div className="flex flex-col gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 text-white rounded-lg p-5 border border-gray-800 hover:border-green-400 hover:scale-105 transition-all shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm leading-relaxed">
              <span className={`font-semibold ${skill.color} text-base`}>
                {skill.label}:
              </span>{" "}
              <span className="text-gray-300">{skill.items}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
