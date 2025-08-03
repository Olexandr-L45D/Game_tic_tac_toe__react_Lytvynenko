// GameSettingPage.tsx
import { useState } from "react";
import css from "./GameSettingPage.module.css";
import TicTacToeGame from "../../components/TicTacToeGame/TicTacToeGame";
import GameSettingsModal from "../../components/GameSettingsModal/GameSettingsModal";

const GameSettingPage = () => {
  const [settings, setSettings] = useState(null);
  const [showModal, setShowModal] = useState(true);

  return (
    <div className={css.container}>
      {showModal && (
        <GameSettingsModal
          onClose={() => setShowModal(false)}
          onStart={data => setSettings(data)}
        />
      )}

      {settings && (
        <TicTacToeGame
          name="Olexandr"
          age={settings.age}
          language={settings.language}
          settings={settings}
        />
      )}
    </div>
  );
};

export default GameSettingPage;
