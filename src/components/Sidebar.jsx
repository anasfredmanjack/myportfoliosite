export default function Sidebar({ setIsOpen }) {
  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      onClick={() => setIsOpen(false)}
    >
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/65 via-gray-900/55 to-black/55 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* SHEET: stacks on mobile, side-by-side on md+ */}
      <div
        className="relative z-10 mx-auto my-8 w-full max-w-4xl md:max-w-none md:my-0 md:inset-y-0 md:mx-0 md:pr-0 md:pl-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full min-h-[100svh] md:min-h-screen">
          {/* AESTHETIC LEFT  */}
          <div
            className="w-full md:w-1/2 flex-shrink-0 flex flex-col items-center justify-center px-6 py-8 md:py-12 text-center text-white"
            onClick={() => {}}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 animate-fade-in">
              Welcome 👋
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-md animate-fade-in ">
              Explore my work — projects, case studies, and small experiments
              that show how I blend design, code, and machine intelligence.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                {/* lightweight GitHub icon (SVG) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.814 1.096.814 2.21 0 1.595-.014 2.877-.014 3.268 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com/"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="LinkedIn"
                onClick={(e) => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v13h-4V8zM9 8h3.8v1.8h.1c.5-.9 1.8-1.8 3.8-1.8 4.1 0 4.8 2.7 4.8 6.1V21H19v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* MENU RIGHT / BOTTOM  */}
          <div className="w-full md:w-64 bg-white md:shadow-2xl flex flex-col px-6 py-6 overflow-auto">
            {/* Close button: aligned top-right for mobile and desktop */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-gray-600 hover:text-gray-800 p-2 rounded-md"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav className="mt-2 flex flex-col gap-4">
              <a href="/" className="text-gray-800 text-lg hover:text-indigo-600">Home</a>
              <a href="/about" className="text-gray-800 text-lg hover:text-indigo-600">About</a>
              <a href="/projects" className="text-gray-800 text-lg hover:text-indigo-600">Projects</a>
              <a href="/contact" className="text-gray-800 text-lg hover:text-indigo-600">Contact</a>
            </nav>

            <div className="mt-6">
                 <a
  href="/contact"
  className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 text-sm rounded-md hover:bg-indigo-700 transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5zm7-2.68l-4.59 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.09c.49-.47.49-1.26 0-1.75a1.25 1.25 0 0 0-1.77 0l-4.42 4.42l-.71-.71l6.54-6.54c.49-.49.49-1.28 0-1.77s-1.29-.49-1.79 0L14.19 13l-.69-.73l6.87-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89l-.71-.7l5.5-5.48c.5-.49.5-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4 4 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.07-4.07c.49-.49.49-1.28 0-1.77c-.5-.48-1.29-.48-1.79.01"/>
  </svg>
  Get In Touch
</a>
            </div>

            {/* Small footer info - stays at bottom on larger screens */}
            <div className="mt-auto pt-6 text-sm text-gray-500 border-t border-gray-100">
              <p>© {new Date().getFullYear()} Anas Fred</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
