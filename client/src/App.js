import './App.css';
import {Route, Routes} from "react-router-dom";
import React, { Fragment } from 'react';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';


 function App() {
  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Fragment>
  );
}

export default App;
