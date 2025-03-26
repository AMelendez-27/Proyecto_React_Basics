import React from 'react'
import './CollectionBySetId.css'
import { useParams } from 'react-router-dom'
import GetSetCards from '../../components/GetSetCards/GetSetCards'

const CollectionBySetId = () => {
  const { set } = useParams()
  return (
    <div>
      <h2>{set}</h2>
      <div>
        <GetSetCards set={set} />
      </div>
    </div>
  )
}

export default CollectionBySetId