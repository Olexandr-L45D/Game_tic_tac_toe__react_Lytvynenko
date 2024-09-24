import css from "./RegistrationForm.module.css"
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/operations'

export default function RegistrationForm() {

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required('Required')
    });

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log(values);
        dispatch(register(values));
        actions.resetForm();
    };
    return (
        <div className={css.item}>
            <Formik initialValues={{
                name: " ",
                email: " ",
                password: " ",
            }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
                <Form>
                    <div className={css.items}>
                        <label className={css.label}  >Name</label>
                        <Field className={css.inp} type="name" name="name" placeholder="Enter name..." />
                    </div>
                    <div className={css.items}>
                        <label className={css.label}  >Email</label>
                        <Field className={css.inp} type="email" name="email" placeholder="Enter email..." />
                    </div>
                    <div className={css.items}>
                        <label className={css.label} >Password</label>
                        <Field className={css.inp} type="password" name="password" placeholder="Enter password..." />
                    </div>

                    <div className={css.btn}>
                        <button className={css.regForm} type="submit">Register</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
