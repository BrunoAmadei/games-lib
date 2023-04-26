import React, { useState, useEffect } from "react";
import config from "./config";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const games = await config.getUpComingGames();
      console.log(games)
      setGames(games); // Acessando a lista de jogos
    };

    loadGames();
  }, []);

  return (
    <div>
      {games.map((game) => (       
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} width={300}/>
        </div>
      ))}
    </div>
  );
}

export default App;
