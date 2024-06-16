import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Pictures from './pages/pictures/Pictures';

function App() {
  return (
    <div className='color'>
    <Routes >
      <Route  path='/' element={<Home/>}/>
      <Route path='/photos/' element={<Pictures/>}/>
    </Routes>
    </div>
  );
}

export default App;
