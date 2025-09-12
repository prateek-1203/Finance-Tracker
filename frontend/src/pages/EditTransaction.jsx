import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { API_URL } from "../config";

function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await fetch(`${API_URL}/transactions/${id}`);
        const data = await res.json();
        setTransaction(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTransaction();
  }, [id]);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/transactions/${id}`, {
        method: "PUT",
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
      <h2 className="text-xl font-bold mb-4 text-center">Edit Transaction</h2>
      {transaction.id && (
        <TransactionForm
          mode="edit"
          initialData={transaction}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
}

export default EditTransaction;
