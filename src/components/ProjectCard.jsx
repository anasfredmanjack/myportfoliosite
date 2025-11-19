export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-indigo-600 p-5 hover:shadow-md transition flex flex-col">
      <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700">{tag}</span>
        ))}
      </div>

      <div className="flex justify-between text-sm text-indigo-600 font-medium mt-auto">
        <a href={project.demo} target="_blank" rel="noreferrer" className="hover:underline">🔗 Live Demo</a>
        <a href={project.code} target="_blank" rel="noreferrer" className="hover:underline">💻 View Code</a>
      </div>
    </div>
  );
}
