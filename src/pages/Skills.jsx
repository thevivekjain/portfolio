import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, 
  FaDatabase, FaGitAlt, FaJava, FaCode, FaNetworkWired, FaDesktop 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiC, SiCplusplus 
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26"/>, level: "90%" },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6"/>, level: "95%" },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E"/>, level: "90%" },
    { name: "React", icon: <FaReact color="#61DBFB"/>, level: "80%" },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A"/>, level: "85%" }, 
    { name: "Express", icon: <SiExpress color="#fff"/>, level: "80%" },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D"/>, level: "70%" },
    { name: "Git", icon: <FaGitAlt color="#F05032"/>, level: "85%" },
    { name: "DSA", icon: <FaCode color="#FFD700"/>, level: "80%" },
    { name: "Java", icon: <FaJava color="#007396"/>, level: "98%" },
    { name: "C Language", icon: <SiC color="#A8B9CC"/>, level: "80%" },
    { name: "Python", icon: <FaPython color="#3776AB"/>, level: "70%" },
    { name: "OOPS", icon: <SiCplusplus color="#00599C"/>, level: "85%" },
    { name: "DBMS", icon: <FaDatabase color="#4479A1"/>, level: "80%" },
    { name: "Operating System", icon: <FaDesktop color="#fff"/>, level: "80%" },
    { name: "Computer Networking", icon: <FaNetworkWired color="#1CA261"/>, level: "75%" },
    
    
   
  ];

  return (
    <div className="skill-v-page">
      {/* Header Section Sahi Kiya Gaya Hai */}
      <div className="skill-v-header-container">
        <h2 className="skill-v-main-title">My Technical <span>Skills</span></h2>
        <p className="skill-v-subtitle">Core CS fundamentals and Full-Stack Development expertise.</p>
      </div>

      <div className="skill-v-grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            className="skill-v-card glass-card" 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="skill-v-content">
              <div className="skill-v-icon-box">{skill.icon}</div>
              <div className="skill-v-details">
                <h4>{skill.name}</h4>
                <p>{skill.level} Proficiency</p>
              </div>
            </div>
            <div className="skill-v-progress-bg">
              <motion.div 
                className="skill-v-progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;