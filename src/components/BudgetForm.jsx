"use client";
import { useState } from "react";

export default function BudgetForm({ onAdd }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBudget = { category, amount, month };
    const res = await fetch("/api/budgets", {
      method: "POST",
      body: JSON.stringify(newBudget),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      onAdd();
      setCategory("");
      setAmount("");
      setMonth("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        required
      />
      <button type="submit">Add Budget</button>
    </form>
  );
}
