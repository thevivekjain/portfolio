import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter,} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import '../styles/Hero.css';
import profileImg from '../assets/profile.jpeg'; // Apni photo check karein

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.1 } // Har letter ek ke baad ek aayega
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Hero = () => {
  const nameArray = "Vivek Kumar Jain".split(""); // Text ko letters mein toda

  return (
    <section id="home" className="hero">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-content"
      >
        <h4>Hello, I'm</h4>
        
        {/* Run-in Name Animation */}
        <motion.h1 initial="hidden" animate="visible" variants={container}>
          {nameArray.map((letter, index) => (
            <motion.span key={index} variants={item} style={{ display: "inline-block" }}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <h2 className="text-gradient typewriter">MERN Stack Developer</h2>
        <p>
  BUILDING HIGH-END DIGITAL EXPERIENCES FROM KOLKATA, WEST BENGAL. Focused on developing scalable MERN applications with clean architecture, strong DSA foundations, and integrating AI-driven features for smarter solutions.
</p>
        
        {/* Social Icons with individual links */}
        <div className="hero-socials">
          <a href="https://github.com/thevivekjain" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vivek-kumar-jain-31b189302" target="_blank"><FaLinkedin /></a>
          <a href="https://x.com/thevivekjainn" target="_blank"><FaTwitter /></a>
          <a href="https://leetcode.com/u/thevivekjain/" target="_blank"><SiLeetcode /></a>
        </div>

<div className="hero-btns">
  <Link to="/contact" className="contact-btn">
    Get In Touch
  </Link>
</div>
      </motion.div>

      {/* Profile Oval Circle and Shade */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
        className="hero-img-container"
      >
        <div className="blob-border">
          <img src={profileImg} alt="Vivek" className="profile-blob"/>
          <div className="blob-shade"></div> {/* Blue glowing shade inside */}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;