import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../config';

import "./GetCardInfo.css";

const GetCardInfo = ({ id }) => { // Destructure id from props

  const [pokemon, setPokemon] = useState(null); // State to store the fetched Pokemon data

  useEffect(() => {
    // Fetch Pokemon data by ID from the API
    fetch(`https://api.pokemontcg.io/v2/cards?q=id:${id}&apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setPokemon(response.data[0]); // Set the first result as the Pokemon
        }
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, [id]);

  if (!pokemon) {
    return (
      <div className='loading-message'>
        <img src="/src/assets/loading.gif" alt="Loading..." />
      </div>
    ); // Show loading GIF while fetching
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

          {/* Render card prices only if the data exists */}
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
  )
}

export default GetCardInfo;