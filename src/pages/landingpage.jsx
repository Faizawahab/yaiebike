import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Product from "./product";
import Contact from "./Contact";
import image1 from '../assets/car5.jpg';
import image2 from '../assets/car6.jpeg';
import image3 from '../assets/car7.jpg';
// import Innovator from "./innovator";

const images = [
  `url(${image1})`,
  `url(${image2})`,
  `url(${image3})`,
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the background image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        {/* Hero Section */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <section className=" text-white py-20">
            <h1 className="text-5xl font-bold">Welcome E-Bike</h1>
            <p className="text-l mt-4"> Mobility with Smart Adaptive Technology</p>
          </section>
        </div>

        {/* Background Image Slider */}
        <motion.div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-all"
          style={{ backgroundImage: images[currentImageIndex] }}
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <div>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Product />
          {/* <Innovator/> */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
