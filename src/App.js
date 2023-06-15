import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/movies" element={<Movies/>}/> 
        <Route path="/:id" element={<MovieDetail/>}/> 
      </Routes>
    </div>
  );
}

export default App;
