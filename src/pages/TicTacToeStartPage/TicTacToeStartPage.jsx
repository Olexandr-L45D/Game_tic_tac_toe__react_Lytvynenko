//GamePage.module.css
//import { NavLink } from "react-router-dom";
import css from "./TicTacToeStartPage.module.css";
import TicTacToeGame from "../../components/TicTacToeGame/TicTacToeGame";

function TicTacToeStartPage() {
  return (
    <div className={css.container}>
      <TicTacToeGame />
    </div>
  );
}

export default TicTacToeStartPage;

/* <NavLink to="/game" className={css.btnStart}>
  Game to Tic Tac
</NavLink>; */

// import css from "./TicTacToeStartPage.module.css";
// import TicTacToeGame from "../../components/TicTacToeGame/TicTacToeGame";
// import { useState } from "react";

// function TicTacToeStartPage() {
//   const [showGame, setShowGame] = useState(false);
//   return (
//     <div className={css.container}>
//       <button className={css.btn} onClick={() => setShowGame(true)}>
//         Play
//       </button>
//       {showGame && <TicTacToeGame />}
//     </div>
//   );
// }

// export default TicTacToeStartPage;
