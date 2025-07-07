// src/App.jsx
import React, { useRef } from 'react';
// Hapus import { Routes, Route } dari 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Process from './pages/Process';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  // Buat ref untuk setiap section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);

  // Fungsi untuk menggulir ke section tertentu
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Kirim ref dan fungsi scrollToSection ke Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, servicesRef, portfolioRef, testimonialsRef, processRef, contactRef }}
      />
      <main>
        {/* Render semua section dan pasangkan ref */}
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Portfolio ref={portfolioRef} />
        <Testimonials ref={testimonialsRef} />
        <Process ref={processRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
