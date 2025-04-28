import { Transaction } from "../../../models/transaction";
import dbConnect from "../../../lib/db";

export async function POST(req) {
  await dbConnect();
  const { amount, date, description, category } = await req.json();
  try {
    const transaction = new Transaction({ amount, date, description, category });
    await transaction.save();
    return new Response(JSON.stringify(transaction), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const transactions = await Transaction.find({});
    return new Response(JSON.stringify(transactions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}
