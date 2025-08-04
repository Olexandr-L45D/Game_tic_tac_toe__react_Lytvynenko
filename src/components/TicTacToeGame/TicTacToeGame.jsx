//TicTacToeGame
import { useState } from "react";
import { FcBusinesswoman } from "react-icons/fc";
import css from "./TicTacToeGame.module.css";
import Rose from "/assets/images/RoseYellow.png";
import Princesse from "/assets/images/Princasse.png";
import Empty from "/assets/images/RectangleNull.png";
import { WinModal } from "../WinModal/WinModal";

// Об'єкт для зберігання іконок по темах (url-images)
const iconComponents = {
  rose: {
    x: Rose,
    o: Princesse,
  },
  princes: {
    x: Princesse,
    o: Empty,
  },
  dora: {
    x: FcBusinesswoman,
    o: Empty,
  },
};

const TicTacToeGame = ({ settings, onEvent }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [current, setCurrent] = useState("X");
  const [winner, setWinner] = useState(null);

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
  const handleRestartGame = () => {
    reset();
  };
  const theme = settings?.theme || "default";
  const themeClass = `game_container theme_${theme}`;

  const getIconComponent = symbol => {
    const icon = iconComponents[theme]?.[symbol.toLowerCase()];
    if (!icon) return symbol;
    if (typeof icon === "function") {
      const Icon = icon;
      return <Icon size={60} />;
    }
    return <img src={icon} alt={symbol} style={{ width: 65, height: 65 }} />;
  };

  return (
    <main className={css.wrapper}>
      <aside className={css.playerLeft}>
        {getIconComponent("x")}
        <span className={css.label}>You : X</span>
      </aside>

      <section className={themeClass}>
        <section className={css.gridWrapper}>
          <div className={css.gridOverlay}></div>
          <div className={css.grid}>
            {board.map((cell, i) => (
              <button
                key={i}
                className={`${css.cell} ${css["cell--" + theme]}`}
                onClick={() => handleClick(i)}
                aria-label={`Cell ${i + 1}`}
              >
                {cell ? getIconComponent(cell) : null}
              </button>
            ))}
          </div>
        </section>

        <div className={css.statusWrapper}>
          <p className={css.status}>
            {winner
              ? winner === "Draw"
                ? "🤝 It's a draw!"
                : winner === "X"
                ? "🏆 You won!"
                : "😞 You lost!"
              : `🟢 Next: ${current}`}
          </p>

          {winner === "X" && <WinModal onRestart={handleRestartGame} />}
          {winner && winner !== "X" && (
            <button className={css.retryBtn} onClick={handleRestartGame}>
              🔁 Try again
            </button>
          )}
        </div>
      </section>

      <aside className={css.playerRight}>
        {getIconComponent("o")}
        <span className={css.label}>PLAYER 2</span>
      </aside>
    </main>
  );
};

export default TicTacToeGame;

// ame,
//   age,
//   avatarUrl,
//   language,
