import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact-v" className="con-v-section">
      <div className="con-v-header">
        <h2 className="con-v-title">Get In <span>Touch</span></h2>
        <p className="con-v-subtitle">Let's build something amazing together!</p>
      </div>

      <div className="con-v-container">
        {/* Left Side: Info Cards */}
        <motion.div 
          className="con-v-info" 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="con-v-info-card glass-card">
            <div className="con-v-icon-box">
              <FaEnvelope />
            </div>
            <div className="con-v-info-text">
              <h4>Email Me</h4>
              <p>vivekjain.work@gmail.com</p> 
            </div>
          </div>

          <div className="con-v-info-card glass-card">
            <div className="con-v-icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="con-v-info-text">
              <h4>Location</h4>
              <p>Kolkata, West Bengal</p>
            </div>
          </div>

          <div className="con-v-social-box">
            <h4>Follow My Journey</h4>
            <div className="con-v-social-icons">
              <a href="https://linkedin.com/in/thevivekjain" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/thevivekjain" target="_blank" rel="noreferrer"><FaGithub /></a>
              
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          className="con-v-form-wrapper"
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form 
            action="https://formspree.io/f/xqeywprw" 
            method="POST"
            className="con-v-form glass-card"
          >
            <div className="con-v-input-row">
              <div className="con-v-field">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="con-v-field">
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>
            <div className="con-v-field">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="con-v-field">
              <textarea name="message" placeholder="How can I help you?" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="con-v-submit-btn">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;