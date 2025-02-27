import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='flex gap-x-[100px] justify-center items-center bg-[#1A1F71] text-white h-[40vh] mt-[100px]'>
        <div>
          <h1 className='mb-3'>E BIKE</h1>
          <p>
            The adaptive motor for an electric bicycle intelligently <br />
            adjusts power output based on terrain, speed, and <br />user input. optimizing energy efficiency.
          </p>
        </div>

       

<div>
  <h1 className="mb-3 text-lg font-bold">Quick links</h1>
  <div className="flex flex-col space-y-2">
    <a href="/" className="text-white hover:scale-105 active:scale-95 transition-transform hover:underline underline-offset-4">
      Home
    </a>
    <a href="#service" className="text-white hover:scale-105 active:scale-95 transition-transform hover:underline underline-offset-4">
      Service
    </a>
    <a href="#about" className="text-white hover:scale-105 active:scale-95 transition-transform hover:underline underline-offset-4">
      About
    </a>
    <a href="#contact" className="text-white hover:scale-105 active:scale-95 transition-transform hover:underline underline-offset-4">
      Contact
    </a>
  </div>
</div>


        <div>
          <h1 className='mb-3'>Additional Resources</h1>
          <h2>ebic20877@gmail.com</h2>
          <h2>+233550538536</h2>
          <div className='flex gap-x-3 mt-3'>
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
          </div>
        </div>
      </div>

      <footer className="bg-[#1A1F71] text-white text-center p-4">
        <p>All rights reserved. 2025</p>
      </footer>
    </div>
  );
};

export default Footer;
