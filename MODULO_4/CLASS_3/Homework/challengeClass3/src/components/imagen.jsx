import React from 'react'

const Imagen = (props) => {
  console.log(props, 'Imagen')
  return (
    <div>
      < img src={props.linkImagen} />
    </div>
  )
}

export default Imagen