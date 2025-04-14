import React from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../config';
import useFetch from '../../hooks/useFetch.jsx';

import './GetSetCards.css';

const GetSetCards = ({ set, order, cardCuantity }) => {
  // Build query parameters for ordering and limiting results
  let orderQuery = '';
  switch (order) {
    case 'highestFirst':
      orderQuery = `&orderBy=-tcgplayer.prices.holofoil.mid`;
      break;
    case 'lowestFirst':
      orderQuery = `&orderBy=tcgplayer.prices.holofoil.mid`;
      break;
  }

  const cuantityQuery = cardCuantity ? `&pageSize=${cardCuantity}` : '';
  const url = `https://api.pokemontcg.io/v2/cards?q=set.name:"${set}"${orderQuery}${cuantityQuery}&apiKey=${API_KEY}`;

  const { data: cardsImgs, loading, error } = useFetch(url);

  if (loading) {
    return (
      <div className="loading-message">
        <img src="/src/assets/loading.gif" alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!cardsImgs || cardsImgs.length === 0) {
    return <div className="no-data-message">No cards found for this set.</div>;
  }

  return (
    <div className="tcg-card-container">
      {cardsImgs.map((cardImg) => (
        <Link
          key={cardImg.id}
          className={'browsed-tcg'}
          id={`${cardImg.id}`}
          to={`/browse-pokemon/${cardImg.id}`}
        >
          <img
            key={cardImg.id}
            src={cardImg.images.small}
            alt={`Card image of ${cardImg.name}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default GetSetCards;