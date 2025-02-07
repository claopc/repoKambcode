import React from 'react'
import Title from '../title/title'
import Detail from '../detail/detail'
import Image from '../image/image'
import './characterCard.css'
  

const CharacterCard = ({image, name, status, gender}) => {
  return (
    <div className='card'>
      <Image urlImage = {image} />
      <Title name={name}/>
      <Detail status={status} gender={gender}/>
    </div>
  )
}

export default CharacterCard