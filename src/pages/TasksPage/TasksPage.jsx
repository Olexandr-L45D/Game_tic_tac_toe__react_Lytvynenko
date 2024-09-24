import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList } from '../../components/TaskList/TaskList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { fetchContact } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

export default function TasksPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);

    return (
        <>
            <div>Your tasks</div>
            <ContactForm />
            <div>{isLoading && 'Request in progress...'}</div>
            <TaskList />
        </>
    );
}
