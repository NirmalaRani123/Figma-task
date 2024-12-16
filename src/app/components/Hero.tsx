import React from "react";

export default function Hero() {
  return (
    <section className="bg-cyan-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-sm font-medium mb-2 tracking-wide">
            Summer 2020
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            New Collection
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Discover our exclusive collection. Perfect for every occasion and every style.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-[80%] flex justify-center items-center">
    <img
      src="/hero.png"
      alt="Hero Image"
      className="w-auto h-[700px] max-h-[80vh] object-cover"
    />
  </div>
</div>
    </section>
  );
}
