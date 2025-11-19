export default function About(){
      const skills = [
    {
      category: "Languages",
      icon: "fa-code",
      items: [
        { name: "Python", level: 95 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Go", level: 75 },
      ],
    },
    {
      category: "AI & Automation",
      icon: "fa-robot",
      items: [
        { name: "LangChain / LLMs", level: 90 },
        { name: "OpenAI API", level: 85 },
        { name: "TensorFlow / PyTorch", level: 75 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: "fa-layer-group",
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "Node.js / Express", level: 90 },
        { name: "Django / FastAPI", level: 80 },
      ],
    },
    {
      category: "Databases & DevOps",
      icon: "fa-database",
      items: [
        { name: "PostgreSQL / MongoDB", level: 90 },
        { name: "Docker / Kubernetes", level: 85 },
        { name: "AWS / GCP", level: 80 },
      ],
    },
  ];

  return(
     <section className="min-h-screen bg-gray-50 px-6 py-20 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-1 rounded-full">
          Skills & Expertise
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
          My Digital Toolkit
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          A curated collection of the languages, frameworks, and technologies I
          use to build modern, scalable, and intelligent applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {skills.map((section) => (
            
          <div key={section.category} className="bg-white shadow-md rounded-lg p-6 hover:border cursor-pointer hover:border-indigo-200">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-6">
              <i className={`fa-solid ${section.icon} text-indigo-600`}></i>
              {section.category}
            </h3>

            <div className="space-y-5">
              {section.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    
  )
}