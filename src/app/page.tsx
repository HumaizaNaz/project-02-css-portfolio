import React from 'react';
import Navbar from '@/Components/Navbar';
import HeroSection from '@/Components/HeroSection';
import About from '@/Components/About';
import SkillSection from '@/Components/SkillSection';
import Services from '@/Components/Services';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
    <SkillSection />
    <Services />
    <Projects />
    <Contact />
    <Footer />

    
    </div>
  )
}

export default page
