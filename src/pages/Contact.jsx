
export default function Contact(){
    return (
     
             <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20">
              {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Get In <span className="text-indigo-600">Touch</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>
         {/* Contact Form */}
            <form
                className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6 md:p-10 space-y-5"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
                </div>

                <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                />

                <textarea
                rows="6"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                ></textarea>

                <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
                >
                Send Message
                </button>
            </form>

             {/* Socials */}
                <div className="flex gap-6 mt-12 text-gray-600 text-2xl">
                    <a href="#" className="hover:text-indigo-600">
                    <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#" className="hover:text-indigo-600">
                    <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="#" className="hover:text-indigo-600">
                    <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>

                    {/* Download Resume Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="mt-8 inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
                        <span>Download Resume</span>
                    </a>

            </section>
     
    )
}