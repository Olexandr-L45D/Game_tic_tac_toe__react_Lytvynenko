// slice = filtersSlice
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: "filters",
    initialState: { name: "", },
    reducers: {
        setChangeFilter: (state, action) => {
            state.name = action.payload;
        },
    }
});
export const { setChangeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectStatusFilter = (state) => state.filters.name;