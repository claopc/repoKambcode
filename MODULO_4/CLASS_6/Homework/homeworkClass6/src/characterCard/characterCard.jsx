import React from 'react'
import './characterCard.css'
import Image from '../image/image'
import Title from '../title/title'
import Detail from '../detail/detail'

const CharacterCard = ({image, title, gender, status}) => {
    
  return (
    <div className='mainCard'>
        <div className='image'>
            <Image image={image}/>
        </div>
        <div className='status'>
            {status}
        </div>
        <div className='content'>
            <div className='title'>
                <Title title={title}/>
            </div>
            <div className='detail'>
                <Detail gender={gender}/>
            </div>

        </div>
    </div>
  )
}

export default CharacterCard