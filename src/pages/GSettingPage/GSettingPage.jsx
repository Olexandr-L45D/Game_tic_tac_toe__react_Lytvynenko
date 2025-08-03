import css from "./GSettingPage.module.css";
import { useState } from "react";
import TicTacToeGame from "../../components/TicTacToeGame/TicTacToeGame";

function GSettingPage() {
  const [showGame, setShowGame] = useState(false);
  const [settings, setSettings] = useState({ theme: "pooh" });

  const theme = settings?.theme || "pooh";
  const themeClass = `${css.themeContainer} ${css[theme]}`;

  return (
    <div className={css.container}>
      <div className={themeClass}>
        <div className={css.sidebar}>
          <button className={css.btn} onClick={() => setShowGame(true)}>
            Play tic-tac-toe
          </button>

          <div className={css.blok}>
            <label htmlFor="character">Choose a character</label>
            <select
              id="character"
              onChange={e => setSettings({ theme: e.target.value })}
              value={settings.theme}
            >
              <option value="pooh">Pooh</option>
              <option value="ariel">Ariel</option>
              <option value="dora">Dora</option>
            </select>
          </div>
        </div>

        {showGame && (
          <TicTacToeGame
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

export default GSettingPage;
