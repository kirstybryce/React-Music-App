import React from 'react';
import './App.css';
import CardGrid from '../CardGrid/CardGrid';
import HappyMusic from '../MusicComponents/HappyMusic/HappyMusic';
import SadMusic from '../MusicComponents/SadMusic/SadMusic';
import ExcitedMusic from '../MusicComponents/ExcitedMusic/ExcitedMusic';
import AngryMusic from '../MusicComponents/AngryMusic/AngryMusic';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Home() {
  return(
    <div id='app-div'>
      <h1>Today, I am feeling...</h1>
      <CardGrid/>   
    </div>
  )
  
}

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/happy' element={<HappyMusic/>} />
            <Route path='/sad' element={<SadMusic/>} />
            <Route path='/excited' element={<ExcitedMusic/>} />
            <Route path='/angry' element={<AngryMusic/>} />
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;
