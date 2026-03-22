import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar glass-card">
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        Vivek<span>.</span>
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>   
        <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
        <li><NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink></li>
        <li><NavLink to="/project" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Me</NavLink></li>
      </ul>

      <div className="social-icons-nav">
        <a href="/resume.pdf" target="_blank" className="resume-btn">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;