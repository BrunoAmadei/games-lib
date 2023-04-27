import React, { useState, useEffect } from "react";
import config from "./config";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const games = await config.getUpComingGames();
      //console.log(games)
      setGames(games); // Acessando a lista de jogos
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
            src={config.getImage(game, "500")}
              onError={(e) => console.log(`Erro ao carregar imagem: ${e.target.src}`)}
            />
          </div>
        )
      })}
    </div>
  );
}

export default App;
