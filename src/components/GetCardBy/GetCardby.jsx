import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config'; // Import the API_KEY

import "./GetCardBy.css"

const GetCardBy = ({ filterType, filterData }) => {
  const [cardImg, setCardImg] = useState(null); // Initialize as null

  useEffect(() => {
    let query = '';
    switch (filterType) {
      case 'id':
        query = `id:${filterData}`;
        break;
      case 'name':
        query = `name:${filterData}`;
        break;
      case 'set':
        query = `set.id:${filterData}`;
        break;
      default:
        console.error('Invalid filter type');
        return;
    }

    fetch(`https://api.pokemontcg.io/v2/cards?q=${query}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCardImg(response.data[0]);
        }
      });
  }, [filterType, filterData]);

  if (!cardImg) {
    return (
      <div className='loading-message'>
        <img src="/src/assets/loading.gif" alt="Loading..." />
      </div>
    ); // Show loading GIF while fetching
  }

  return (
    <div className='home-section single-tcg-card tcg-card-container'>
      <Link key={cardImg.id} className={'browsed-tcg'} id={`${cardImg.id}`} to={`/browse-pokemon/${cardImg.id}`}>
        {cardImg.images && <img src={cardImg.images.large} alt={`Card image of ${cardImg.name}`} />}
      </Link>
    </div>
  );
}

export default GetCardBy;