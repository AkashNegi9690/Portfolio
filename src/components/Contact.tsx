import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <a
            href="mailto:example@email.com"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Mail size={24} className="mb-4" />
            <span className="text-gray-300">example@email.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Phone size={24} className="mb-4" />
            <span className="text-gray-300">+1 234 567 890</span>
          </a>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
            <MapPin size={24} className="mb-4" />
            <span className="text-gray-300">New York, USA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}