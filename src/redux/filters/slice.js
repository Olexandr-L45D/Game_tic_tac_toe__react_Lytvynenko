// slice = filtersSlice
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: "filters",
    initialState: { name: "", number: "", },
    reducers: {
        setChangeFilter: (state, action) => {
            state.name = action.payload;
            state.number = action.payload;
        },
    }
});
export const { setChangeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectStatusFilterName = (state) => state.filters.name;
export const selectStatusFilterNumber = (state) => state.filters.number;




