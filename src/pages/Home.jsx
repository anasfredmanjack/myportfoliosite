import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import fredImg from "../assets/fred.jpg";
import Canvas3D from "../components/Canvas3D";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
   const { scrollYProgress } = useScroll();
   const y = useTransform(scrollYProgress, [0, 1], [0, -50]);



   const testimonials = [
      {
         id: 1,
         name: "Sarah Jenkins",
         role: "CEO, TechFlow",
         text: "Anas transformed our outdated platform into a cutting-edge digital experience. His eye for design is unmatched."
      },
      {
         id: 2,
         name: "David Chen",
         role: "Founder, StartUp X",
         text: "The 3D interactions and smooth animations significantly increased our user engagement. Highly recommended!"
      },
      {
         id: 3,
         name: "Elena Rodriguez",
         role: "Product Manager",
         text: "Professional, creative, and technically brilliant. Anas delivered beyond our expectations."
      }
   ];

   const partners = ["TechCorp", "Innova", "FutureSystems", "WebScale", "DesignHub"];

   return (
      <div className="overflow-hidden relative ">
         {/* 3D Background */}
         <Canvas3D />

         {/* Hero Section */}
         <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 blur-3xl" />

            <motion.div
               style={{ y }}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               className="z-10 max-w-5xl mx-auto"
            >
               <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md">
                  <span className="text-neon-blue text-sm font-mono tracking-wider uppercase">Available for freelance work</span>
               </div>

               <h2 className="text-gray-300 font-mono text-lg md:text-xl tracking-widest mb-6 uppercase">
                  Creative Developer | Anas Fred
               </h2>
               <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter leading-tight">
                  CRAFTING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple animate-pulse-glow">
                     DIGITAL RELICS
                  </span>
               </h1>
               <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
                  I build immersive web experiences that blend art, code, and interactive design to tell compelling stories.
               </p>

               <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <Link
                     to="/projects"
                     className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105"
                  >
                     <span className="relative z-10 flex items-center gap-2">
                        View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-neon-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                  <Link
                     to="/contact"
                     className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                  >
                     Contact Me
                  </Link>
               </div>
            </motion.div>
         </section>

         {/* Partners Section */}
         <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 overflow-hidden">
               <p className="text-center text-gray-500 text-sm font-mono mb-8 uppercase tracking-widest">Trusted By Industry Leaders</p>
               <div className="flex justify-center flex-wrap gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {partners.map((partner, index) => (
                     <h3 key={index} className="text-2xl font-bold font-mono text-white/40 hover:text-white transition-colors cursor-default">
                        {partner}
                     </h3>
                  ))}
               </div>
            </div>
         </section>

         {/* Bio Section */}
         <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid md:grid-cols-2 gap-16 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true }}
                     className="relative group"
                  >
                     <div className="absolute inset-0 bg-neon-purple rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                     <div className="relative rounded-2xl overflow-hidden border border-white/10 glass">
                        <img src={fredImg} alt="Anas Fred" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 md:h-[600px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                           <p className="text-white font-mono text-sm">Based in</p>
                           <p className="text-2xl font-bold">New York City, USA</p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     viewport={{ once: true }}
                  >
                     <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-4 uppercase">About Me</h2>
                     <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Developer by trade, <br />
                        <span className="text-gray-500">Artist by heart.</span>
                     </h3>
                     <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        I'm Anas Fred, a passionate developer focused on creating interactive digital experiences. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
                     </p>
                     <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                           <Code className="text-neon-blue mb-2" />
                           <h4 className="font-bold mb-1">Clean Code</h4>
                           <p className="text-xs text-gray-500">Scalable & Maintainable</p>
                        </div>
                        <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                           <Layers className="text-neon-purple mb-2" />
                           <h4 className="font-bold mb-1">Modern Stack</h4>
                           <p className="text-xs text-gray-500">React, Node, 3D</p>
                        </div>
                     </div>

                     <Link to="/about" className="text-white border-b border-neon-blue pb-1 hover:text-neon-blue transition-colors inline-flex items-center gap-2">
                        Read Full Story <ArrowRight className="w-4 h-4" />
                     </Link>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Projects Section */}
         <section className="py-32 bg-dark-900/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
               <div className="flex justify-between items-end mb-16">
                  <div>
                     <h2 className="text-neon-pink font-mono text-sm tracking-widest mb-4 uppercase">Selected Work</h2>
                     <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
                  </div>
                  <Link to="/projects" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                     View All Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {projects.slice(0, 3).map((project, index) => (
                     <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                     >
                        <ProjectCard project={project} />
                     </motion.div>
                  ))}
               </div>

               <div className="mt-12 text-center md:hidden">
                  <Link to="/projects" className="btn btn-outline">View All Projects</Link>
               </div>
            </div>
         </section>

         {/* Testimonials Section */}
         <section className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="text-center mb-20">
                  <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-4 uppercase">Testimonials</h2>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">What People Say</h3>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((item, index) => (
                     <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl relative hover:bg-white/5 transition-colors"
                     >
                        <div className="text-neon-purple text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                        <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed pt-6">
                           {item.text}
                        </p>
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-xl font-bold text-white">
                              {item.name.charAt(0)}
                           </div>
                           <div>
                              <h4 className="font-bold text-white">{item.name}</h4>
                              <p className="text-sm text-gray-500">{item.role}</p>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}