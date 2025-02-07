import React from 'react'
import { useState } from 'react';
import CharacterCard from '../characterCard/characterCard';
import { useEffect } from 'react';

const CharaterCardMain = ({rickAndMortyCharacterId}) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');

  
  useEffect(() => {

    async function apiRickAndMorty() {
      const urlApi = 'https://rickandmortyapi.com/api/character/'+rickAndMortyCharacterId;
      const response = await fetch(urlApi);
      const data = await response.json();
      console.log(data, 'Datos')

      //Se almacenan los datos en las variables de estado
      setName(data.name);
      setStatus(data.status);
      setGender(data.gender);
      setImage(data.image);
    }
    
    apiRickAndMorty();
  
  }, [])
  return (
    <div>
        <CharacterCard name={name} status={status} gender={gender} image={image} />
    </div>
  )
}

export default CharaterCardMain