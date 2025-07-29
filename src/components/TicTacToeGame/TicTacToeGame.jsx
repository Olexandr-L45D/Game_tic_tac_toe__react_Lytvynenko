//TicTacToeGame
import { useState, useEffect } from "react";
import {
  FcBusinessman,
  FcBusinesswoman,
  FcPortraitMode,
  FcEngineering,
  FcSupport,
} from "react-icons/fc";
import css from "./TicTacToeGame.module.css";

// Об'єкт для зберігання іконок по темах (react-icons)
const iconComponents = {
  pooh: {
    x: FcBusinessman,
    o: FcBusinesswoman,
  },
  ariel: {
    x: FcPortraitMode,
    o: FcEngineering,
  },
  dora: {
    x: FcSupport,
    o: FcBusinessman,
  },
};

const TicTacToeGame = ({
  name,
  age,
  avatarUrl,
  language,
  settings,
  onEvent,
}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [current, setCurrent] = useState("X");
  const [winner, setWinner] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [isCustomDifficulty, setIsCustomDifficulty] = useState(false);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    if (!age) return; // Якщо вік ще не визначено
    if (age < 6) setDifficulty("super-easy");
    else if (age < 10) setDifficulty("easy");
    else if (age < 15) setDifficulty("medium");
    else setDifficulty("hard");
  }, [age]);

  const checkWin = b => {
    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
    }
    return b.every(Boolean) ? "Draw" : null;
  };

  const handleClick = i => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = current;
    const result = checkWin(next);
    setBoard(next);
    setWinner(result);
    onEvent?.({ type: "move", board: next, result, currentPlayer: current });
    if (!result) setCurrent(current === "X" ? "O" : "X");
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setCurrent("X");
    setWinner(null);
    onEvent?.({ type: "reset" });
  };

  const theme = settings?.theme || "default";
  const themeClass = `game_container theme_${theme}`;

  // ⬇️ Функція для отримання іконки з React Icons
  const getIconComponent = symbol => {
    const Icon = iconComponents[theme]?.[symbol.toLowerCase()];
    return Icon ? <Icon size={48} /> : symbol;
  };

  return (
    <div className={themeClass}>
      <div className={css.header}>
        {avatarUrl && (
          <img src={avatarUrl} alt="avatar" className={css.avatar} />
        )}
        <div className={css.user_info}>
          <p>
            {name}, {age} y.o.
          </p>
          <p>
            Lang: {language} | Difficulty: {difficulty}
            {isCustomDifficulty && " (Custom)"}
          </p>
        </div>
      </div>
      <div className={css.difficultySelect}>
        <label>
          Select difficulty:{" "}
          <select
            value={difficulty}
            onChange={e => {
              setDifficulty(e.target.value);
              setIsCustomDifficulty(true);
            }}
          >
            <option value="super-easy">Super Easy</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>

      <div className={css.grid}>
        {board.map((cell, i) => (
          <button
            key={i}
            className={`${css.cell} ${
              css["cell--" + (settings?.theme || "default")]
            }`}
            onClick={() => handleClick(i)}
          >
            {cell ? getIconComponent(cell) : null}
          </button>
        ))}
      </div>

      <div className={css.status}>
        {winner
          ? winner === "Draw"
            ? "It's a draw!"
            : `🏆 Winner: ${winner}`
          : `Next: ${current}`}
      </div>

      {winner && (
        <button className={css.reset_btn} onClick={reset}>
          Play again
        </button>
      )}
    </div>
  );
};

export default TicTacToeGame;
