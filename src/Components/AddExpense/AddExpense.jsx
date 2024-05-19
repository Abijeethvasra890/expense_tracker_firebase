import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addExpenseAsync } from '../../redux/Slices/ExpenseSlice';
import { auth } from '../../Firebase/firebase_config';

const AddExpense = () => {
   
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Expense');
    const [method, setMethod] = useState('UPI');
    const dispatch = useDispatch();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };

    const handleTypeChange = (event) => {
      setType(event.target.value);
    };
      
    const handleMethodChange = (event) => {
      setMethod(event.target.value);
    };

  
    const handleAddExpense = async() => {
      if(auth.currentUser == null){
        alert("Please Sign in to Add Todos");
      }else{
        const createdDate = new Date().toISOString().split('T')[0];
        dispatch(addExpenseAsync({name, amount, type, method, createdDate }));
        setName('');
        setAmount('');
        setType('Expense');
        setMethod('UPI');
      }
    };

  return (
    <div className='bg-slate-200 rounded bg-opacity-20 items-center flex w-10/12 md:mt-10 md:w-4/12 h-4/5 justify-center py-5 px-2 mx-5'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center sm:flex-col md:flex-col gap-2'>
          <input
            className="py-3 px-4 w-11/12 md:w-52 border-2 border-gray-200 rounded-lg text-md"
            type='text'
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
          />
           <input
            className="py-3 px-4 w-11/12 md:w-52 border-2 border-gray-200 rounded-lg text-md"
            type='number'
            placeholder='Amount'
            value={amount}
            onChange={handleAmountChange}
          />
           <select
            value={type}
            onChange={handleTypeChange}
            className="py-3 w-11/12 md:w-52 px-4 border-2 border-gray-200 rounded-lg text-md"
          >
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
          </select>
          <select
            value={method}
            onChange={handleMethodChange}
            className="py-3 w-11/12 md:w-52 px-4 border-2 border-gray-200 rounded-lg text-md"
          >
            <option value="UPI">UPI</option>
            <option value="CC">CC</option>
            <option value="DC">DC</option>
            <option value="App">Banking App</option>
            <option value="Cash">Cash</option>
          </select>
        </div>
        <div className='flex justify-center items-center mt-5'>
        <button
          className="bg-neutral-600 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded h-12" 
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>
       
      </div>
     
    </div>
  )
}

export default AddExpense