import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./GetSetCards.css";

const GetSetCards = ({ set, order, cardCuantity }) => {
  const [cardsImgs, setCardsImgs] = useState(null); // Initialize as null

  useEffect(() => {
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

    let cuantityQuery = cardCuantity ? `&pageSize=${cardCuantity}` : '';

    const fetchCards = async () => {
      try {
        // Fetch cards from the API based on the set name
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.name:"${set}"${orderQuery}${cuantityQuery}&apiKey=aff71417-95ac-4d2e-bf51-891f3e425a5e`);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setCardsImgs(data.data); // Store the fetched cards
        } else {
          setCardsImgs([]); // Set to empty array if no data is returned
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
        setCardsImgs([]); // Handle error by setting to empty array
      }
    };

    fetchCards();
  }, [set, order, cardCuantity]);

  if (!cardsImgs) {
    return (
      <div className='loading-message'>
        <img src="/src/assets/loading.gif" alt="Loading..." /> {/* Replace with the path to your GIF */}
      </div>
    );
  }

  return (
    <div className='tcg-card-container'>
      {cardsImgs.map((cardImg) => (
        <Link key={cardImg.id} className={'browsed-tcg'} id={`${cardImg.id}`} to={`/browse-pokemon/${cardImg.id}`}>
          <img key={cardImg.id} src={cardImg.images.small} alt={`Card image of ${cardImg.name}`} />
        </Link>
      ))}
    </div>
  );
};

export default GetSetCards;