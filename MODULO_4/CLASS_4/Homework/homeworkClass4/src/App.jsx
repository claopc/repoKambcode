import './App.css'
import CharaterCardMain from './components/characterCardMain/charaterCardMain'

function App() {  
  
  return (
    <div>
      <h1>Componente App</h1>
      <CharaterCardMain rickAndMortyCharacterId={1}/>
      <CharaterCardMain rickAndMortyCharacterId={2}/>
      <CharaterCardMain rickAndMortyCharacterId={3}/>
    </div>

    
  )
}

export default App
