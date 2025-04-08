import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config'; // Import the API_KEY

import "./GetSets.css";

const GetSets = () => {
  const [setsImgs, setSetsImgs] = useState(null); // Initialize as null

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate&apiKey=${API_KEY}`);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setSetsImgs(data.data);
        }
      } catch (error) {
        console.error("Error fetching sets:", error);
      }
    };

    fetchSets();
  }, []);

  if (!setsImgs) {
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