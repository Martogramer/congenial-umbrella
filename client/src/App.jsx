import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from './components/landing/Landing';
import Videogames from './components/videogames/Videogames';
import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/games" element={<Videogames />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;

