import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { fetchContact } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

export default function ContactsPage() {
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
            <ContactList />
        </>
    );
};


