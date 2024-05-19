import React from 'react';
import DeleteTodo from '../DeleteExpense/DeleteExpense';
import EditExpense from '../EditExpense/EditExpense';
import DeleteExpense from '../DeleteExpense/DeleteExpense';


const ExpenseCard = ({ expense }) => {
 // console.log(expense);
  let bgcard;
  if(expense.type == "Expense") bgcard = 'bg-red-200';
  else if(expense.type == "Investment")  bgcard = 'bg-green-200';
  else bgcard = 'bg-amber-200';

  return (
    <div key={expense.id} className= {`p-4 rounded-lg shadow-md ${bgcard}`}>
      <div className='flex justify-between'>
        <div>
          <h3 className="text-xl text-black font-semibold">{expense.name}</h3>
          <h5 className="text-l text-black font-semibold mb-2">{expense.amount}</h5>
          <p className="text-gray-600">{expense.type}</p>
          <p className="text-gray-600">{expense.createdDate}</p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-around md:gap-2'>
        <EditExpense expense={expense}/>
        <DeleteExpense expenseId={expense.id}/>
      </div>
    </div>
  );
};

export default ExpenseCard;
