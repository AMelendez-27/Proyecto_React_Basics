import React from 'react'
import './BrowsePokemon.css'
import GetSetCards from '../../components/GetSetCards/GetSetCards'

const BrowsePokemon = () => {
  return (
    <div className='pokemon-browser-section'>
      <div className='pokemon-browser browser-container'>
        <h1 className='pokemon-browser browser-title'>Latest Pokemon TCG set released</h1>
      </div>
      <div id='cards-showcase' className='pokemon-browser results-container active'>
        <GetSetCards set={'Journey Together'} />
      </div>
    </div>
  )
}

export default BrowsePokemon