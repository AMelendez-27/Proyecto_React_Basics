import "./GetMultipleCardsby.css"
import React, { useState, useEffect } from 'react';

const GetMultipleCardsby = ({ filterType, filterData, cardCuantity }) => {
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

    for (let i = 0; i < cardCuantity; i++) {
      fetch(`https://api.pokemontcg.io/v2/cards?q=${query}`)
      .then(response => response.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCardImg(response.data[i]);
        }
      });
    }
  }, [filterType, filterData]);

  return (
    <div className='home-section random-generated-tcg-card tcg-card-container'>
      {data.map((cardImg) => (
        <img key={cardImg.id} src={cardImg.images.large} alt={`Card image of ${cardImg.name}`} />
      ))}
    </div>
  );
}

export default GetMultipleCardsby;