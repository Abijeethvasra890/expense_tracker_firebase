import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteExpenseAsync } from '../../redux/Slices/ExpenseSlice';

const DeleteExpense = ({ expenseId }) => {
  //console.log(expenseId);
    const dispatch = useDispatch();
    const handleDeleteExpense = () => {
        dispatch(deleteExpenseAsync(expenseId));
    };
      

  return (
    <button
        className="bg-red-900 hover:bg-black text-white font-bold py-2 px-4 rounded mt-4"  
        onClick={handleDeleteExpense}
        >
        Delete Expense
    </button>
  )
}

export default DeleteExpense