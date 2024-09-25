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




// export const selecFilter = (state) => state.filters.name;
// створюємо фабрики екшкнів автоматично (нижче slice.actions.....)
// slice.actions.changeFilter();
// slice.actions.selectNameFilter();
// export const { changeFilter } = slice.actions;
// кореневий редюсер (або редюсер слайсу за дефолтом)
// export default slice.reducer;
// console.log(slice.reducer);

// const filtersSlice = createSlice({
//     name: "filters",
//     initialState: {
//         status: "all",
//     },
//     reducers: {
//         setStatusFilter(state, action) {
//             state.status = action.payload;
//         },
//     },
// });