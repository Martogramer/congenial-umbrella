import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from './components/landing/Landing';
import Videogames from './components/videogames/Videogames';



function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/games" element={<Videogames />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;

