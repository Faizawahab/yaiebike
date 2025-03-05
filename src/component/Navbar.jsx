import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-[#1a1f71] z-50">
      <div className="flex justify-between items-center px-6 md:px-28 h-16 text-white">
        <div id="mlogo" className="text-xl font-bold">E-BIKE</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          // className={`${
          //   isOpen ? "block" : "hidden"
          // } absolute md:relative top-16 left-0 w-full md:w-auto md:flex bg-[#1a1f71] md:bg-transparent text-center md:text-left`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="#service" className="hover:text-gray-300">Service</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
