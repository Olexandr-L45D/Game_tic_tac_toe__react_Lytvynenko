import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
};


// дістаю значення з селекора selectIsLoggedIn який початково в папці redux/auth/selectors

