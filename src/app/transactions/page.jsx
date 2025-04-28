import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";

export default function Transactions() {
  const handleAddTransaction = () => {
  };

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionList />
    </div>
  );
}
