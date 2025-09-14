import React from "react";
import { CustomCursor } from "../components/CustomCursor";
import { Starfield } from "../components/Starfield";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-200 bg-slate-900 min-h-screen overflow-x-hidden selection:bg-cyan-300/20 cursor-none">
      <CustomCursor />
      <Starfield />
      <Header />
      <main className="max-w-5xl mx-auto">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
