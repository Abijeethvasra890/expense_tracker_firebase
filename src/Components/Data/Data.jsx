import React, { useState } from 'react';

const Data = ({ salary, amountRemaining, totalExpenses, totalSavings, totalInvestments, onAddSalary }) => {
    const [newSalary, setNewSalary] = useState('');
    const handleAddSalary = () => {
      onAddSalary(newSalary);
      setNewSalary(''); // Clear the input field after adding salary
    };

  return (
    <div className='bg-slate-200 rounded bg-opacity-20 items-center flex flex-col mr-10 mb-10 mt-10 w-10/12 md:w-screen flex-wrap justify-center py-5 px-2 mx-5'>
      <h3 className="text-2xl text-white font-semibold mb-4">Financial Overview</h3>
      <div className="w-full flex flex-wrap justify-around text-white">
        {salary && <div className="flex flex-col items-center m-2">
          <h4 className="text-xl font-semibold">Salary</h4>
          <p className="text-lg">{salary}</p>
        </div>}
        {amountRemaining && <div className="flex flex-col items-center m-2">
          <h4 className="text-xl font-semibold">Amount Remaining</h4>
          <p className="text-lg">{amountRemaining}</p>
        </div>}
        <div className="flex flex-col items-center m-2">
          <h4 className="text-xl font-semibold">Total Expenses</h4>
          <p className="text-lg">{totalExpenses}</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <h4 className="text-xl font-semibold">Total Savings</h4>
          <p className="text-lg">{totalSavings}</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <h4 className="text-xl font-semibold">Total Investments</h4>
          <p className="text-lg">{totalInvestments}</p>
        </div>
      </div>
      {onAddSalary && <div className="w-full flex justify-center mt-4">
        <input
          type="text"
          placeholder="Enter new salary"
          value={newSalary}
          onChange={(e) => setNewSalary(e.target.value)}
          className="p-2 rounded mr-2"
        />
        <button
          onClick={handleAddSalary}
          className="bg-neutral-600 text-white p-2 rounded"
        >
          Add Salary
        </button>
      </div>}
    </div>
  );
}

export default Data;
