import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { number: '2', labelTop: 'Years of', labelBottom: 'experience' },
    { number: '5', labelTop: 'Fields', labelBottom: 'Explored' },
    { number: '15', labelTop: 'Projects', labelBottom: 'Delivered' },
    { number: '682', labelTop: 'Hours spent', labelBottom: 'Debugging' },
  ];

  return (
    <div className="w-full bg-[#0d0d0d] py-12 flex flex-wrap justify-center gap-10 border-t border-gray-800">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-4xl font-extrabold text-white">{item.number}</div>
          <div className="text-gray-400 text-sm">{item.labelTop}</div>
          <div className="text-gray-400 text-sm">{item.labelBottom}</div>
        </motion.div>
      ))}
    </div>
  );
}