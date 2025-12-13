import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 relative z-20 -mt-12">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-white/5 border border-white/10 text-neon-blue px-3 py-1 rounded-full backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-blue transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
