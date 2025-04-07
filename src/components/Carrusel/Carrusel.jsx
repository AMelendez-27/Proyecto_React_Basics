import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config'; // Import the API_KEY

import "./Carrusel.css";

const Carrusel = ({ set, order, cardCuantity }) => {
  const [cardsImgs, setCardsImgs] = useState(null); // Initialize as null

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
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.name:"${set}"${orderQuery}${cuantityQuery}&apiKey=${API_KEY}`);
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

  if (!cardsImgs) {
    return (
      <div className='loading-message'>
        <img src="/assets/loading.gif" alt="Loading..." /> {/* Replace with the path to your GIF */}
      </div>
    ); // Show loading GIF while fetching
  }

  return (
    <div className="carrusel-container">
      <div className="carrusel">
        {/* Renderiza las imágenes originales */}
        {cardsImgs.map((cardImg, index) => (
          <Link key={index} className={'browsed-tcg'} id={`${cardImg.id}`} to={`/browse-pokemon/${cardImg.id}`}>
            <img src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
          </Link>
        ))}

        {/* Duplica las imágenes para el efecto infinito */}
        {cardsImgs.map((cardImg, index) => (
          <Link key={`duplicate-${index}`} className={'browsed-tcg'} id={`${cardImg.id}`} to={`/browse-pokemon/${cardImg.id}`}>
            <img src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;