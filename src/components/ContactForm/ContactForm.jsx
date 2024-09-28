import css from "./ContactForm.module.css"
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contacts/operations'
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('You added a contact.');

export default function ContactForm() {

    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };
    return (
        <div className={css.item}>
            <Formik initialValues={{
                name: " ",
                number: " "
            }} onSubmit={handleSubmit}>
                <Form>
                    <div className={css.items}>
                        <label className={css.label}  >Name</label>
                        <Field className={css.inp} type="text" name="name" placeholder="Enter name..." />
                        <ErrorMessage className={css.messag} name="name" component="span" />
                    </div>
                    <div className={css.items}>
                        <label className={css.label} >Number</label>
                        <Field className={css.inp} type="text" name="number" placeholder="Enter number" />
                        <ErrorMessage className={css.messag} name="number" component="span" />
                    </div>
                    <div className={css.btn}>
                        <button onClick={notify} className={css.addContact} type="submit">Add contact</button>
                        <Toaster />
                    </div>
                </Form>
            </Formik>
        </div>
    );
};





