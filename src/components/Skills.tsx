import { motion } from 'framer-motion';

const skills = [
  'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'WebSocket',
  'JWT', 'bcrypt', 'React', 'Recoil', 'Tailwind CSS', 'Next.js', 'JavaScript',
  'TypeScript', 'HTML5', 'CSS3', 'Git/GitHub', 'Postman', 'VS Code'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-3  sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-gray-300 py-4 rounded-lg text-center font-medium hover:bg-gray-700 hover:text-white transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
