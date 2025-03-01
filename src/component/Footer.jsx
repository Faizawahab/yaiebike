import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-y-6 md:gap-x-20 justify-center items-center bg-[#1A1F71] text-white py-10 px-6 md:h-[40vh] mt-10 text-center md:text-left'>
        {/* Company Info */}
        <div className="w-full md:w-1/3">
          <h1 className='mb-3 text-lg font-bold'>E BIKE</h1>
          <p>
            The adaptive motor for an electric bicycle intelligently <br />
            adjusts power output based on terrain, speed, and <br />
            user input, optimizing energy efficiency.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3">
          <h1 className="mb-3 text-lg font-bold">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            <a href="/" className="hover:scale-105 active:scale-95 transition-transform hover:underline">
              Home
            </a>
            <a href="#service" className="hover:scale-105 active:scale-95 transition-transform hover:underline">
              Service
            </a>
            <a href="#about" className="hover:scale-105 active:scale-95 transition-transform hover:underline">
              About
            </a>
            <a href="#contact" className="hover:scale-105 active:scale-95 transition-transform hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="w-full md:w-1/3">
          <h1 className='mb-3 text-lg font-bold'>Additional Resources</h1>
          <h2>ebic20877@gmail.com</h2>
          <h2>+233550538536</h2>
          <div className='flex justify-center md:justify-start gap-x-3 mt-3 text-2xl'>
            <FaFacebook className="hover:scale-110 transition-transform cursor-pointer" />
            <FaInstagramSquare className="hover:scale-110 transition-transform cursor-pointer" />
            <FaTwitterSquare className="hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <footer className="bg-[#1A1F71] text-white text-center p-4">
        <p>All rights reserved. 2025</p>
      </footer>
    </div>
  );
};

export default Footer;
