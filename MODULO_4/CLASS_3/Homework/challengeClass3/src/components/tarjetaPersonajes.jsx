import React from 'react'
import Imagen from './imagen'
import Titulo from './titulo'
import Detalle from './detalle'
import './tarjetaPersonajes.css'

const TarjetaPersonajes = ({linkImagen, nombre, estado, genero}) => {

  return (
    <div className='mainCard'> 
        <div className='imagen'>
            <Imagen linkImagen = {linkImagen} />
        </div> 
        <div className='estado'>
            {estado}
        </div>
        <div>
            <Titulo nombre={nombre}/>
        </div>
        <div className='detalle'>
            <Detalle genero={genero}/>
        </div>
        
        
        
    </div>
  )
}

export default TarjetaPersonajes