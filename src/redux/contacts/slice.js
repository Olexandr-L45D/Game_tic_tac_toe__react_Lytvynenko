// contactsSlice.js (це окрема локаль - locale-slice)
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './operations';
import { selectStatusFilterName, selectStatusFilterNumber } from '../filters/slice';

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContact.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchContact.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex(
                    contact => contact.id === action.payload.id
                );
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export const selectContacts = (state) => state.contacts.items;
export const selectOutContacts = createSelector([selectContacts, selectStatusFilterName, selectStatusFilterNumber], (contacts, filter) => {
    return (contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) && contacts.filter(contact => contact.number.toLowerCase().includes(filter.toLowerCase())))
});

export default slice.reducer;





// console.log(slice.reducer);

// return (contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))


