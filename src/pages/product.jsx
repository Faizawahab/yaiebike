import React from "react";
import pimage from "../assets/image2.jpg";

const Product = () => {
  return (
    <div id="service" className= "max-w-5xl mx-auto p-10 bg-white shadow-lg mt-10 rounded-lg flex flex-col md:flex-row items-center text-center md:text-left">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img src={pimage} alt="Adaptive Motor" className="w-full h-auto rounded-lg" />
      </div>

      {/* Product Description */}
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">About the Product</h2>
        <p className="text-lg text-gray-700">
          The Adaptive Motor for Electric Bicycles is an innovative solution designed to enhance the efficiency and performance of e-bikes. 
          This smart motor automatically adjusts power output based on terrain, speed, and user input, providing a smooth and energy-efficient ride. 
          Engineered for the Ghanaian market, it offers an affordable and eco-friendly alternative to traditional transportation, making electric 
          bicycles more accessible and practical for everyday use. By optimizing battery consumption and adapting to different riding conditions, 
          this motor ensures a seamless and reliable cycling experience.
        </p>
      </div>
    </div>
  );
};

export default Product;
