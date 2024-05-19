import React, { useEffect, useState } from 'react';
import { filterByDate } from '../../Helpers/Filter';

const FilterTodo = ({todos, setTodos}) => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [originalItems, setOriginalItems] = useState();

    const handleFilterByDate = () => {
        setOriginalItems(todos);
        setTodos(filterByDate(todos, fromDate, toDate));
        //console.log(todos);
        //console.log("oa",originalItems);
      }

    const handleResetFilter = () => {
        setFromDate('');
        setToDate('');
       // console.log(originalItems);
        setTodos(originalItems)
      }
    

    return (
        <div className='md:flex flex-wrap gap-5 justify-center py-5'>
            <div className="flex flex-col mr-5">
                <label htmlFor="fromDate" className="text-white mb-2">From Date:</label>
                <input
                    id="fromDate"
                    className="py-3 px-4 w-9/12 md:w-52 border-2 border-gray-200 rounded-lg text-md h-10"
                    type='date'
                    placeholder='From Date'
                    value={fromDate}
                    onChange={(e) => { setFromDate(e.target.value) }}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="toDate" className="text-white mb-2">To Date:</label>
                <input
                    id="toDate"
                    className="py-3 px-4 w-9/12 md:w-52 border-2 border-gray-200 rounded-lg text-md h-10"
                    type='date'
                    placeholder='To Date'
                    value={toDate}
                    onChange={(e) => { setToDate(e.target.value) }}
                />
            </div>
        
                <button
                    className='bg-neutral-600 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded self-end mt-4'
                    onClick={handleFilterByDate}>Filter by Date
                </button>
                <button
                    className='bg-neutral-600 hover:bg-neutral-400 text-white font-bold py-2 px-4 rounded self-end mt-4'
                    onClick={handleResetFilter}>Reset Filter
                </button>
            
        </div>
    );
};

export default FilterTodo;
