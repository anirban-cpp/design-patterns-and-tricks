import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/images">Gallery</NavLink>
      <NavLink to="/hook">Hook</NavLink>
      <NavLink to="/carousel">Carousel</NavLink>
      <NavLink to="/fibonacci">Fibonacci</NavLink>
      <NavLink to="/upload">Upload</NavLink>
      <NavLink to="/animate">Animate</NavLink>
      <NavLink to="/framer">Framer</NavLink>
      <NavLink to="elements">Elements</NavLink>
      <NavLink to="parallax">Parallax Scroll</NavLink>
    </nav>
  );
};

export default Header;
