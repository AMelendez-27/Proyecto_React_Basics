import React from 'react'
import { useParams } from 'react-router-dom'
import GetSetCards from '../../components/GetSetCards/GetSetCards'

import './CollectionBySetId.css'

const CollectionBySetId = () => {
  const { set } = useParams()
  return (
    <div className='pokemon-set-collection-section'>
      <h1>{set}</h1>
      <div>
        <GetSetCards set={set} />
      </div>
    </div>
  )
}

export default CollectionBySetId