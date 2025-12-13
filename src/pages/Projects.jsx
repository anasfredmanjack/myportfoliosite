import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Canvas3D from "../components/Canvas3D";
import { projects } from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Canvas3D />

      {/* Background Gradient similar to Home */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <section className="pt-32 pb-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md">
            <span className="text-neon-blue text-sm font-mono tracking-wider uppercase">My Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Selected Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of digital products, experiments, and open source libraries.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`px-6 py-2 rounded-full text-sm font-mono tracking-wider transition-all duration-300 border ${selected === category
                  ? "bg-neon-blue text-black border-neon-blue font-bold shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
