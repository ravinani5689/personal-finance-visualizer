import BudgetForm from "../../components/BudgetForm";
import BudgetList from "../../components/BudgetList";

export default function Budgets() {
  const handleAddBudget = () => {
  };

  return (
    <div>
      <h1>Budgets</h1>
      <BudgetForm onAdd={handleAddBudget} />
      <BudgetList />
    </div>
  );
}
