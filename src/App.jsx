import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Events from './components/Events';
import Home from './components/Home';
import DefaultNav from './components/DefaultNav';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Timeline from './components/Timeline';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<DefaultNav/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='events' element={<Events/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='timeline' element={<Timeline/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='subscribe' element={<Subscribe/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
