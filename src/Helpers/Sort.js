
export const sortExpensesByAmount = (expenses) => {
    const sortedExpenses = [...expenses].sort((a, b) => a.amount.localeCompare(b.amount));
    return sortedExpenses;
  };

  export const sortExpensesByDate = (expenses) => {
    const sortedExpenses = [...expenses].sort((a, b) => new Date(a.createdDate)- new Date(b.createdDate));
    return sortedExpenses;
  };
  