import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = ({ expenses }) => {
  // Calculate total amount for each method type
  const methodAmounts = expenses.reduce((amounts, expense) => {
    const method = expense.method;
    const amount = parseFloat(expense.amount);
    amounts[method] = (amounts[method] || 0) + amount;
    return amounts;
  }, {});

  // Prepare data for the pie chart
  const data = {
    labels: Object.keys(methodAmounts),
    datasets: [
      {
        label: 'Expenses by Method',
        data: Object.values(methodAmounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  // Options for the Pie chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
         labels: {
          color: 'white', // Set legend text color to white
        },
      },
    },
  };

  return (
    <div className='bg-slate-200 rounded bg-opacity-20 ml-5 w-10/12 mt-5 md:w-72'>
      <h3 className="text-l text-white font-semibold ml-2 mb-4">Expenses by Method</h3>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default Graph;
