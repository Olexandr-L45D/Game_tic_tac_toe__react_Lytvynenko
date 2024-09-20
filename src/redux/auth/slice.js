// slice- auth
import { createSlice } from '@reduxjs/toolkit';

const authsSlice = createSlice(
    {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    }
    // {
    // name: "filters",
    // initialState: { name: "", },
    // reducers: {
    //     setChangeFilter: (state, action) => {
    //         state.name = action.payload;
    //     },
    // }
    // }
);
export const { setChangeFilter } = authsSlice.actions;