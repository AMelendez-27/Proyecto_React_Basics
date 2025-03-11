import "./GetMultipleCardsby.css"
import React, { useState, useEffect } from 'react';

const GetMultipleCardsby = ({ filterType, filterData, cardCuantity }) => {
  const [cardImgs, setCardImgs] = useState([]);

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

    const fetchCards = async () => {
      const fetchedCards = [];
      for (let i = 0; i < cardCuantity; i++) {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${query}`);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          fetchedCards.push(data.data[i]);
        }
      }
      setCardImgs(fetchedCards);
    };

    fetchCards();
  }, [filterType, filterData, cardCuantity]);

  return (
    <div className='home-section multiple-tcg-card tcg-card-container'>
      {cardImgs.map((cardImg, index) => (
        cardImg.images && <img key={index} src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
      ))}
    </div>
  );
}

export default GetMultipleCardsby;