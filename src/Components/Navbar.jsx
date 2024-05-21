import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Importamos NavLink en lugar de Link
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Hamburger from './Hamburger';
import '../App.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <NextUINavbar isBordered variant="sticky" className={`navbar ${visible ? '' : 'hidden'}`}>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink exact to="/" className="nav-link">Inicio</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/projects" className="nav-link">Proyectos</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/about" className="nav-link">Acerca de mi</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/contact" className="nav-link">Contacto</NavLink>
        </NavbarItem>
      </NavbarContent>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
      </div>
      <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">Proyectos</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">Acerca de mi</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">Contacto</NavLink>
          </li>
        </ul>
      </div>
    </NextUINavbar>
  );
};

export default Navbar;
