import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BrowsePokemon from './pages/BrowsePokemon/BrowsePokemon';
import ExploreSets from './pages/ExploreSets/ExploreSets';
import About from './pages/About/About'
import Header from './components/Header/Header';
import CollectionBySetId from './pages/CollectionBySetId/CollectionBySetId';
import PokemonById from './pages/PokemonById/PokemonById';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-pokemon" element={<BrowsePokemon />} />
          <Route path="/browse-pokemon/:id" element={<PokemonById />} />
          <Route path="/explore-sets" element={<ExploreSets />} />
          <Route path="/explore-sets/:set" element={<CollectionBySetId />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App