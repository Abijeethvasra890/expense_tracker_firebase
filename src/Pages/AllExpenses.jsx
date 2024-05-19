import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpensesAsync } from '../redux/Slices/ExpenseSlice';
import AddExpense from '../Components/AddExpense/AddExpense';
import ListExpense from '../Components/ListExpense/ListExpense';
import Data from '../Components/Data/Data';

const AllExpenses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpensesAsync());
  }, [dispatch]);

  const expenses = useSelector((state) => state.expenses.expenses);

  const [salary, setSalary] = useState('5000'); 

  // Get the current month and year
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  // Filter expenses for the current month
  const currentMonthExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.createdDate);
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  });

  // Calculate total expenses for each type
  const totalExpenses = currentMonthExpenses
    .filter(expense => expense.type === 'Expense')
    .reduce((total, expense) => total + parseFloat(expense.amount), 0);

  const totalSavings = currentMonthExpenses
    .filter(expense => expense.type === 'Savings')
    .reduce((total, expense) => total + parseFloat(expense.amount), 0);

  const totalInvestments = currentMonthExpenses
    .filter(expense => expense.type === 'Investment')
    .reduce((total, expense) => total + parseFloat(expense.amount), 0);

  // Calculate amount remaining
  const amountRemaining = parseFloat(salary) - totalExpenses - totalSavings - totalInvestments;

  // Function to handle adding a new salary
  const handleAddSalary = (newSalary) => {
    setSalary(newSalary);
  };


  return (
    <>
      <Navbar />
      <div
        className='md:flex flex-col'
        style={{
          backgroundImage: 'url(https://wallpapercave.com/wp/wp12426117.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflowX: 'auto',
        }}
      >
        <Data
          salary={`${salary}`}
          amountRemaining={`${amountRemaining}`}
          totalExpenses={`${totalExpenses}`}
          totalSavings={`${totalSavings}`}
          totalInvestments={`${totalInvestments}`}
          onAddSalary={handleAddSalary}
        />
        <div className='flex flex-col md:flex-row'>
          <AddExpense />
          <ListExpense expenses={currentMonthExpenses} />
        </div>
      </div>
    </>
  );
}

export default AllExpenses;
