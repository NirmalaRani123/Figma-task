import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-6">
        {/* Logo and Social Icons */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">Bandage</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-5 gap-8 mt-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Info</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-400">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Carrier</a></li>
              <li><a href="#" className="hover:text-blue-400">We are hiring</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Business Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400">User Analytics</a></li>
              <li><a href="#" className="hover:text-blue-400">Live Chat</a></li>
              <li><a href="#" className="hover:text-blue-400">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">iOS & Android</a></li>
              <li><a href="#" className="hover:text-blue-400">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-blue-400">Customers</a></li>
              <li><a href="#" className="hover:text-blue-400">API</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-2 border rounded"
            />
            <button className="w-[120px] h-[48px] bg-blue-400 text-white py-2 square hover:bg-blue-600">
              Subscribe
            </button>
            <p className="text-gray-600 text-sm mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 border-t">
        <p className="text-gray-600">
          Made With Love By{" "}
          <a href="#" className="text-blue-400 hover:underline">
         Finland All Right Reserved 
          </a>
        </p>
      </div>
    </footer>
  );
}

