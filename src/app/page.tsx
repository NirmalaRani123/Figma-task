import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorsPick from "./components/Editors-Pick";
import BestsellerProducts from "./components/Bestseller";
import About from "./components/About";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <div>
     
      <Navbar />
      <Hero />
     <EditorsPick />
     <BestsellerProducts />
     <About />
     <Contact />
    </div>
  );
}
