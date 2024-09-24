import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
            // password: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

export const authReducer = authSlice.reducer;

// export const selectContacts = (state) => state.contacts.items;
// export const selectOutContacts = createSelector([selectContacts, selectStatusFilter], (contacts, filter) => {
//     return (contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))
// });
// // створюємо фабрики екшкнів автоматично (нижче slice.actions.....)
// // slice.actions.addContact();
// // slice.actions.deleteContact();
// // slice.actions.selectContacts();
// //export const { addContact, deleteContact } = slice.actions;
// // кореневий редюсер (або редюсер слайсу за дефолтом)
// export default slice.reducer;