import React, { useState, useEffect } from 'react';
import "./GetRandomTCG.css"

const GetRandomTCG = () => {
  const [cardImg, setCardImg] = useState(null);

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards?orderBy=-tcgplayer.prices.holofoil.mid`)
      .then(response => response.json())
      .then((response) => {setCardImg(response.data[0])});
  }, []);

  return (
    <div className='home-section random-generated-tcg-card tcg-card-container'>
      {cardImg && <img src={cardImg.images.large} alt={`Card image of ${cardImg.name}`} />}
    </div>
  );
}

export default GetRandomTCG;