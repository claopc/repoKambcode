import React from 'react'
import './episodeCard.css'
import Date from '../date/date'
import Episode from '../episode/episode'
import Title from '../../../../../CLASS_6/Homework/homeworkCard/src/title/title'

const episodeCard = ({date, title,  episode}) => {
    
  return (
    <div className='mainCard'>
        <div className='whiteCard'>
            <div className='title'>
                <Title title={title}/>
            </div>
            <div className='episode'>
                <Episode episode={episode}/>
            </div>
            <div className='date'>
                <Date date={date}/>
            </div>
        </div>
    </div>
  )
}

export default episodeCard