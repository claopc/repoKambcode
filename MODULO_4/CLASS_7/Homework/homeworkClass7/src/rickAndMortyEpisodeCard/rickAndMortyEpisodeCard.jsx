import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './rickAndMortyEpisodeCard.css'
import EpisodeCard from '../episodeCard/episodeCard'

const RickAndMortyEpisodeCard = () => {

    const [characterList, setCharacterList] = useState([]);
   
    useEffect(() => {
        async function apiRick() {
            try {                
                const urlApi = 'https://rickandmortyapi.com/api/episode?page=1';
                const response = await fetch(urlApi);
                const data = await response.json();

                setCharacterList(data.results)

                console.log(data), 'Datos'
                
            } catch (error) {
               console.log(error)
            }
            
        }
        apiRick();
    }, [])
    
  return (
    <div className='card'>
            {
            characterList.map((character) => {
                return(
                    <EpisodeCard
                    key={character.id}
                    episode={character.episode}
                    title={character.name}
                    date={character.air_date}                 
                    />
                )
            })
        }
        <EpisodeCard />
    </div>
  )
}

export default RickAndMortyEpisodeCard