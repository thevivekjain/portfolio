import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Project.css';

// Images Import
import nyayGharImg from '../assets/y.png'; 
import collegeTrackerImg from '../assets/z.png'; 
import foodDeliveryImg from '../assets/x.png';

const Projects = () => {
  const projectData = [
    {
      title: "Nyay Ghar",
      subtitle: "Lawyer Management System",
      desc: "Nyay Ghar is a comprehensive legal ecosystem designed to bridge the gap between lawyers and clients. It features a sophisticated Case Lifecycle Management system, document automation, and 'Nyay AI' for legal research. Built with the MERN stack, it ensures secure data handling with role-based access for advocates, clerks, and clients, making legal operations paperless and efficient.",
      tech: ["MongoDB", "Express", "React", "Node.js", "AI Integration"],
      github: "https://github.com/thevivekjain/nyay-frontend",
      live: "https://nyay-frontend.onrender.com",
      img: nyayGharImg
    },
    {
      title: "College Tracker",
      subtitle: "Digital Campus Administration",
      desc: "College Tracker is a specialized administrative tool designed to automate the internal document approval process within academic institutions. It replaces slow manual paperwork with a digital pipeline where staff can track the real-time status of their applications. The system includes features like digital signatures, automated notifications, and a centralized dashboard for college authorities.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Framer Motion"],
      github: "https://github.com/thevivekjain/collage-tracker-frontend",
      live: "https://college-tracker-vivek.vercel.app",
      img: collegeTrackerImg
    },
    {
      title: "Jain Food Delivery",
      subtitle: "Frontend Food Ordering App",
      desc: "This project is a high-performance, visually stunning food delivery interface built to provide a premium dining-at-home experience. It focuses on pixel-perfect UI/UX, featuring smooth menu filtering, dynamic cart management, and a fully responsive design for all devices. It demonstrates advanced CSS techniques and React state management to create a seamless user flow from browsing to checkout.",
      tech: ["React.js", "CSS3", "Responsive Design", "UI/UX"],
      github: "https://github.com/thevivekjain/jain-food-delivery-frontend",
      live: "https://jain-food-delivery-frontend.vercel.app",
      img: foodDeliveryImg
    }
  ];

  return (
    <section id="project-v" className="proj-v-section">
      <div className="proj-v-header">
        <h2 className="proj-v-title">My <span>Projects</span></h2>
        <p className="proj-v-subtitle">Real-world applications built with precision.</p>
      </div>
      
      <div className="proj-v-grid">
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            className="proj-v-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="proj-v-img-box">
              <img src={project.img} alt={project.title} />
            </div>
            
            <div className="proj-v-content">
              <span className="proj-v-cat">{project.subtitle}</span>
              <h3 className="proj-v-name">{project.title}</h3>
              
              {/* Actions First */}
              <div className="proj-v-actions">
                <a href={project.live} target="_blank" rel="noreferrer" className="action-pill pill-demo">
                  <FaExternalLinkAlt /> View Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="action-pill pill-code">
                  <FaGithub /> Source Code
                </a>
              </div>

        
              <div className="proj-v-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="proj-v-pill">#{tag}</span>
                ))}
              </div>

              {/* Description Last */}
              <div className="proj-v-desc">
                <p>{project.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;