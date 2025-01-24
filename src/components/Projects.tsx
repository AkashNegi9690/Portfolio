import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import brainly from '../assets/brainly.png';
import gaminghub from '../assets/gaminghub.png';
import paynow from '../assets/paynow.png';

const projects = [
  {
    title: 'Pay Now',
    description: 'Developed a payment app allowing users to send money to other users in the database.Technologies: MERN Stack, Tailwind CSS',
    image:paynow,
    github: 'https://github.com/AkashNegi9690/PayNow',
    live: 'https://pay-now-eight.vercel.app/'
  },
  {
    title: 'Brainly-Second Brain App',
    description: ' Developed an app to organize YouTube, Twitter links, and notes for increased user productivity.Technologies: MERN Stack, Tailwind CSS',
    image:brainly,
    github: 'https://github.com/AkashNegi9690/Brainly',
    live: 'https://brainly-three.vercel.app/'
  },
  {
    title: 'Game Hub',
    description: 'Developed a platform for playing multiple small games.Technologies: React, Tailwind CSS',
    image:gaminghub,
    github:"https://github.com/AkashNegi9690/GameHub",
    live: 'https://flip-rush-tawny.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}