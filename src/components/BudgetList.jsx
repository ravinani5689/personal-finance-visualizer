import { useEffect, useState } from "react";

export default function BudgetList() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      const res = await fetch("/api/budgets");
      const data = await res.json();
      setBudgets(data);
    };
    fetchBudgets();
  }, []);

  return (
    <div>
      <h2>Budgets</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget._id}>
            {budget.category} - {budget.amount} - {budget.month}
          </li>
        ))}
      </ul>
    </div>
  );
}
