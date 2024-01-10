import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
 return (
    <div className="App">
      <Navbar />
      <h1>hello world</h1>
      <Outlet />
    </div>
 );
}

export default App;