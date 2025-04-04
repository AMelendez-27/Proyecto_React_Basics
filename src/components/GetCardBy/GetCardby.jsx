import "./GetCardBy.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetCardBy = ({ filterType, filterData }) => {
  const [cardImg, setCardImg] = useState([]);

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

    fetch(`https://api.pokemontcg.io/v2/cards?q=${query}`)
      .then(response => response.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCardImg(response.data[0]);
        }
      });
  }, [filterType, filterData]);

  return (
    <div className='home-section single-tcg-card tcg-card-container'>
      <Link key={cardImg.id} className={'browsed-tcg'} id={`${cardImg.id}`} to={`/browse-pokemon/${cardImg.id}`}>
        {cardImg.images && <img src={cardImg.images.large} alt={`Card image of ${cardImg.name}`} />}
      </Link>
    </div>
  );
}

export default GetCardBy;