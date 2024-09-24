// LoginPage.module.css
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css"
import { useState, useEffect } from "react"

export default function LoginPage() {

    return (
        <main>
            <h3 className={css.cartTitle}>LOGIN FORM</h3>
            <LoginForm />
        </main>
    );
}


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
//             setError("Sorry Bad Login");
//         }
//     }
//     fetchData();
// }, []);


