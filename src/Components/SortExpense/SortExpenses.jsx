import React from 'react'
import { sortExpensesByAmount, sortExpensesByDate } from '../../Helpers/Sort';

const SortExpenses = ({expenses, setExpenses}) => {
    
    const handleSortByAmount = () => {
        setExpenses(sortExpensesByAmount(expenses));
        //console.log(pendingTodos);
      };
    
    const handleSortByDate = () => {
      setExpenses(sortExpensesByDate(expenses));
    }
      
  return (
    <div className='flex rounded items-center justify-center mt-5 mb-5'>
      <div className='bg-opacity-60  justify-center md:flex gap-5 py-3 w-96'>
        <button
            className='bg-neutral-600 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded'
            onClick={handleSortByAmount}>Sort by Amount
        </button>
        <button
            className='bg-neutral-600 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded'
            onClick={handleSortByDate}>Sort by Date
        </button>
      </div>
    </div>
  )
}

export default SortExpenses