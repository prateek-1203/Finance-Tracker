import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/transactions");
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income + expense;

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Personal Finance Tracker
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded text-center shadow">
          <h2 className="text-lg font-semibold text-green-700">Income</h2>
          <p className="text-xl font-bold text-green-800">₹{income}</p>
        </div>
        <div className="bg-red-100 p-4 rounded text-center shadow">
          <h2 className="text-lg font-semibold text-red-700">Expense</h2>
          <p className="text-xl font-bold text-red-800">₹{Math.abs(expense)}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded text-center shadow">
          <h2 className="text-lg font-semibold text-blue-700">Balance</h2>
          <p className="text-xl font-bold text-blue-800">₹{balance}</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <Link
          to="/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Transaction
        </Link>
      </div>

      {transactions.length === 0 ? (
        <p className="text-center text-gray-600">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 sm:px-4 py-1 sm:py-2">Title</th>
                <th className="border px-2 sm:px-4 py-1 sm:py-2">Amount</th>
                <th className="border px-2 sm:px-4 py-1 sm:py-2">Date</th>
                <th className="border px-2 sm:px-4 py-1 sm:py-2">Category</th>
                <th className="border px-2 sm:px-4 py-1 sm:py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="max-h-[60vh] overflow-y-auto">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="border px-2 sm:px-4 py-1 sm:py-2">{t.title}</td>
                  <td
                    className={`border px-2 sm:px-4 py-1 sm:py-2 ${
                      t.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    ₹{t.amount}
                  </td>
                  <td className="border px-2 sm:px-4 py-1 sm:py-2">
                    {new Date(t.date).toLocaleDateString()}
                  </td>
                  <td className="border px-2 sm:px-4 py-1 sm:py-2">{t.category}</td>
                  <td className="border px-2 sm:px-4 py-1 sm:py-2 flex gap-2 justify-center">
                    <Link
                      to={`/${t.id}/edit`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/${t.id}/delete`}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
