import React, { Fragment } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Landing from './components/landing/Landing';
import Videogames from './components/home/Home';



function App() {
  return (
    <Fragment>
      <div className='App'>
        <Routes>
          <Route exact path="/games" element={<Videogames />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
  </Fragment>
  );
}

export default App;

