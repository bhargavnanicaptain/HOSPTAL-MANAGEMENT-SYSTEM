import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctor from './Doctor';
import Patients from './Patients';
import Home from './Home';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;