import React from "react";

export default function WhiteDiv() {
    return (
        <section className="bg-white px-4 py-12 flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/do.png" // Replace with your actual image path
            alt="Couple Smiling"
            className="w-full h-auto"
          />
        </div>
  
        {/* Right Content */}
        <div className="w-full lg:w-1/2 px-6 mt-8 lg:mt-0">
          <h4 className="text-gray-500 text-sm mb-2 font-Montserrat">SUMMER 2020</h4>
           <h1 className="text-4xl md:text-6xl text-[#252B42] font-bold leading-tight mb-4 max-w-lg">
              Part of the Neural Universe
           </h1>
           <p className="text-gray-600 text-lg mb-6 max-w-lg line-clamp-2">
             We know how large objects will act, but things on a small scale.
           </p>
  
          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Buy Now Button */}
            <button className="bg-[#23856D] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-[#1E6A56] transition">
              Buy Now
            </button>
  
            {/* Read More Button */}
            <button className="border-2 border-[#23856D] text-[#23856D] px-6 py-3 rounded-md font-semibold shadow-md hover:bg-green-100 hover:text-[#23856D] transition">
              Read More
            </button>
          </div>
        </div>
      </section>
    );
  }