import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  category: { type: String },
});

export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
