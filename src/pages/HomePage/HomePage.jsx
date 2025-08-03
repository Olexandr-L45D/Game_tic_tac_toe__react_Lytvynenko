import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <NavLink to="/game" className={css.gameStart}></NavLink>
      </div>
    </div>
  );
}

//  <h1 className={css.cartTitle}>Ti-Tac-Toe</h1>;
