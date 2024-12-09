import React from "react";

export default function About() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* ABOUT COMPANY */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">ABOUT COMPANY</h2>
          <p className="text-gray-600 text-lg mt-2">
            We strive to deliver excellence and innovation.
          </p>
        </div>

        {/* ABOUT US */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            ABOUT US
          </h3>
          <p className="text-gray-700 text-base leading-7 text-center">
            We know how large objects will act, but things on a small scale
            behave differently. Our mission is to bridge the gap between big
            ideas and detailed execution. With expertise, dedication, and a
            drive for innovation, we aim to build a better tomorrow.
          </p>
        </div>

        {/* Get Quote Now */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Get Quote Now
          </button>
        </div>
      </div>
    </section>
  );
}
