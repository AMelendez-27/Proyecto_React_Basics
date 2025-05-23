import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BrowsePokemon from './pages/BrowsePokemon/BrowsePokemon';
import ExploreSets from './pages/ExploreSets/ExploreSets';
import About from './pages/About/About';
import Header from './components/Header/Header';
import CollectionBySetId from './pages/CollectionBySetId/CollectionBySetId';
import PokemonById from './pages/PokemonById/PokemonById';
import CompactHeader from './components/CompactHeader/CompactHeader';
import Footer from './components/Footer/Footer';

const App = () => {
  const [isCompact, setIsCompact] = useState(window.innerWidth <= 820);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth <= 820);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app-container">
      {isCompact ? <CompactHeader /> : <Header />}
      <div className="content">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/browse-pokemon" element={<BrowsePokemon />} />
          <Route path="/browse-pokemon/:id" element={<PokemonById />} />
          <Route path="/explore-sets" element={<ExploreSets />} />
          <Route path="/explore-sets/:set" element={<CollectionBySetId />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;