import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link to="/">Sankar</Link>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <Link
              to="/"
              className="relative text-white hover:text-orange-600 transition duration-500 ease-in-out transform hover:scale-110"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-500 ease-in-out hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative text-white hover:text-orange-600 transition duration-500 ease-in-out transform hover:scale-110"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-500 ease-in-out hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="relative text-white hover:text-orange-600 transition duration-500 ease-in-out transform hover:scale-110"
            >
              Blog
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-500 ease-in-out hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative text-white hover:text-orange-600 transition duration-500 ease-in-out transform hover:scale-110"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-600 transition-all duration-500 ease-in-out hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-500 text-white space-y-4 p-4">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="block hover:bg-orange-600 hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block hover:bg-orange-600 hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={toggleMenu}
              className="block hover:bg-orange-600 hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block hover:bg-orange-600 hover:text-white px-2 py-1 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
