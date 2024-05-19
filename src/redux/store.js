import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./Slices/ExpenseSlice"

export const store = configureStore({
    reducer:{
        expenses: expenseReducer,
    }
})