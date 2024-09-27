import css from "./ContactsPage.module.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContact } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import SearchBox from '../../components/SearchBox/SearchBox';
// import Loader from "../Loader/Loader";
// import Error from "../Error/Error";

export default function ContactsPage() {
    // const loading = useSelector((state) => state.contacts.loading);
    // const error = useSelector((state) => state.contacts.error);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);

    return (
        <div className={css.cartPage}>
            <h1 className={css.cartTitle}>Your Contact Card and List</h1>
            <ContactForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <SearchBox />
            <ContactList />
        </div>
    );
};

// {/* <ContactForm />
// { loading && <Loader>Loading message</Loader> }
// { error && <Error>Error message</Error> }
//       <SearchBox />
//       <ContactList /> */}


