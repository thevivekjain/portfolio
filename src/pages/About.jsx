import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiLeetcode, SiJavascript, SiReact, SiMongodb, 
  SiNodedotjs, SiGithub,
   SiPython 
} from 'react-icons/si';
import { FaLayerGroup, FaJava, FaTerminal, FaTools } from 'react-icons/fa';
import '../styles/About.css';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  return (
    <section className="abt-vivek-section">
      <div className="abt-vivek-container">
        
        {/* NEW: Top Header & Paragraph */}
        <div className="abt-vivek-section-header">
          <h1 className="abt-vivek-main-title">About <span>Me</span></h1>
          <p className="abt-vivek-subtitle">A brief look into my journey, skills, and professional philosophy.</p>
        </div>

        {/* TOP SECTION: Single Integrated Profile & Bio Card */}
        <motion.div 
          className="abt-vivek-hero-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="abt-vivek-hero-left">
            <div className="abt-vivek-img-container">
              <img src={profileImg} alt="Vivek" className="abt-vivek-pic" />
            </div>
            <div className="abt-vivek-quick-stats">
             
              <div className="stat-item">💻 4+ Projects</div>
            </div>
          </div>

          <div className="abt-vivek-hero-right">
            <h2>A Full Stack Engineer driven by <span>innovation.</span></h2>
 <div className="abt-vivek-bio-text">
  <p>
    Hello! I'm <b>Vivek Kumar Jain</b>, a passionate MERN Stack Developer with a strong foundation in building scalable, user-centric web applications. I specialize in developing full-stack solutions using MongoDB, Express.js, React, and Node.js, focusing on performance, clean architecture, and seamless user experience.
  </p>

  <p>
    I have hands-on experience building real-world applications like lawyer management systems and campus workflow platforms. I enjoy working across the stack, creating efficient APIs, responsive interfaces, and optimized database structures.
  </p>

  <p>
    I have a solid understanding of <b>Data Structures and Algorithms (DSA)</b>, helping me write efficient and optimized code. I also work on <b>AI integration</b> to build smarter and more effective applications.
  </p>

  <p>
    I am always eager to learn, build impactful products, and collaborate on innovative projects.
  </p>
</div>
            <div className="abt-vivek-badge">B.Tech Information Technology</div>
          </div>
        </motion.div>

        {/* BOTTOM SECTION: Point-wise Technology Cards */}
        <div className="abt-vivek-right-grid">
          
         <motion.div className="abt-tech-card tech-blue glass-card" whileHover={{ y: -5 }}>
  <div className="tech-card-header">
    <FaLayerGroup className="tech-icon" />
    <h3>Core Technologies</h3>
  </div>
  <ul>
    <li><SiJavascript /> JavaScript (ES6+)</li>
    <li>
      <FaJava /> Java, 
      <SiPython /> Python, 
      <span>💻</span> C
    </li>
    
    <li><SiReact /> React.js</li>
    <li><SiNodedotjs /> Node.js & <span>🚀</span> Express.js</li>
    <li><SiMongodb /> MongoDB</li>
  </ul>
</motion.div>

        <motion.div className="abt-tech-card tech-purple glass-card" whileHover={{ y: -5 }}>
  <div className="tech-card-header">
    <FaTools className="tech-icon" />
    <h3>Tools & Workflow</h3>
  </div>
  <ul>
    <li><FaTerminal /> VS Code, Linux/Windows Terminal</li>
    <li><SiGithub /> Version Control: Git, GitHub</li>
    <li><span>🔗</span> API Testing: Postman, REST APIs</li>
    <li><span>🤖</span> AI Integration: OpenAI API</li>
  </ul>
</motion.div>

          <motion.div className="abt-tech-card tech-orange glass-card" whileHover={{ y: -5 }}>
            <div className="tech-card-header">
              <SiLeetcode className="tech-icon" />
              <h3>Problem Solving</h3>
            </div>
            <div className="achieve-content">
              <p>Solved <b>120+ Problems</b> on LeetCode with a strong focus on Java & Data Structures.</p>
              <div className="skill-tags">
                <span>Arrays</span> <span>Strings</span> <span>Stack</span> <span>Queue</span> <span>Binary Search</span> <span>Hash Map</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;