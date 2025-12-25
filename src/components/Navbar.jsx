import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black border-b border-white/10"
          : "bg-black/90 border-b border-white/5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          ANAS FRED<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors ${location.pathname === item.path
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-black z-50 md:hidden"
            >
              <div className="flex flex-col h-full px-6">
                {/* Header: Logo + Close Icon */}
                <div className="flex items-center justify-between pt-10 pb-6">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-white"
                  >
                    ANAS FRED<span className="text-blue-400">.</span>
                  </Link>

                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="text-white text-3xl hover:text-blue-400 transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Links */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-bold mb-6 ${location.pathname === "/"
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                    }`}
                >
                  Home
                </Link>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold mb-6 ${location.pathname === item.path
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* CTA */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-10 py-4 text-center bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold"
                >
                  Get in Touch
                </Link>

                {/* Footer */}
                <p className="mt-auto mb-6 text-xs text-gray-500 text-center">
                  © Anas Fred. All Rights Reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
