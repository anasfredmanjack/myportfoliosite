export default function Hero() {
  return (
    <section className="pt-32 pb-24 text-center bg-gray-50 px-4">
              {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center mb-5">
          <img
            src="/fred.jpg"
            alt="Developer portrait"
            className="w-32 h-32 md:w-96 md:h-96 p-10 object-cover rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300"
          />
        </div>
      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mb-6">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Available for new opportunities
      </div>

      <h1 className="text-[29px] md:text-[50px] lg:text-[80px] font-extrabold text-gray-900 leading-tight mb-6 animate-typing">
        Crafting Digital Experiences <br /> with Code & AI
      </h1>

      <p className=" text-gray-600 text-wrap  mb-10 animate-fade-in ">
        I build scalable web apps and AI-powered solutions. Turning complex ideas into elegant, user-centric products.
      </p>

      <div className="flex justify-center gap-4 animate-fade-in">
        <a href="/projects" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
          Explore Projects
        </a>
        <a href="/contact" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
