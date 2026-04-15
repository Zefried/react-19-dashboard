import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddTransaction.css';

type TransactionForm = {
  agent: string;
  amount: string;
  type: string;
  date: string;
  notes: string;
};

export const AddTransaction = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<TransactionForm>({
    agent: "",
    amount: "",
    type: "Offline",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const agents = [
    { id: "AGT101", name: "Rahul Sharma" },
    { id: "AGT102", name: "Amit Das" },
    { id: "AGT103", name: "Priya Singh" },
  ];

 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.agent || !form.amount) {
      alert("Agent and Amount are required");
      return;
    }

    console.log("Transaction:", form);

    navigate(-1);
  };

  return (
    <div className="at-container">

      {/* Header */}
      <div className="at-header">
        <h2 className="at-title">Add Transaction</h2>

        <button
          type="button"
          className="at-link-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      {/* Form */}
      <form className="at-form" onSubmit={handleSubmit}>

        {/* Agent */}
        <div className="at-field">
          <label className="at-label">Agent</label>
          <select
            name="agent"
            className="at-input"
            value={form.agent}
            onChange={handleChange}
          >
            <option value="">Select Agent</option>
            {agents.map((a) => (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div className="at-field">
          <label className="at-label">Amount</label>
          <input
            type="number"
            name="amount"
            className="at-input"
            placeholder="Enter amount"
            value={form.amount}
            onChange={handleChange}
          />
        </div>

        {/* Type */}
        <div className="at-field">
          <label className="at-label">Type</label>
          <select
            name="type"
            className="at-input"
            value={form.type}
            onChange={handleChange}
          >
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
        </div>

        {/* Date */}
        <div className="at-field">
          <label className="at-label">Date</label>
          <input
            type="date"
            name="date"
            className="at-input"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        {/* Notes */}
        <div className="at-field">
          <label className="at-label">Notes</label>
          <textarea
            name="notes"
            className="at-textarea"
            placeholder="Optional notes"
            value={form.notes}
            onChange={handleChange}
          />
        </div>

        {/* Actions */}
        <div className="at-actions">
          <button type="submit" className="at-btn">
            Save Transaction
          </button>

          <button
            type="button"
            className="at-link-btn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};