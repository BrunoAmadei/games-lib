import React, { useState, useEffect } from "react";
import config from "./config";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const games = await config.getGames();
      setGames(games);
     };

    loadGames();

  }, []);

  return (
    <div>
      {games.map((game) => {
        console.log(game)
        return (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <img
              src={game.background_image}
              className="game-img" 
            />
          </div>
        )
      })}
    </div>
  );
}

export default App;
