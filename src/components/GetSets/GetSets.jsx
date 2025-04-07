import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./GetSets.css";

const GetSets = () => {
  const [setsImgs, setSetsImgs] = useState([]);

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate&apiKey=aff71417-95ac-4d2e-bf51-891f3e425a5e`);
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
    return <div className='loading-message'>Loading...</div>;
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