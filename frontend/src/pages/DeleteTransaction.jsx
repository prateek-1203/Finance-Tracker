import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../config";

function DeleteTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await fetch(`${API_URL}/transactions/${id}`);
        const data = await res.json();
        setTransaction(data);
      } catch (err) {
        console.error("Error fetching transaction:", err);
      }
    };

    fetchTransaction();
  }, [id]);


  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/transactions/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        navigate("/"); 
      } else {
        console.error("Failed to delete transaction");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!transaction) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded text-center">
      <h2 className="text-xl font-bold mb-4">Delete Transaction</h2>
      <p className="mb-4">
        Are you sure you want to delete{" "}
        <span className="font-semibold">{transaction.title}</span> (
        {transaction.amount < 0 ? "Expense" : "Income"}: ₹{transaction.amount})?
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:bg-gray-400"
        >
          {loading ? "Deleting..." : "Yes, Delete"}
        </button>
        <Link
          to="/"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default DeleteTransaction;
