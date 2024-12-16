"use client"
import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-800 shadow-sm border-b w-full h-[70px]">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 text-white text-b">
          <div className="flex space-x-6 text-1xl">
            <span>📞 (021) 331 231</span>
            <span>📧 bandage@example.com</span>
          </div>
          <div className="flex space-x-4 text-2xl font-medium items-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex space-x-4 items-center text-1xl">
            <span>Follow Us:</span>
            <Link href="/" className="hover:text-gray-400">
              <FaFacebookF />
            </Link>
            <Link href="/" className="hover:text-gray-400">
              <FaInstagram />
            </Link>
            <Link href="/" className="hover:text-gray-400">
              <LuTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/*Main Head*/ }
     
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold text-black">Bandage</h1>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-gray-500  hover:text-blue  text-2xl font-bold">Home</a>
          <a href="#" className="text-gray-500  hover:text-blue  text-2xl font-bold">About</a>
          <a href="#" className="text-gray-500  hover:text-blue  text-2xl font-bold">Contact</a>
          <a href="#" className="text-gray-500  hover:text-blue  text-2xl font-bold">Blog</a>
          <a href="#" className="text-gray-500  hover:text-blue  text-2xl font-bold">Pages</a>
          <a href="#" className="text-gray-500  hover:text-blue  text-2xl font-bold">Shop</a>
          </nav>
          <div className="flex justify-between items-center px-8 py-4 space-x-4">
          <a href="#" className="text-gray-500 font-bold text-2xl">Login / Register</a>
          <a href="#" className="text-gray-500 font-bold text-2xl">🔍</a>
          <a href="#" className="text-gray-500 font-bold text-2xl">🛒</a>
          <a href="#" className="text-gray-500 font-bold text-2xl">❤️</a>
          </div>
          
       
      </div>

      
   </header>
  )
}