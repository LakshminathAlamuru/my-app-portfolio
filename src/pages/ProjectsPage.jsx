import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';

const projects = [
  {
    title: "Automonous Plant Simulation",
    description:
      "Designed and implemented a weighted random part selection algorithm based on time-to-buffer-capacity ratios, optimizing buffer occupancy, minimizing worker thread idle time by 27%. Executed a dynamic time out assignment strategy for worker threads based on real-time analysis of buffer area and product orders by decreasing the wait time to less than 5 ms.",
    tech: ["C++", "Multi-threading", "Synchronization", "Parallel Programming"],
  },
  {
    title: "Linux Character Device Driver Development",
    description:
      "Implemented a character device driver in an embedded Linux environment that provides applications running in user space access to multiplication peripheral. Developed and tested a Linux app that uses the device driver, ensuring reliable operations and verified functionality.",
    tech: ["Embedded C", "Device Drivers", "Kernel Programming"],
  },
  {
    title: "Unauthorized Access Point Detection",
    description:
    "Executed a Machine Learning initiative to detect unauthorized wireless access points, using MLP, KNN, and SVM algorithms. Achieved 84.5% accuracy in identifying rogue connections, enhancing network security, and reducing threats. The model was trained using a data set comprising 100,000+ connection requests from 700 devices.",
    tech: ["Python", "Jupyter Notebook", "Numpy", "Pandas", "Scikit-Learn"],
  },
  {
    title: "TCR_Epitope_Binding_Prediction",
    description:
    "Developed deep learning models—including a base TCR-BERT and a cross-attention TCR-BERT—to predict TCR-epitope binding using contextual sequence embeddings and transformer architectures. Evaluated model generalization across random, TCR-exclusive, and epitope-exclusive splits, achieving strong performance metrics over 10 runs using accuracy, precision, recall, F1-score, and AUC.",
    tech: ["Python", "Jupyter Notebook", "Numpy", "Pandas", "Scikit-Learn"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-mono">
      <Navbar />
      <motion.div
        className="max-w-5xl mx-auto mt-32 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold text-green-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🔬 Projects
        </motion.h2>

        <div className="grid gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-green-400 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 mb-2">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-green-300">
                {proj.tech.map((tech, j) => (
                  <span key={j} className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}