import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { amount, date, description, category };
    const res = await fetch("/api/transactions", {
      method: "POST",
      body: JSON.stringify(newTransaction),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      onAdd();
      setAmount("");
      setDate("");
      setDescription("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
