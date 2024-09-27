// HomePage
import css from "./HomePage.module.css"
// import { useState, useEffect } from "react"
// import { getProductMovies } from '../tmdb-movies';
// import MovieList from "../../components/MovieList/MovieList"

export default function HomePage() {

    return (
        <div className={css.container}>
            <div className={css.card}>

                <h1 className={css.cartTitle}>Contactbook</h1>
                <h1 className={css.cartText}>Welcom in my contact card</h1>

            </div>
        </div>
    );
};


// const [products, setProduct] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//     async function fetchData() {
//         try {
//             setLoading(true);
//             setError(false);
//             // const data = await getProductMovies();
//             setProduct(data);
//             setLoading(false);
//         } catch (error) {
//             setError("Sorry nothing found");
//         }
//     }
//     fetchData();
// }, []);


// { products.length > 0 && <MovieList products={products} /> }

