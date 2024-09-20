// auth - autorizations

// Додайте у файл redux / auth / operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:

// register - для реєстрації нового користувача.Базовий тип екшену "auth/register".Використовується у компоненті RegistrationForm на сторінці реєстрації.
//     login - для логіну існуючого користувача.Базовий тип екшену "auth/login".Використовується у компоненті LoginForm на сторінці логіну.
//         logout - для виходу з додатка.Базовий тип екшену "auth/logout".Використовується у компоненті UserMenu у шапці додатку.
//             refreshUser - оновлення користувача за токеном.Базовий тип екшену "auth/refresh".

import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://66ea54bb55ad32cda478635a.mockapi.io";

export const refresh = createAsyncThunk("auth/refresh",
    // in login Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен ( а пусто не можна залишати!)
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/auth");
            // При успішному запиті повертаємо проміс із даними з бекенду
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// addContact
export const register = createAsyncThunk("auth/register",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/auth", newContact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }

);

export const login = createAsyncThunk("auth/login",
    async (contactId, thunkAPI) => {
        try {
            // woth
            const res = await axios.delete(`/contacts/${contactId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);
export const logout = createAsyncThunk("auth/logout",
    async (contactId, thunkAPI) => {
        try {
            // woth
            const res = await axios.delete(`/contacts/${contactId}`);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue();
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

