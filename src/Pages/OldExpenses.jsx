import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux';
import SortTodos from '../Components/SortExpense/SortExpenses';
import ListExpense from '../Components/ListExpense/ListExpense';
import Data from '../Components/Data/Data';

const OldExpenses = () => {
  const allExpenses = useSelector((state) => state.expenses.expenses);
  const [oldExpense, setOldExpense] = useState([]);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
      setOldExpense(allExpenses.filter(expense => {
        const expenseDate = new Date(expense.createdDate);
        return expenseDate.getMonth() != currentMonth && expenseDate.getFullYear() == currentYear;
      }));
  }, [allExpenses]);

   // Calculate total expenses for each type
   const totalExpenses = oldExpense
   .filter(expense => expense.type === 'Expense')
   .reduce((total, expense) => total + parseFloat(expense.amount), 0);

 const totalSavings = oldExpense
   .filter(expense => expense.type === 'Savings')
   .reduce((total, expense) => total + parseFloat(expense.amount), 0);

 const totalInvestments = oldExpense
   .filter(expense => expense.type === 'Investment')
   .reduce((total, expense) => total + parseFloat(expense.amount), 0);


 return (
    <>
        <Navbar />
        <div 
        style={{
          backgroundImage: 'url(https://wallpapercave.com/wp/wp12426117.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflowX: 'auto',
        }}
        >
         <Data
          totalExpenses={`${totalExpenses}`}
          totalSavings={`${totalSavings}`}
          totalInvestments={`${totalInvestments}`}
        />
        <SortTodos expenses={oldExpense} setExpenses={setOldExpense} />
        <ListExpense expenses={oldExpense}/>
        </div>
    </>
  )
}

export default OldExpenses