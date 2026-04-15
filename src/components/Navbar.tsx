import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md shadow-md"
      }`}
    >
      {/* Top bar */}
      <div className="bg-indigo-900 text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span>📞 +91 9597099199 &nbsp;|&nbsp; ✉ syediagroup@gmail.com</span>
        <span className="hidden sm:block">🕐 Mon–Fri: 7:30am – 3:30pm</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-indigo-700 p-2 rounded-full">
            <FaGraduationCap className="text-yellow-400 text-2xl" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-indigo-900 text-sm uppercase tracking-wide">Syedia Oriental</p>
            <p className="text-xs text-gray-500 font-medium">Nursery & Primary School</p>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? "bg-indigo-700 text-white"
                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/admissions"
              className="ml-3 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-5 py-2 rounded-full text-sm transition-all shadow"
            >
              Apply Now
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-indigo-800 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                      location.pathname === link.path
                        ? "bg-indigo-700 text-white"
                        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/admissions"
                  className="block mt-2 bg-yellow-400 text-center text-indigo-900 font-bold px-5 py-3 rounded-full"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
