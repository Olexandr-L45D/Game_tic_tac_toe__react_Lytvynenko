// HomePage
import css from "./HomePage.module.css"
// import { useState, useEffect } from "react"
// import { getProductMovies } from '../tmdb-movies';
// import MovieList from "../../components/MovieList/MovieList"

export default function HomePage() {

    return (
        <main>
            <h3 className={css.cartTitle}>Home</h3>
            <p>This is my prodgect of Card contact</p>

        </main>
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

