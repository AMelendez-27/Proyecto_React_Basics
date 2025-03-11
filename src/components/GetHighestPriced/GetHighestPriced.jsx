import React, { useState, useEffect } from 'react';
import "./GetHighestPriced.css"

const GetHighestPriced = (cardCuantity) => {
  const [cardImg, setCardImg] = useState([]);

  useEffect(() => {
    for (let i = 0; i < cardCuantity; i++) {
      fetch(`https://api.pokemontcg.io/v2/cards?orderBy=-tcgplayer.prices.holofoil.mid`)
      .then(response => response.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCardImg(response.data[i]);
        }
      });
    }
  }, []);

  return (
    <div className='home-section random-generated-tcg-card tcg-card-container'>
      {cardImg.images && <img src={cardImg.images.large} alt={`Card image of ${cardImg.name}`} />}
    </div>
  );
}

export default GetHighestPriced;