import TransactionList from "../../components/TransactionList";
import BudgetList from "../../components/BudgetList";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Transactions</h2>
        <TransactionList />
      </div>
      <div>
        <h2>Budgets</h2>
        <BudgetList />
      </div>
    </div>
  );
}
