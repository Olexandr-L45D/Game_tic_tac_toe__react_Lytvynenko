
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const newLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink to="/" className={newLinkClass}>
                    Home
                </NavLink>
                <NavLink to="/register" className={newLinkClass}>
                    Registration
                </NavLink>
                <NavLink to="/login" className={newLinkClass}>
                    Authentication
                </NavLink>
            </nav>
        </header>
    );
};




// Navigation (типу хедера з навігацією)