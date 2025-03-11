import React, { useState, useEffect } from 'react';
import "./GetHighestPriced.css"

const GetHighestPriced = (cardCuantity) => {
  const [cardImg, setCardImg] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards = []
      for (let i = 0; i < cardCuantity; i++) {
        fetch(`https://api.pokemontcg.io/v2/cards?orderBy=-tcgplayer.prices.holofoil.mid`)
        const data = await response.json()
        if (data.data && data.data.length > 0) {
          fetchedCards.push(data.data[i])
        }
      }
      setCardImgs(fetchedCards)
    }

    fetchCards()
  }, [cardCuantity]);

  return (
    <div className='home-section highest-priced-tcg-cards tcg-card-container'>
      {cardImgs.map((cardImg, index) => (
        cardImg.images && <img key={index} src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
      ))}
    </div>
  );
}

export default GetHighestPriced;