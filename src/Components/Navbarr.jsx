import React, { useState, useEffect } from 'react';
import { Link } from "@nextui-org/react";
import Hamburger from './Hamburger';
import '../App.css';

const Navbarr = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (currentScrollPos > 100 && currentScrollPos < prevScrollPos) {
        setShowNavbar(true);
      } else if (currentScrollPos > prevScrollPos) {
        setShowNavbar(false);
      } else if (currentScrollPos === 0) {
        setShowNavbar(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setShowNavbar(false);
    }
  };

  return (
    <nav className={`custom-navbar ${showNavbar ? '' : 'hide-navbar'}`}>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
      </div>
      <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
        <Link className="nextui-link" onClick={() => handleScrollToSection('home-section')}>Inicio</Link>
        <Link className="nextui-link" onClick={() => handleScrollToSection('about-section')}>Acerca de mí</Link>
        <Link className="nextui-link" onClick={() => handleScrollToSection('projects-section')}>Proyectos</Link>
        <Link className="nextui-link" onClick={() => handleScrollToSection('contact-section')}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbarr;
