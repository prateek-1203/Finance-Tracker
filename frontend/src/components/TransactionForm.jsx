import { useState, useEffect } from "react";

function TransactionForm({ mode = "add", initialData = {}, onSubmit, loading }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [amount, setAmount] = useState(initialData.amount || "");
  const [date, setDate] = useState(initialData.date ? initialData.date.slice(0, 10) : "");
  const [category, setCategory] = useState(initialData.category || "");

useEffect(() => {
  if (initialData && Object.keys(initialData).length > 0) {
    setTitle(initialData.title || "");
    setAmount(initialData.amount || "");
    setDate(initialData.date ? initialData.date.slice(0, 10) : "");
    setCategory(initialData.category || "");
  }
}, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, amount: Number(amount), date, category });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          mode === "add"
            ? "bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
            : "bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400"
        }`}
      >
        {loading ? (mode === "add" ? "Saving..." : "Updating...") : mode === "add" ? "Add Transaction" : "Update Transaction"}
      </button>
    </form>
  );
}

export default TransactionForm;
