//GamePage.module.css
import css from "./GamePage.module.css";
import { useState } from "react";
import GameTicTacToe from "../../components/GameTicTacToe/GameTicTacToe";

function GamePage() {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => setShowGame(true)}>
        Play tic-tac-toe
      </button>

      {showGame && (
        <GameTicTacToe
          name="Olexandr"
          age={8}
          language="en"
          settings={{ theme: "forest" }}
        />
      )}
    </div>
  );
}

export default GamePage;
