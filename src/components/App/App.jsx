
import css from './App.module.css';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

import React, { useEffect } from "react";
import { Layout } from "../Layout/Layout";
// import { Toaster } from "react-hot-toast";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContact } from '../../redux/contacts/operations';
import { refreshUser } from '../../redux/auth/operations';
import RestrictedRoute from '../../components/RestrictedRoute';
import PrivateRoute from '../../components/PrivateRoute';
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { selectIsRefreshing } from '../../redux/auth/selectors';

export default function App() {
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // запит на ТОКЕН isRefreshing
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<b>Refreshing user ...</b>) : (
    <Layout>

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />} />
          <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
          <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};


// {/* <ContactForm />
// { loading && <Loader>Loading message</Loader> }
// { error && <Error>Error message</Error> }
//       <SearchBox />
//       <ContactList /> */}

// потім додати isRefreshing
// isRefreshing ? (<b>Refreshing user ...</b>) : 

// {/* <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
//   <Route path="cast" element={<MovieCast />} />
//   <Route path="reviews" element={<MovieReviews />} />

// {/* <Route path='/movies' element={<MaviesPage />} /> */}
// </Route> */}
// {/* <Route path="*" element={<NotFoundPage />} /> */}
// return (
//   <main className={css.container}>
//     <h1>HTTP requests with Redux</h1>
//     <TaskForm />
//     {loading && <Loader>Loading message</Loader>}
//  {/* {loading && !error && <b>Request in progress...</b>} */}
//     {error && <Error>Error message</Error>}
//     <TaskList />
//   </main>
// );



















// const items = useSelector((state) => state.locale.items); // приклад до спрощення
// const items = useSelector(selectContacts); // повертає шматок стану зі слайсу (selectContact = функція стану)
// const name = useSelector(selecFilter); // повертає шматок стану зі слайсу


// const [filter, setFilter] = useState('');
// const [tasks, setTasks] = useState(() => {
//   const savClicks = window.localStorage.getItem("my-clicks");
//   return savClicks !== null ? JSON.parse(savClicks) : objects
// });

// useEffect(() => {
//   const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
//   if (isLocalStorData) {
//     const data = localStorage.getItem("my-clicks");
//     setTasks(JSON.parse(data));
//   }
// }, []);

// useEffect(() => {
//   window.localStorage.setItem("my-clicks", JSON.stringify(tasks));
// }, [tasks]);

// const addTask = (newTask) => {
//   setTasks((prevTasks) => {
//     return [...prevTasks, newTask];
//   });
// };
// const deleteTask = (taskId) => {
//   setTasks((prevTasks) => {
//     return prevTasks.filter((task) => task.id !== taskId);
//   });
// };
// const visibleTasks = tasks.filter((task) =>
//   task.name.toLowerCase().includes(filter.toLowerCase()));
//  <h1 className={css.title}>Phonebook</h1>
//       <Suspense fallback={<div>LOADING list of movies...</div>}>
//         <Routes>
//           <Route path="/" element={<ContactForm />} />
//           <Route path="*" element={<NotFoundCard />} />
//         </Routes>
//       </Suspense>
// {/* <ContactForm onAdd={addTask} />
//         <SearchBox value={filter} onFilter={setFilter} />
//         <ContactList tasks={tasks} objects={objects} onDelete={deleteTask} /> */}


