import { useState } from "react";
import css from "./GameSettingsModal.module.css";

const GameSettingsModal = ({ onClose, onStart }) => {
  const [theme, setTheme] = useState("rose");
  const [age, setAge] = useState(5);
  const [language, setLanguage] = useState("uk");

  const handleSubmit = e => {
    e.preventDefault();
    onStart({ theme, age, language });
    onClose();
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <h2>Settings game</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Герой:
            <select value={theme} onChange={e => setTheme(e.target.value)}>
              <option value="rose">Learose</option>
              <option value="princes">Princesse</option>
              <option value="dora">Dora</option>
            </select>
          </label>

          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              min="3"
              max="12"
            />
          </label>

          <label>
            Language:
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
            >
              <option value="uk">Українська</option>
              <option value="en">English</option>
            </select>
          </label>

          <div className={css.buttons}>
            <button type="submit">Start</button>
            <button type="button" onClick={onClose}>
              End
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameSettingsModal;
