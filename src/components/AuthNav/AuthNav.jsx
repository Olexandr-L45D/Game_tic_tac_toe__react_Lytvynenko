
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const newLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export const AuthNav = () => {
    return (
        <div className={css.blokLink}>
            <NavLink className={newLinkClass} to="/register">
                Register
            </NavLink>
            <NavLink className={newLinkClass} to="/login">
                Log In
            </NavLink>
        </div>
    );
};
