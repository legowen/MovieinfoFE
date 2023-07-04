import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navigation from './components/Navigation';


function App() {

  const [navSearch, setNavSearch] = useState(true);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home setNavSearch={setNavSearch} />}/> 
        <Route path="/movies" element={<Movies setNavSearch={setNavSearch}/>}/> 
        <Route path="/:id" element={<MovieDetail setNavSearch={setNavSearch}/>}/> 
      </Routes>
    </div>
  );
}

export default App;
