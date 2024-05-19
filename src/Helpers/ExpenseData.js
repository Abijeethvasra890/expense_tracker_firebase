// Import necessary Firebase functions
import { collection, addDoc, query, where, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase_config";

// Function to add a todo for the logged-in user
export const addExpenseForUser = async (uid, expenseData) => {
    try {
        //console.log("addTodoForUser");
        const docRef = await addDoc(collection(db, `users/${uid}/expenses`), expenseData);
        return { id: docRef.id, ...expenseData };
    } catch (error) {
        alert("Error adding expense: " + error.message);
    }
}

// Function to get all todos for the logged-in user
export const getExpensesForUser = async (uid) => {
    try {
        const q = query(collection(db, `users/${uid}/expenses`));
        const querySnapshot = await getDocs(q);
        const expenses = [];
        querySnapshot.forEach((doc) => {
            expenses.push({ id: doc.id, ...doc.data() });
        });
        return expenses;
    } catch (error) {
        alert("Error getting expenses: " + error.message);
        return [];
    }
}

// Function to update a todo for the logged-in user
export const updateExpenseForUser = async (uid, expenseId, updatedExpenseData) => {
    try {
       // console.log("tododata helper");
        const expenseRef = doc(db, `users/${uid}/expenses`, expenseId);
        await updateDoc(expenseRef, updatedExpenseData);
       // alert("Todo updated successfully");
    } catch (error) {
        alert("Error updating Expense: " + error.message);
    }
}

// Function to delete a todo for the logged-in user
export const deleteExpenseForUser = async (uid, expenseId) => {
    try {
        const expenseRef = doc(db, `users/${uid}/expenses`, expenseId);
        await deleteDoc(expenseRef);
        //alert("Todo deleted successfully");
    } catch (error) {
        alert("Error deleting Expenses: " + error.message);
    }
}
