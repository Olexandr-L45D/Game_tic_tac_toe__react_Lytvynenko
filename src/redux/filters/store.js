// store

import { configureStore } from "@reduxjs/toolkit";
import tasksReducerCard from "../contacts/slice";
import { filtersReducer } from "../filters/slice";
import { authReducer } from "../auth/slice";

export const store = configureStore({
    reducer: {
        contacts: tasksReducerCard,
        filters: filtersReducer,
        auth: authReducer,
    },
});