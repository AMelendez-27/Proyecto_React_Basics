import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PokemonByName from './pages/PokemonByName/PokemonByName';
import PokemonById from './pages/PokemonById/PokemonById';
import About from './pages/About/About'
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-by-name" element={<PokemonByName />} />
        <Route path="/pokemon-by-id" element={<PokemonById />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App