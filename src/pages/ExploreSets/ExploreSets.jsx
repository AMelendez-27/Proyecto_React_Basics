import React from 'react'
import './ExploreSets.css'
import GetSets from '../../components/GetSets/GetSets'

const ExploreSets = () => {
  return (
<div className='pokemon-browser-section'>
      <div className='pokemon-browser browser-container'>
        <h1 className='pokemon-browser browser-title'>Explore Sets</h1>
      </div>
      <div id='sets-showcase' className='pokemon-browser results-container'>
        <GetSets />
      </div>
    </div>
  )
}

export default ExploreSets