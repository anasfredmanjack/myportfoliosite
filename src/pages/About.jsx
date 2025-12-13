import { motion } from 'framer-motion';
import { Code, Cpu, Database, Layers } from 'lucide-react';

export default function About() {
  const skills = [
    {
      category: "Languages",
      icon: Code,
      items: [
        { name: "Python", level: 95 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Go", level: 75 },
      ],
    },
    {
      category: "AI & Automation",
      icon: Cpu,
      items: [
        { name: "LangChain / LLMs", level: 90 },
        { name: "OpenAI API", level: 85 },
        { name: "TensorFlow / PyTorch", level: 75 },
      ],
    },
    {
      category: "Frameworks",
      icon: Layers,
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "Node.js / Express", level: 90 },
        { name: "Django / FastAPI", level: 80 },
      ],
    },
    {
      category: "Infrastructure",
      icon: Database,
      items: [
        { name: "PostgreSQL / MongoDB", level: 90 },
        { name: "Docker / Kubernetes", level: 85 },
        { name: "AWS / GCP", level: 80 },
      ],
    },
  ];

  return (
    <section className="min-h-screen px-6 py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-neon-blue/30 shadow-[0_0_30px_rgba(0,243,255,0.3)] mx-auto">
            <img
              src="/fred.jpg"
              alt="Anas Fred"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-black/80 backdrop-blur-sm border border-neon-purple/50 px-4 py-1 rounded-full text-xs font-mono text-neon-purple">
            FULL STACK
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Anas <span className="text-neon-purple">Fred</span>
        </h1>
        <p className="text-xl text-white mb-2">Full Stack Developer</p>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Passionate about building scalable web applications and immersive digital experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="text-neon-blue">Technical</span> Proficiency
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 rounded-2xl hover:border-neon-purple/30 transition-colors"
          >
            <h3 className="flex items-center gap-3 text-xl font-bold mb-8 text-white">
              <section.icon className="text-neon-purple" size={24} />
              {section.category}
            </h3>

            <div className="space-y-6">
              {section.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium text-gray-400 mb-2">
                    <span>{skill.name}</span>
                    <span className="text-neon-blue">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}