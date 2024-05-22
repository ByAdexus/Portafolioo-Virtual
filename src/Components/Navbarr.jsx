import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Hamburger from './Hamburger';

const Navbarr = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Navbar shouldHideOnScroll className="custom-navbar">
      <NavbarContent className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
      </NavbarContent>
      <NavbarContent className={`nav-elements ${showNavbar ? "active" : ""}`} justify="center">
        <NavbarItem>
          <Link className="nextui-link" as={NavLink} to="/" exact>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nextui-link" as={NavLink} to="/projects">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nextui-link" as={NavLink} to="/about">
            Acerca de mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="nextui-link" as={NavLink} to="/contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navbarr;
