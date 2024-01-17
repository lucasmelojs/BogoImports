import React from 'react';
import './App.css';
//import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//hooks
import { useState, useEffect } from 'react';


function App() {
 return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
 );
}

export default App;