import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { updateExpenseAsync } from '../../redux/Slices/ExpenseSlice';
 
 
const EditExpense = ({ expense }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(expense.name);
  const [editedAmount, setEditedAmount] = useState(expense.amount);
  const [editedType, setEditedType] = useState(expense.type);
  const [editedMethod, setEditedMethod] = useState(expense.method);
  const [editedDate, setEditedDate] = useState(expense.createdDate);
  const dispatch = useDispatch();
 
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };
 
  const handleAmountChange = (event) => {
    setEditedAmount(event.target.value);
  };

  const handleTypeChange = (event) =>{
      setEditedType(event.target.value); 
  };
  
  const handleMethodChange = (event) =>{
    setEditedMethod(event.target.value); 
}; 

  const handledateChange = (event) => {
    setEditedDate(event.target.value);
  }

  const handleSaveChanges = () => {
    // Dispatch editTodo action with the updated todo data
    dispatch(updateExpenseAsync(expense.id,{ name: editedName, amount: editedAmount, type: editedType, method: editedMethod, createdDate: editedDate }));
    setIsModalOpen(false);
  };
 
  return (
    <>
      <button
        className="bg-orange-700 hover:bg-black text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleOpenModal}
      >
        Edit Expense
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Todo Modal"
        className="bg-neutral-400 md:w-6/12 sm:w-full p-10 mx-auto my-10 flex flex-col items-center"
      >
        <h2 className='text-xl font-semibold mb-10'>Edit Todo</h2>
        <label>Expense Name: </label>
        <input
          type="text"
          value={editedName}
          onChange={handleNameChange}
          className="py-3 m-2 md:w-64 sm:w-full px-4 border-2 border-gray-200 rounded-lg text-md"
        />
        <label>Expense Amount: </label>
        <input
          type="text"
          value={editedAmount}
          onChange={handleAmountChange}
          className="py-3 m-2 md:w-64 sm:w-full px-4 border-2 border-gray-200 rounded-lg text-md"
        />
        <label>Expense Date: </label>
        <input
           className="py-3 m-2 md:w-64 sm:w-full px-4 border-2 border-gray-200 rounded-lg text-md"
            type='date'
            value={editedDate}
            onChange={handledateChange}
          />

        <label>Expense Type: </label>
        <select
            value={editedType}
            onChange={handleTypeChange}
            className="py-3 m-2 md:w-64 sm:w-full px-4 border-2 border-gray-200 rounded-lg text-md"
          >
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
          </select>

        <label>Expense Method: </label>
        <select
            value={editedMethod}
            onChange={handleMethodChange}
            className="py-3 w-11/12 md:w-52 px-4 border-2 border-gray-200 rounded-lg text-md"
          >
            <option value="UPI">UPI</option>
            <option value="CC">CC</option>
            <option value="DC">DC</option>
            <option value="App">Banking App</option>
            <option value="Cash">Cash</option>
          </select>

        <div className="mt-4">
          <button
            onClick={handleSaveChanges}
            className="bg-green-600 hover:bg-black text-white font-bold py-2 px-4 rounded mr-4"
          >
            Save Changes
          </button>
          <button
            onClick={handleCloseModal}
            className="bg-red-600 hover:bg-black text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>

    </>
  );
};
 
export default EditExpense;