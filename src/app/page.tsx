import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorsPick from "./components/Editors-Pick";
import Bestseller from "./components/Bestseller";
import GreenDiv from "./components/GreenDiv";
import WhiteDiv from "./components/WhiteDiv"; 
import FeaturedPosts from "./components/Features-Post";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
     
      <Navbar />
      <Hero />
     <EditorsPick />
     <Bestseller />
     <GreenDiv />
     <WhiteDiv />
     <FeaturedPosts />
     <Footer />
     
    </div>
  );
}
