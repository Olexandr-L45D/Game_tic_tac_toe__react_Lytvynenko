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
        <>
            <ContactForm />
            <div>Your Contact List</div>
            <div>{isLoading && 'Request in progress...'}</div>
            <SearchBox />
            <ContactList />
        </>
    );
};

// {/* <ContactForm />
// { loading && <Loader>Loading message</Loader> }
// { error && <Error>Error message</Error> }
//       <SearchBox />
//       <ContactList /> */}


