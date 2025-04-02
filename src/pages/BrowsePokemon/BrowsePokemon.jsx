import React from 'react'
import './BrowsePokemon.css'
import GetSetCards from '../../components/GetSetCards/GetSetCards'

const BrowsePokemon = () => {
  return (
    <div className='pokemon-browser-section'>
      <div className='pokemon-browser browser-container'>
        <h1 className='pokemon-browser browser-title'>Browse Pokemon</h1>
        <input className='pokemon-browser browser-input' id='pokemon-name-filter' placeholder='Enter Pokemon name'/>
        <input className='pokemon-browser browser-input' id='pokemon-set-filter' placeholder='Enter Pokemon TCG set'/>
        <select className='pokemon-browser browser-input' id='pokemon-rarity-filter'>
          <option value=''>-- Select a Rarity --</option>
          <option value='Common'>Common</option>
          <option value='Uncommon'>Uncommon</option>
          <option value='Rare'>Rare</option>
          <option value='Rare Holo'>Rare Holo</option>
          <option value='Double Rare'>Double Rare</option>
          <option value='ACE SPEC Rare'>ACE SPEC Rare</option>
          <option value='Ultra Rare'>Ultra Rare</option>

          <option value='Rare ACE'>Rare ACE</option>
          <option value='Rare BREAK'>Rare BREAK</option>
          <option value='Rare Holo'>Rare Holo</option>
          <option value='Rare Holo EX'>Rare Holo EX</option>
          <option value='Rare Holo GX'>Rare Holo GX</option>
          <option value='Rare Holo LV.X'>Rare Holo LV.X</option>
          <option value='Rare Holo Star'>Rare Holo Star</option>
          <option value='Rare Holo V'>Rare Holo V</option>
          <option value='Rare Holo VMAX'>Rare Holo VMAX</option>
          <option value='Rare Prime'>Rare Prime</option>
          <option value='Rare Prism Star'>Rare Prism Star</option>
          <option value='Rare Rainbow'>Rare Rainbow</option>
          <option value='Rare Shining'>Rare Shining</option>
          <option value='Rare Shiny'>Rare Shiny</option>
          <option value='Rare Shiny GX'>Rare Shiny GX</option>
          <option value='Rare Ultra'>Rare Ultra</option>

          <option value='Rare Secret'>Secret Rare</option>
          <option value='Illustration Rare'>Illustration Rare</option>
          <option value='Special Illustration Rare'>Special Illustration Rare</option>
          <option value='Shiny Rare'>Shiny Rare</option>
          <option value='Shiny Ultra Rare'>Shiny Ultra Rare</option>

          <option value='Hyper Rare'>Hyper Rare</option>
          <option value='Amazing Rare'>Amazing Rare</option>
          <option value='LEGEND'>LEGEND</option>
          <option value='Promo'>Promo</option>
        </select>
        <button className='pokemon-browser pokemon-browser-button'>Search</button>
      </div>
      <div id='default-showcase' className='pokemon-browser results-container active'>
        <GetSetCards set={'Prismatic Evolutions'} />
      </div>
      <div id='filter-search' className='pokemon-browser results-container'>
        <GetSetCards set={'Prismatic Evolutions'} />
      </div>
    </div>
  )
}

export default BrowsePokemon