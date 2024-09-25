import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Information from './components/Information';
import './App.css'; // Import CSS file
import dogpic from '/Volumes/ssd1/dogpic.jpg';


const App = () => {
  return (
    <div className="app">
    {/* Header section with logo and navigation */}
    <header className="header">
      <div className="logo">
        <img src= {dogpic} alt="Website Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>

    {/* Other components will go here */}

  
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        {/* Dynamic route for each dog's information */}
        <Route path="/information/:chipNumber" element={<Information />} />
      </Routes>
    </div>
  );
};

export default App;
