import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';  
import Catalog from './components/Catalog';  

const App = () => {
  return (
    <div className="container">
   
      <nav>
        <ul className="nav-links">
          {/* <li><a href="/">Hem</a></li> Direkt länk till Home */}
        </ul>
      </nav>

    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/catalog" element={<Catalog />} /> 
      </Routes>
    </div>
  );
};

export default App;