// auth - autorizations

// Додайте у файл redux / auth / operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:

// register - для реєстрації нового користувача.Базовий тип екшену "auth/register".Використовується у компоненті RegistrationForm на сторінці реєстрації.
//     login - для логіну існуючого користувача.Базовий тип екшену "auth/login".Використовується у компоненті LoginForm на сторінці логіну.
//         logout - для виходу з додатка.Базовий тип екшену "auth/logout".Використовується у компоненті UserMenu у шапці додатку.
//             refreshUser - оновлення користувача за токеном.Базовий тип екшену "auth/refresh".

// import axios from "axios";
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// axios.defaults.baseURL = "https://66ea54bb55ad32cda478635a.mockapi.io";

// export const refresh = createAsyncThunk("auth/refresh",
//     // in login Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен ( а пусто не можна залишати!)
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get("/auth");
//             // При успішному запиті повертаємо проміс із даними з бекенду
//             return response.data;
//         } catch (e) {
//             // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

// // addContact
// export const register = createAsyncThunk("auth/register",
//     async (newContact, thunkAPI) => {
//         try {
//             const response = await axios.post("/auth", newContact);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }

// );

// export const login = createAsyncThunk("auth/login",
//     async (contactId, thunkAPI) => {
//         try {
//             // woth
//             const res = await axios.delete(`/contacts/${contactId}`);
//             return res.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue();
//         }
//     }
// );
// export const logout = createAsyncThunk("auth/logout",
//     async (contactId, thunkAPI) => {
//         try {
//             // woth
//             const res = await axios.delete(`/contacts/${contactId}`);
//             return res.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue();
//         }
//     }
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-manager-api.goit.global/';

// Utility to add JWT - (token)
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            // After successful registration, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            // After successful login, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        // After a successful logout, remove the token from the HTTP header
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            // If there is a token, add it to the HTTP header and perform the request
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/me');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//тут в фалі запитів це оголошення 3 операції (1-ша - запит на базовий УРЛ для відмалювання всих контактів - axios.defaults.baseURL, addContact, deleteContact)
// "tasks/fetchAll/pending" - початок запиту
// "tasks/fetchAll/fulfilled" - успішне завершення запиту
// "tasks/fetchAll/rejected" - завершення запиту з помилкою
// початковий варіант запиту без відпрацювання станів з помилками:
// export const fetchTasks = createAsyncThunk("contacts/fetchAll", async () => {
//     const response = await axios.get("/contacts");
//     return response.data;
// });

// deleteContact При успішному запиті повертаємо проміс із даними з бекенду для видалення шукаєм по id - contactId
// (ця не працює а верхня з шаблонним рядком і зн долар працює (`/contacts/${contactId}`))
// export const deleteContact = createAsyncThunk("contacts/deleteContact",
//     async (contactId, thunkAPI) => {
//         try {
//             const response = await axios.delete("/contacts", { contactId });
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

