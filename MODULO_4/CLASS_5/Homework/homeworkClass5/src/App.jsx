import { useState } from 'react'
import './App.css'
import Form from './components/form/form'
import Home from './components/home/home'

function App() {

  const [user, setUser] = useState('');

  return (
    
    <div>      
      {user.length > 0 ? <Home user = {user} setUser={setUser}/> : <Form setUser = {setUser}/>}            
    </div>    
  )
  
}

export default App
