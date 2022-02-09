import './App.css';
import {Route, Routes} from "react-router-dom";
import React, { Fragment } from 'react';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';


 function App() {
  return (
    <Fragment>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  </Fragment>
  );
}

export default App;
