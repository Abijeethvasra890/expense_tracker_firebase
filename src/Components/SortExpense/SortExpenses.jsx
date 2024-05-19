import React from 'react'
import { sortTodosByDate, sortTodosByPriority } from '../../Helpers/Sort';

const SortTodos = ({todos, setTodos}) => {
    
    const handleSortByPriority = () => {
        setTodos(sortTodosByPriority(todos));
        //console.log(pendingTodos);
      };
    
    const handleSortByDate = () => {
      setTodos(sortTodosByDate(todos));
    }
      
  return (
    <div className='flex rounded items-center justify-center mt-5 mb-5'>
      <div className='bg-opacity-60  justify-center md:flex gap-5 py-3 w-96'>
        <button
            className='bg-neutral-600 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded'
            onClick={handleSortByPriority}>Sort by Priority
        </button>
        <button
            className='bg-neutral-600 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded'
            onClick={handleSortByDate}>Sort by Date
        </button>
      </div>
    </div>
  )
}

export default SortTodos