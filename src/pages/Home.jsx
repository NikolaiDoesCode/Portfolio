import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import StatusBar from '../components/portfolio/StatusBar';
import Hero from '../components/portfolio/Hero';
import Experience from '../components/portfolio/Experience';
import Projects from '../components/portfolio/Projects';
import Collaborations from '../components/portfolio/Collaborations';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <StatusBar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Collaborations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
