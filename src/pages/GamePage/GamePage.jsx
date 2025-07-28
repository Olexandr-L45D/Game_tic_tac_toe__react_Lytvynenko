//GamePage.module.css

import { useState } from "react";
import GameTicTacToe from "../../components/GameTicTacToe/GameTicTacToe";

function GamePage() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div>
      <button onClick={() => setShowGame(true)}>Грати у хрестики-нулики</button>

      {showGame && (
        <GameTicTacToe
          name="Олександр"
          age={8}
          language="uk"
          settings={{ theme: "forest" }}
        />
      )}
    </div>
  );
}

export default GamePage;
