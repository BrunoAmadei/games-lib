import { useState, useEffect } from 'react'
import config from './config.jsx'


function App() {
  const [gamesList, setGamesList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      const games = await config.getGamesList()
      setGamesList(games[0].items.results)
    }
    loadAll()
  }, [])

  return (
    <div className="App">
      <h1>Lista de jogos:</h1>
        
    </div>
  )
}

export default App
