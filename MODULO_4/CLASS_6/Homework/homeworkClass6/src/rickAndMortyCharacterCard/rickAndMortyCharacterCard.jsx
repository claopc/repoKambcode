import React from 'react'
import CharacterCard from '../characterCard/characterCard'
import { useEffect } from 'react'
import { useState } from 'react'
import './rickAndMortyCharacterCard.css'

const RickAndMortyCharacterCard = () => {

    const [characterList, setCharacterList] = useState([]);
   
    useEffect(() => {
        async function apiRick() {
            try {
                const urlApi = 'https://rickandmortyapi.com/api/character';
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
                    <CharacterCard
                    image={character.image}
                    title={character.name}
                    status={character.status}
                    gender={character.gender}
                    />
                )
            })
        }
        <CharacterCard />
    </div>
  )
}

export default RickAndMortyCharacterCard