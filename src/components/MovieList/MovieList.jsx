// MovieList
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ products }) {
    const location = useLocation();
    return (
        <div className={css.container}>
            <ul className={css.list}>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/movies/${product.id}`} state={location} ><h4 className={css.titles}>{product.title}</h4>

                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

