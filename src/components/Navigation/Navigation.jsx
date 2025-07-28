import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={newLinkClass}>
          Home
        </NavLink>
        <NavLink to="/game" className={newLinkClass}>
          Game to Tic Tac
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={newLinkClass}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

// Aleksandr
// Aleksandr @gmail.com.ua
// Alek12345

// Navigation (тепер він в AppBar і розділив його на 2 компоненти UsMenu and AutNav які далі здійснюють навігацію по сайту між сторінками (сторінки в pages))

//  <NavLink to="/register" className={newLinkClass}>
//                 Register
//             </NavLink>
//             <NavLink to="/login" className={newLinkClass}>
//                 Log In
//             </NavLink>
