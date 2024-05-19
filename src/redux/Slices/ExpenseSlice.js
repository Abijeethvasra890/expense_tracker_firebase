import { createSlice } from "@reduxjs/toolkit";
import {  addExpenseForUser, deleteExpenseForUser, getExpensesForUser, updateExpenseForUser } from "../../Helpers/ExpenseData";
import { auth } from "../../Firebase/firebase_config";
import AddExpense from "../../Components/AddExpense/AddExpense";

const initialState = {
    expenses: [],
    status: 'idle',
    error: null,
};

export const fetchExpensesAsync = () => async (dispatch) => {
    try {
        const userId = auth.currentUser.uid;
        const userExpenses = await getExpensesForUser(userId);
        dispatch(setExpenses(userExpenses));
    } catch (error) {
        dispatch(expenseError(error.message));
    }
};

export const addExpenseAsync = (expenseData) => async (dispatch) => {
    try {
        //console.log("AddTodoAsync");
        const userId = auth.currentUser.uid;
       // console.log(userId);
        expenseData = await addExpenseForUser(userId, expenseData);
        dispatch(addExpense(expenseData));
    } catch (error) {
        dispatch(expenseError(error.message));
    }
};

export const deleteExpenseAsync = (expenseId) => async (dispatch) => {
    try {
        const userId = auth.currentUser.uid;
        await deleteExpenseForUser(userId, expenseId);
        dispatch(deleteExpense(expenseId));
    } catch (error) {
        dispatch(expenseError(error.message));
    }
};

export const updateExpenseAsync = (expenseId, updatedExpenseData) => async (dispatch) => {
    try {
        const userId = auth.currentUser.uid;
        await updateExpenseForUser(userId, expenseId, updatedExpenseData);
        dispatch(editExpense({ id: expenseId, ...updatedExpenseData }));
    } catch (error) {
        dispatch(expenseError(error.message));
    }
};

const ExpenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        deleteExpense: (state, action) => {
            const expenseId = action.payload;
            state.expenses = state.expenses.filter(expense => expense.id !== expenseId);
        },
        editExpense: (state, action) => {
            const { id, ...updatedExpenseData } = action.payload;
            const expenseToEdit = state.expenses.find(expense => expense.id === id);
            if (expenseToEdit) {
                Object.assign(expenseToEdit, updatedExpenseData);
            }
        },
        expenseError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        setExpenses: (state, action) => {
            state.expenses = action.payload;
            state.status = 'succeeded';
        },
        clearExpenses: (state) => {
            state.expenses = [];
        }
    },
});

export const { addExpense, deleteExpense, editExpense, expenseError, setExpenses, clearExpenses } = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
