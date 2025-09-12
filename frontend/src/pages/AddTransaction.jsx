import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { API_URL } from "../config";

function AddTransaction() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Add Transaction</h2>
      <TransactionForm mode="add" onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}

export default AddTransaction;
