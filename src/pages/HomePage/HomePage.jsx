
import css from "./HomePage.module.css"
import { FcBusinessman } from "react-icons/fc";

export default function HomePage() {

    return (
        <div className={css.container}>
            <div className={css.card}>

                <h1 className={css.cartTitle}>Contactbook <FcBusinessman className={css.cartIcon} /></h1>
                <h1 className={css.cartText}>Welcom in my contact card</h1>

            </div>
        </div>
    );
};


