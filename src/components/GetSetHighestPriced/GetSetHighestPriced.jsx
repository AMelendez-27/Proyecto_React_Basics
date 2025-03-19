import React, { useState, useEffect } from 'react';
import "./GetSetHighestPriced.css"

const GetSetHighestPriced = ({ set, cardCuantity }) => {
  const [cardsImgs, setCardsImgs] = useState([]);

  set.split(' ').join('_');

  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards = [];
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.name:"${set}"&orderBy=-tcgplayer.prices.holofoil.mid`);
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        for (let i = 0; i < cardCuantity && i < data.data.length; i++) {
          fetchedCards.push(data.data[i]);
        }
      }
      setCardsImgs(fetchedCards);
    };

    fetchCards();
  }, [set, cardCuantity]);

  return (
    <div className='home-section highest-priced-tcg-cards tcg-card-container'>
      {cardsImgs.map((cardImg, index) => (
        cardImg.images && <img key={index} src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
      ))}
    </div>
  );
}

export default GetSetHighestPriced;