import css from "./HomePage.module.css";
import { FcCustomerSupport } from "react-icons/fc";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h1 className={css.cartTitle}>
          Games <FcCustomerSupport className={css.cartIcon} />
        </h1>
        <h1 className={css.cartText}>Play for fun</h1>
      </div>
    </div>
  );
}
