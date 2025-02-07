import React from 'react'

const Detail = ({gender, status}) => {
  return (
    <div>
      <h3>Estado: {status}</h3>
      <h3>Genero: {gender}</h3>      
    </div>
  )
}

export default Detail