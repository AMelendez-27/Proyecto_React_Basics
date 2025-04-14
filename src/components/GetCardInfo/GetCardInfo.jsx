import React from 'react';
import { API_KEY } from '../../config';
import useFetch from '../../hooks/useFetch.jsx';

import "./GetCardInfo.css";

const GetCardInfo = ({ id }) => { // Destructure id from props
  // Construir la URL para la API
  const url = `https://api.pokemontcg.io/v2/cards?q=id:${id}&apiKey=${API_KEY}`;
  const { data, loading, error } = useFetch(url);

  // Verificar si los datos están disponibles
  const pokemon = data && data.length > 0 ? data[0] : null;

  if (loading) {
    return (
      <div className='loading-message'>
        <img src="/src/assets/loading.gif" alt="Loading..." />
      </div>
    ); // Mostrar GIF de carga mientras se obtienen los datos
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>; // Mostrar mensaje de error si ocurre un problema
  }

  if (!pokemon) {
    return <div className="no-data-message">No information found for this card.</div>; // Mostrar mensaje si no hay datos
  }

  return (
    <div className='card-data'>
      <div className='card-img'>
        <img src={pokemon.images.large} alt={`Image of ${pokemon.name} TCG card`} />
      </div>
      <div className='card-info'>
        <h1 className='card-name'>{pokemon.name}</h1>
        <div className='card-details'>
          <h2>Info</h2>
          <p>Set collection: {pokemon.set.name}</p>
          <p>Rarity: {pokemon.rarity}</p>
          <p>Number: {pokemon.number}</p>
          <p>Release date: {pokemon.set.releaseDate}</p>
        </div>

        {/* Renderizar precios solo si existen */}
        {pokemon.tcgplayer && pokemon.tcgplayer.prices && (
          <div className='card-prices-container'>
            <h2>Card market prices</h2>
            <div className='card-prices-info'>
              {pokemon.tcgplayer.prices.normal && (
                <div className='card-prices'>
                  <h3>Normal card prices</h3>
                  <p>Low price: {pokemon.tcgplayer.prices.normal.low}$</p>
                  <p>Mid price: {pokemon.tcgplayer.prices.normal.mid}$</p>
                  <p>High price: {pokemon.tcgplayer.prices.normal.high}$</p>
                </div>
              )}
              {pokemon.tcgplayer.prices.reverseHolofoil && (
                <div className='card-prices'>
                  <h3>Reverse Holofoil card prices</h3>
                  <p>Low price: {pokemon.tcgplayer.prices.reverseHolofoil.low}$</p>
                  <p>Mid price: {pokemon.tcgplayer.prices.reverseHolofoil.mid}$</p>
                  <p>High price: {pokemon.tcgplayer.prices.reverseHolofoil.high}$</p>
                </div>
              )}
              {pokemon.tcgplayer.prices.holofoil && (
                <div className='card-prices'>
                  <h3>Holofoil card prices</h3>
                  <p>Low price: {pokemon.tcgplayer.prices.holofoil.low}$</p>
                  <p>Mid price: {pokemon.tcgplayer.prices.holofoil.mid}$</p>
                  <p>High price: {pokemon.tcgplayer.prices.holofoil.high}$</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetCardInfo;