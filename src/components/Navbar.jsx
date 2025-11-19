import { useState } from "react";
import Sidebar from "./Sidebar";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-b-gray-200 bg-white fixed w-full z-50">

         <div className="flex items-center gap-2">
        {/* image logo */}
        <img
          src="/fred.jpg" 
          alt="My Portfolio Logo"
          className="w-7 h-7 rounded-md object-cover "
        />
        <span className="font-semibold text-gray-800 text-lg">Anas Fred</span>
      </div>


      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-gray-600 items-center">
        <a href="/" className="hover:text-indigo-600">Home</a>
        <a href="/about" className="hover:text-indigo-600">About</a>
        <a href="/projects" className="hover:text-indigo-600">Projects</a>
        <a href="/contact" className="hover:text-indigo-600">Contact</a>
     
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
      </nav>
      

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    </header>
  );
}
