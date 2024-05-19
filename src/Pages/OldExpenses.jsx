import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux';
import SortTodos from '../Components/SortExpense/SortExpenses';
import ListExpense from '../Components/ListExpense/ListExpense';

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
        <SortTodos expenses={oldExpense} />{/*setTodos={setCompletedTodos}*/}
        <ListExpense expenses={oldExpense}/>
        </div>
    </>
  )
}

export default OldExpenses