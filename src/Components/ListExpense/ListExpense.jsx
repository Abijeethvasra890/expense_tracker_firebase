import React from 'react';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ListExpense = ({expenses}) => {
  return (
    <div className="p-5 text-white h-screen w-full"
      >
      <h2 className="text-xl font-bold mb-4 ml-5">List of Expenses </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ml-5">
        {expenses?.length > 0 ? (
          expenses.map(expense => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))
        ) : (
          <div className="text-xl font-semibold mb-2">No Expense</div>
        )}
      </div>
    </div>
  );
};

export default ListExpense;
