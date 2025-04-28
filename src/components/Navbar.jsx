import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/transactions">Transactions</Link></li>
        <li><Link href="/budgets">Budgets</Link></li>
      </ul>
    </nav>
  );
}
