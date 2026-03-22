import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Path check kar lena agar components folder mein hai
import Hero from './pages/Home'; 
import About from './pages/About'; 
import Skills from './pages/Skills'; // Naya page
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: '100px' }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;