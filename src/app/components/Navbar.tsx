"use client"

import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-800 shadow-sm border-b mx-auto text-white text-b w-[1850px] h-[70px]" >
        <div className="container mx-auto flex justify-between items-center py-6 px-3">
          <div className="flex space-x-4">
            <span>📞 (021) 331 231</span>
            <span>📧 bandage@example.com</span>
          </div>
          <div className="flex space-x-4">
          <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex space-x-4">Follow Us:
            <Link href="/" className="hover:underline">
            <FaFacebookF />
            </Link>
            <Link href="/" className="hover:underline">
            <FaInstagram />
            </Link>
            <Link href="/" className="hover:underline">
            <LuTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white- text-gray-600 shadow">
        <div className="container mx-auto flex items-center justify-between p-6">
          <div className="text-2xl font-bold">
            <Link href="/">E-commerce</Link>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/home" className="hover:underline">
              Home
            </Link>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-700">
            <ul className="space-y-4 p-4">
              <li>
                <Link href="/home" className="block hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="block hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="block hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
