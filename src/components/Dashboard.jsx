import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyExpenseChart = ({ transactions }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: transactions.reduce((acc, transaction) => {
          const month = new Date(transaction.date).getMonth();
          acc[month] = (acc[month] || 0) + transaction.amount;
          return acc;
        }, Array(12).fill(0)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Monthly Expenses</h3>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default MonthlyExpenseChart;
