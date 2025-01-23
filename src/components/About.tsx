import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-gray-400 mb-8">
          I am a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create scalable
          and user-friendly solutions that solve real-world problems.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <FileDown size={20} />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}