import React, { useState, useEffect } from 'react';
import './PokemonById.css';
import { useParams } from 'react-router-dom';

const PokemonById = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=id:${id}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setPokemon(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, [id]);

  if (!pokemon) {
    return <div className='loading-message'>Loading...</div>;
  }

  return (
    <div className='browser-pokemon card-data'>
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

        {/* Renderiza pokemon-prices solo si pokemon.tcgplayer existe */}
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

export default PokemonById;