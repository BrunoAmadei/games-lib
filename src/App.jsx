import { useState, useEffect } from 'react';
import config from './config';

function App() {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const games = await config.getGamesList();
      setGamesList(games[0].items.results);
      console.log(games)
    };
    
    loadGames();
  }, []);

  return (
    <div className="App">
      <h1>Games List:</h1>
      <ul>
        {gamesList.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
