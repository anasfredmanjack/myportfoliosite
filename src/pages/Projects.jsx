import { useState } from "react";
import FilterBar from "../components/FilterBar";
import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    title: "AI Customer Service Chatbot",
    description: "A conversational AI for automated support and queries.",
    tags: ["Python", "LangChain", "React"],
    category: "AI/Automation",
    image: "https://placehold.co/600x400",
    demo: "#",
    code: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A bespoke store with a custom CMS built for scalability.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    category: "Fullstack",
    image: "https://placehold.co/600x400",
    demo: "#",
    code: "#",
  }
];

export default function Projects() {
  const [selected, setSelected] = useState("All");

  const categories = [...new Set(allProjects.map((p) => p.category))];
  const filtered =
    selected === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selected);

  return (
    <section className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Selected Projects</h2>
      <p className="text-gray-600 text-center mb-8">A collection of fullstack and AI-powered solutions.</p>

      <FilterBar categories={categories} selected={selected} onSelect={setSelected} />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
