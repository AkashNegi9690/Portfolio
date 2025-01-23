import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Akash Negi
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <p className="text-gray-400">
            I am a passionate Full Stack Developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create scalable
            and user-friendly solutions that solve real-world problems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="/AKASH_RESUME.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown className="animate-bounce" size={20} />
            Download Resume
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="skills"
            smooth={true}
            className="animate-bounce inline-block mt-12 cursor-pointer"
          >
            <ArrowDown size={32} className="text-gray-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}