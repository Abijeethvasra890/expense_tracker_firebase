import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addExpenseAsync } from '../../redux/Slices/ExpenseSlice';
import { auth } from '../../Firebase/firebase_config';

const AddExpense = () => {
   
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Expense');
    const [method, setMethod] = useState('UPI');
    const currentDate = new Date().toISOString().split('T')[0];
    const [createdDate, setCreatedDate] = useState(currentDate);
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

    const handledateChange = (event) =>{
      setCreatedDate(event.target.value);
    }
    const handleAddExpense = async() => {
      if(auth.currentUser == null){
        alert("Please Sign in to Add Todos");
      }else{
        if(name != '' && amount != ''){
          dispatch(addExpenseAsync({name, amount, type, method, createdDate }));
        }else{
          alert("Fill Name and Amount Fields");
        }
        setName('');
        setAmount('');
        setType('Expense');
        setMethod('UPI');
      }
    };

  return (
    <div className='bg-slate-200 rounded bg-opacity-20 items-center flex w-10/12 md:w-72 justify-center py-5 px-2 mx-5'>
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
          <input
            className="py-3 px-4 w-11/12 md:w-52 border-2 border-gray-200 rounded-lg text-md"
            type='date'
            placeholder='date'
            value={createdDate}
            onChange={handledateChange}
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