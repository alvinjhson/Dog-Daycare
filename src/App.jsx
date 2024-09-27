import React, { useState } from 'react'; 
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Information from './components/Information';
import './App.css'; 
import dogpic from '/Volumes/ssd1/dogpic.jpg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <div className="app">
      
      <nav className="nav">
        <div className="logo">
          <img src={dogpic} alt="Website Logo" />
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; 
        </div>

       
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
           
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
          
            <Link to="/catalog" onClick={closeMenu}>Catalog</Link>
          </li>
        </ul>
      </nav>

    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/information/:chipNumber" element={<Information />} />
      </Routes>
    </div>
  );
};

export default App;
