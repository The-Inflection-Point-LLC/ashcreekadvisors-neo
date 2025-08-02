"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    //<nav className="bg-white px-6 py-6">
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md px-6 py-6">

      <div className="max-w-7xl mx-auto flex justify-end items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-sm font-medium hover:text-gray-800 transition-colors duration-200 text-[20px]"
          >
            Home
          </a>
          <a
            href="#investments"
            className="text-sm font-medium hover:text-gray-800 transition-colors duration-200 text-[20px]"
          >
            Investments
          </a>
          <a
            href="#who-we-are"
            className="text-sm font-medium hover:text-gray-800 transition-colors duration-200 text-[20px]"
          >
            Who We Are
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-gray-800 transition-colors duration-200 text-[20px]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="bg-black/80 rounded-lg backdrop-blur-sm p-4 space-y-4">
            <a
              href="#"
              className="block text-sm font-medium hover:text-gray-800 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-sm font-medium hover:text-gray-800 transition-colors duration-200"
            >
              Investments
            </a>
            <a
              href="#who-we-are"
              className="block text-sm font-medium hover:text-gray-800 transition-colors duration-200"
            >
              Who We Are
            </a>
            <a
              href="#"
              className="block text-sm font-medium hover:text-gray-800 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
