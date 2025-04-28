import { Budget } from "../../../models/budget";
import dbConnect from "../../../lib/db";

export async function POST(req) {
  await dbConnect();
  const { category, amount, month } = await req.json();
  try {
    const budget = new Budget({ category, amount, month });
    await budget.save();
    return new Response(JSON.stringify(budget), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const budgets = await Budget.find({});
    return new Response(JSON.stringify(budgets), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}
