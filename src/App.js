import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home/Home.js';

function App() {
  return (
    <div className="App">
      <div className="SideBar">
        
      </div>
      <div className="Title">

      </div>
      <div className="Content">
      <Home />
      </div>



    </div>
  );
}

export default App;
