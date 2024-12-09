import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Section - Text */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in touch today!
          </h2>
          <p className="text-gray-600 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
            Contact Us
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src="/contact.png"
            alt="Family shopping"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
