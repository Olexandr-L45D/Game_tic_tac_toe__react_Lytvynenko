//GamePage.module.css
import css from "./GamePage.module.css";
import { useState } from "react";
import GameTicTacToe from "../../components/GameTicTacToe/GameTicTacToe";

function GamePage() {
  const [showGame, setShowGame] = useState(false);
  const [settings, setSettings] = useState({ theme: "pooh" });
  const theme = settings?.theme || "pooh"; // або "ariel"
  const themeClass = `${css.themeContainer} ${css[theme]}`;

  return (
    <div className={css.container}>
      <div className={themeClass}>
        <button className={css.btn} onClick={() => setShowGame(true)}>
          Play tic-tac-toe
        </button>
        <select
          onChange={e => setSettings({ theme: e.target.value })}
          value={settings.theme}
        >
          <option value="pooh">Pooh</option>
          <option value="ariel">Ariel</option>
        </select>

        {showGame && (
          <GameTicTacToe
            name="Olexandr"
            age={8}
            language="en"
            settings={settings}
          />
        )}
      </div>
    </div>
  );
}

export default GamePage;
