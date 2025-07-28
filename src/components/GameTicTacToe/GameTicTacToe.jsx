//GameTicTacToe
import { useState, useEffect } from "react";
import css from "./GameTicTacToe.module.css";
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

  // 🔁 Автоматично підлаштовуємо складність під вік
  useEffect(() => {
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
    if (!result) {
      setCurrent(current === "X" ? "O" : "X");
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setCurrent("X");
    setWinner(null);
    onEvent?.({ type: "reset" });
  };

  const themeClass = `game-container theme-${settings?.theme || "default"}`;

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
          </p>
        </div>
      </div>

      <div className={css.grid}>
        {board.map((cell, i) => (
          <button key={i} className={css.cell} onClick={() => handleClick(i)}>
            {cell}
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
