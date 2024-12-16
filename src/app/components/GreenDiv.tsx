import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#23856D] p-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-1xl font-medium mb-2 tracking-wide">
            Summer 2020
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Vita Classic Product
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
          We know how large objects will act, We know how are objects will act, We know
          </p>
          <p className="text-sm font-medium mb-4 text-left tracking-wide">
          $16.48
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
           Add to Cart
          </button>
        </div>
         {/* Right Image */}
         <div className="mt-8 md:mt-0 md:w-[80%] flex justify-center items-center">
    <img
      src="/man8.png"
      alt="Man Image"
      className="w-auto h-[700px] max-h-[80vh] object-cover"
    />
  </div>
</div>
    </section>
  );
}
