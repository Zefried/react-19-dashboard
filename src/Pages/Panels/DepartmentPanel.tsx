import { useState, } from "react";
import './Styles/DepartmentPanel.css';
import { useNavigate } from "react-router-dom";

const DepartmentPanel = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const stats = {
    agents: 24,
    workers: 132,
    todayCollection: 18500,
    todayEntries: 12,
  };

  const transactions = [
    { id: "TXN101", agent: "Rahul", amount: 1200, type: "Offline", date: "2026-04-12" },
    { id: "TXN102", agent: "Amit", amount: 800, type: "Offline", date: "2026-04-12" },
    { id: "TXN103", agent: "Suman", amount: 1500, type: "Offline", date: "2026-04-11" },
    { id: "TXN104", agent: "Ravi", amount: 2200, type: "Offline", date: "2026-04-11" },
    { id: "TXN105", agent: "Neha", amount: 950, type: "Offline", date: "2026-04-10" },
    { id: "TXN106", agent: "Kiran", amount: 1750, type: "Offline", date: "2026-04-10" },
  ];

  const filteredTransactions = selectedDate
    ? transactions.filter(t => t.date === selectedDate)
    : transactions;

  return (
    <div className="dp-container">

      {/* Header */}
      <div className="dp-header">
        <h1 className="dp-title">Department Dashboard</h1>
      </div>

      {/* Top Cards */}
      <div className="dp-cards">
        <div 
            className="dp-card clickable"
            onClick={() => navigate("/dashboard/department/total-agents")}
        >
            <p>Total Agents</p>
            <h2>{stats.agents}</h2>
        </div>

         <div 
            className="dp-card clickable"
            onClick={() => navigate("/dashboard/department/total-workers")}
        >
            <p>Total Workers</p>
            <h2>{stats.workers}</h2>
        </div>

        <div className="dp-card">
          <p>Today’s Collection</p>
          <h2>₹{stats.todayCollection}</h2>
        </div>

        <div className="dp-card">
          <p>Today’s Entries</p>
          <h2>{stats.todayEntries}</h2>
        </div>
      </div>

      {/* Transactions */}
      <div className="dp-section">

        <div className="dp-section-header">
          <h2 className="dp-section-title">Recent Transactions</h2>

          <div className="dp-controls">
            <input
              type="date"
              className="dp-date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            <button onClick={() => navigate("/dashboard/department/total-transactions")} className="dp-link-btn">View All</button>
          </div>
        </div>

        {/* Table-like list */}
        <div className="dp-list">

          {/* Header row */}
          <div className="dp-list-header">
            <span>ID</span>
            <span>Agent</span>
            <span>Type</span>
            <span>Date</span>
            <span>Amount</span>
          </div>

          {filteredTransactions.map((t) => (
            <div key={t.id} className="dp-list-item">
              <span>{t.id}</span>
              <span>{t.agent}</span>
              <span>{t.type}</span>
              <span>{t.date}</span>
              <span>₹{t.amount}</span>
            </div>
          ))}

        </div>

      </div>

      {/* Quick Actions */}
      <div className="dp-section">
        <h2 className="dp-section-title">Quick Actions</h2>
        <div className="dp-actions-list">
          <button className="dp-btn" onClick={() => navigate("/dashboard/department/add-agent")}>
            + Create Agent
          </button>
          <button className="dp-btn" onClick={() => navigate("/dashboard/department/add-transaction")}>
            + Add Transaction
          </button>
        </div>
      </div>

    </div>
  );
};

export default DepartmentPanel;