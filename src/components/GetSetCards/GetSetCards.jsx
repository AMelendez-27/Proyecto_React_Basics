import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./GetSetCards.css";

const GetSetCards = ({ set, order, cardCuantity }) => {
  const [cardsImgs, setCardsImgs] = useState([]);

  useEffect(() => {
    let orderQuery = '';
    switch (order) {
      case 'highestFirst':
        orderQuery = `&orderBy=-tcgplayer.prices.holofoil.mid`;
        break;
      case 'lowestFirst':
        orderQuery = `&orderBy=tcgplayer.prices.holofoil.mid`;
        break;
    }

    if (order === null) {orderQuery = ''}

    let cuantityQuery = '';
    if (cardCuantity === null) {cuantityQuery = ''} else {cuantityQuery = `&pageSize=${cardCuantity}`}

    const fetchCards = async () => {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.name:"${set}"${orderQuery}${cuantityQuery}&apiKey=aff71417-95ac-4d2e-bf51-891f3e425a5e`);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setCardsImgs(data.data);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, [set, order, cardCuantity]);

  return (
    <div className='home-section highest-priced-tcg-cards tcg-card-container'>
      {cardsImgs.map((cardImg) => (
          <Link key={cardImg.id} className={'browsed-tcg'} id={`${cardImg.id}`} to={`/browse-pokemon/${cardImg.id}`}>
            <img key={cardImg.id} src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
          </Link>
      ))}
    </div>
  );
};

export default GetSetCards;