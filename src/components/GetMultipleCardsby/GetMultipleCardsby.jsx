import "./GetMultipleCardsBy.css"
import React, { useState, useEffect } from 'react';

const GetMultipleCardsBy = ({ filterType, filterData, cardCuantity }) => {
  const [cardsImgs, setCardsImgs] = useState([]);

  filterData.split(' ').join('_');

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
        query = `set.name:${filterData}`;
        break;
      default:
        console.error('Invalid filter type');
        return;
    }

    const fetchCards = async () => {
      const fetchedCards = [];
      for (let i = 0; i < cardCuantity; i++) {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${query}&orderBy=-tcgplayer.prices.holofoil.mid`)
        const data = await response.json()
        if (data.data && data.data.length > 0) {
          fetchedCards.push(data.data[i])
        }
      }
      setCardsImgs(fetchedCards)
    };

    fetchCards();
  }, [filterType, filterData, cardCuantity]);

  return (
    <div className='home-section multiple-tcg-card tcg-card-container'>
      {cardsImgs.map((cardsImgs, index) => (
        cardsImgs.images && <img key={index} src={cardsImgs.images.small} alt={`Card image of ${cardsImgs.name}`} />
      ))}
    </div>
  );
}

export default GetMultipleCardsBy;