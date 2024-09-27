// RegistrationPage.module.css
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css"
import { useState, useEffect } from "react"

export default function RegistrationPage() {

    return (
        <main>
            <div className={css.cartPage}>

                <h3 className={css.cartForm}>RegistrationForm </h3>
                <RegistrationForm />

            </div>
        </main>
    );
}