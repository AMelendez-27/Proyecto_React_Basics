import "./GetCardCollection.css"
import React, { useState, useEffect } from 'react';

const GetCardCollection = ({ filterType, collection }) => {
  const [cardsImgs, setCardsImgs] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      let queryPrefix = '';
      switch (filterType) {
        case 'id':
          queryPrefix = 'id:';
          break;
        case 'name':
          queryPrefix = 'name:';
          break;
        case 'set':
          queryPrefix = 'set.id:';
          break;
        default:
          console.error('Invalid filter type');
          return;
      }

      const fetchedCards = [];
      for (const pokemon of collection) {
        const query = `${queryPrefix}${pokemon}`;
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${query}`);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          fetchedCards.push(data.data[0]);
        }
      }
      setCardsImgs(fetchedCards);
    };

    fetchCards();
  }, [filterType, collection]);

  return (
    <div className='home-section multiple-tcg-card tcg-card-container'>
      {cardsImgs.map((cardImg, index) => (
        cardImg.images && <img key={index} src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
      ))}
    </div>
  );
}

export default GetCardCollection;