import React from 'react'
import { useParams } from 'react-router-dom'
import GetCardInfo from '../../components/GetCardInfo/GetCardInfo';

import './PokemonById.css';

const PokemonById = () => {
const { id } = useParams(); // Extract the Pokemon ID from the URL
  return (
    <div className='browsed-pokemon-section'>
      <GetCardInfo id={id}/>
    </div>
  );
};

export default PokemonById;