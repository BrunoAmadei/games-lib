import {useState, useEffect} from 'react'
import config from './config'


function App() {
  const [gamesList, setGamesList] = useState([])

  useEffect(()=>{
    const LoadGames = async () =>{
      let games = await config.getHomeList()
      console.log(games)
    }    

    LoadGames()
  },[])

  return (
    <div className="App">

    </div>
  )
}

export default App
