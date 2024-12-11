import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center bg-[#13161b] p-4 justify-between text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold">GymFluencer</h1>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        />
        <div
          className={`fixed right-0 top-0 h-full bg-[#13161b] text-white w-[70%] transform transition-transform duration-500 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FaTimes size={24} />
          </button>
          <ul className="mt-16 flex flex-col items-start p-6 space-y-4">
            <li>
              <Link to="/" className="cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/home/features" className="cursor-pointer">Features</Link>
            </li>
            <li>
              <Link to="/home/blog" className="cursor-pointer">Blog</Link>
            </li>
            <li>
              <a href="#faqs" className="cursor-pointer">FAQs</a>
            </li>
            <li>
              <a href="#contact-us"className="cursor-pointer">Contact Us</a>
            </li>
            <li>
              <Link to="/home/diet" className="cursor-pointer">Diet Plans</Link>
            </li>
            <li>
              <Link to="/home/workout" className="cursor-pointer">Workout Plans</Link>
            </li>
          </ul>
          <div className="mt-auto p-6 flex flex-col space-y-4">
            <button className="btn btn-accent rounded-2xl px-4 py-2 w-full">
              Get Started
            </button>
            <button className="btn btn-accent rounded-2xl px-4 py-2 w-full">
              Login
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link to="/" className="cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="/home/features" className="cursor-pointer">Features</Link>
          </li>
          <li>
            <Link to="/home/diet" className="cursor-pointer">Diet Plans</Link>
          </li>
          <li>
            <Link to="/home/workout" className="cursor-pointer">Workout Plans</Link>
          </li>
          <li>
            <Link to="/home/blog" className="cursor-pointer">Blog</Link>
          </li>
          <li>
            <a href="#faqs" className="cursor-pointer">FAQs</a>
          </li>
          <li>
            <a href="#contact-us" className="cursor-pointer">Contact Us</a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="btn btn-accent rounded-2xl px-4 py-2">
            Get Started
          </button>
          <button className="btn btn-accent rounded-2xl px-4 py-2">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
