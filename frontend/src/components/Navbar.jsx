import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full top-0 z-50 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Updated Name Styling */}
        <h1 className="text-2xl font-bold">
          <span className="text-white">Sheena</span>{" "}
          <span className="text-teal-400">Wanjiru</span>{" "}
          <span className="text-white">Mugo</span>
        </h1>

        {/* Hamburger Icon */}
        <button 
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Items - Desktop */}
        <ul className="hidden lg:flex space-x-6">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 text-center py-4 absolute top-full left-0 w-full shadow-md">
          <ul className="space-y-4">
            <li><Link to="/" className="block hover:text-teal-400" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block hover:text-teal-400" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="block hover:text-teal-400" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className="block hover:text-teal-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
