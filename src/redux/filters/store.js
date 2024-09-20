// store

import { configureStore } from "@reduxjs/toolkit";
import tasksReducerCard from "../contacts/slice";
import { filtersReducer } from "./slice";

export const store = configureStore({
    reducer: {
        contacts: tasksReducerCard,
        filters: filtersReducer,
    },
});