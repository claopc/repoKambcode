import React from 'react'
import './form.css'
import { useState } from 'react'

const Form = ({setUser}) => {

    const [usuario, setUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [error, setError] = useState({nombreError: false, contraseniaError: false});
    console.log(usuario, 'usuario')
    console.log(contrasenia, 'contraseña')

    const handleSubmit = (e) => {
        e.preventDefault();

        setError({
            nombreError: usuario === '',
            contraseniaError: contrasenia === ''
        })

        if(usuario !== '' && contrasenia !== ''){
            setUser([usuario])
        }
    }

  return (
    <div>
        <h1>LOGIN</h1>
                <form className='mainForm' onSubmit={handleSubmit}>
                    <label>Usuario</label>
                    <input type="text" placeholder='Usuario' onChange={e => setUsuario(e.target.value)} />
                    {error.nombreError && <p className='error'>El usuario es requerido</p>}
                    

                    <label>Contraseña</label>
                    <input type="password" placeholder='Contraseña' onChange={e => setContrasenia(e.target.value)}/>
                    {error.contraseniaError && <p className='error'>La contraseña es requerida</p>}

                    <button type='submit'>Iniciar Sesión</button>
                </form>
    </div>
  )
}

export default Form