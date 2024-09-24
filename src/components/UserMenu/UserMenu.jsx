// UserMenu
import css from "./UserMenu.module.css"

export const UserMenu = () => {
    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {name}</p>
            <button type="button">Logout</button>
        </div>
    )
}