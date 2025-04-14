import React from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config'; // Import the API_KEY
import useFetch from '../../hooks/useFetch.jsx';

import "./GetSets.css";

const GetSets = () => {
  const { data: setsImgs, loading } = useFetch(`https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate&apiKey=${API_KEY}`);

  if (loading) {
    return (
      <div className='loading-message'>
        <img src="/src/assets/loading.gif" alt="Loading..." />
      </div>
    ); // Show loading GIF while fetching
  }

  return (
    <div className='tcg-sets-container'>
      {setsImgs.map((setImg) => (
        <Link key={setImg.id} className={'tcg-set'} id={`${setImg.id}`} to={`/explore-sets/${setImg.name}`}>
          <img key={setImg.id} src={setImg.images.logo} alt={`Set image of ${setImg.name}`} />
        </Link>
      ))}
    </div>
  );
};

export default GetSets;