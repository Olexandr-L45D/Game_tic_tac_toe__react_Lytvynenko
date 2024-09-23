// LoginForm
import css from "./LoginForm.module.css"
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from '../../redux/auth/operations'
// import { useDispatch, useSelector } from "react-redux";
// import { addContact, selectContacts } from '../../redux/contactsOps'

export default function LoginForm() {
    // const nameFieldId = useId();
    // const numberFieldId = useId();
    //   const items = useSelector(selectContacts);

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required('Required')
    });

    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    };
    return (
        <div className={css.item}>
            <Formik initialValues={{
                // login, passvord
                login: " ",
                passvord: " "
            }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form>
                    <div className={css.items}>
                        <label className={css.label}  >Email</label>
                        <Field className={css.inp} type="text" name="login" placeholder="Enter login..." />
                        <ErrorMessage className={css.messag} name="login" component="span" />
                    </div>
                    <div className={css.items}>
                        <label className={css.label} >Password</label>
                        <Field className={css.inp} type="text" name="passvord" placeholder="Enter text..." />
                        <ErrorMessage className={css.messag} name="passvord" component="span" />
                    </div>
                    <div className={css.btn}>
                        <button className={css.LoginForm} type="submit">Log In</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
