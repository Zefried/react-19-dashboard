import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/AgentDetail.css';

export const AgentView = () => {
  const navigate = useNavigate();
  const [dateFilter, setDateFilter] = useState("");

  const agent = {
    name: "Rahul Sharma",
    phone: "9876543210",
    id: "AGT1021",
    status: "Active",
  };

  const stats = {
    workers: 18,
    collection: 24500,
    earned: 5200,
    pending: 1800,
  };

  const workers = [
    { id: "WRK101", name: "Ramesh", category: "Electrician", status: "Approved" },
    { id: "WRK102", name: "Sita", category: "Maid", status: "Pending" },
    { id: "WRK103", name: "Aman", category: "Plumber", status: "Approved" },
  ];

  const transactions = [
    { id: "TXN101", date: "2026-04-12", amount: 1200, type: "Offline" },
    { id: "TXN102", date: "2026-04-11", amount: 800, type: "Offline" },
    { id: "TXN103", date: "2026-04-10", amount: 1500, type: "Offline" },
  ];

  const filteredTx = dateFilter
    ? transactions.filter((t) => t.date === dateFilter)
    : transactions;

  return (
    <div className="av-container">

      {/* Header */}
      <div className="av-header">
        <div className="av-header-info">
          <h2 className="av-title">{agent.name}
            <button
              className="av-link-btn"
              onClick={() =>
                navigate("/dashboard/agent-profile")
              }
            >
              View Agent Profile
            </button>
          </h2>
          <p className="av-subtitle">{agent.phone} • {agent.id}</p>
          <span className="av-status">{agent.status}</span>
        </div>

        <div className="av-actions">
          <button className="av-btn av-btn-danger">Disable</button>
          <button className="av-btn">Reset Password</button>
        </div>
      </div>

      {/* Stats */}
      <div className="av-cards">
        <div
            className="av-card av-clickable-card"
            onClick={() => navigate("/dashboard/agent/workers")}
            >
            <p className="av-card-label">Total Workers</p>
            <h3 className="av-card-value">{stats.workers}</h3>
        </div>

        <div className="av-card">
          <p className="av-card-label">Total Collection</p>
          <h3 className="av-card-value">₹{stats.collection}</h3>
        </div>

        <div className="av-card">
          <p className="av-card-label">Commission Earned</p>
          <h3 className="av-card-value">₹{stats.earned}</h3>
        </div>

        <div className="av-card">
          <p className="av-card-label">Pending Commission</p>
          <h3 className="av-card-value">₹{stats.pending}</h3>
        </div>
      </div>

      {/* Workers Table */}
      <div className="av-section">
        <div className="av-section-header">
          <h3 className="av-section-title">Workers</h3>
          <button
            className="av-link-btn"
            onClick={() => navigate("/dashboard/agent/workers")}
          >
            View All
          </button>
        </div>

        <div className="av-table-wrapper">
          <table className="av-table">
            <thead className="av-table-head">
              <tr className="av-table-row">
                <th className="av-th">ID</th>
                <th className="av-th">Name</th>
                <th className="av-th">Category</th>
                <th className="av-th">Status</th>
              </tr>
            </thead>

            <tbody className="av-table-body">
              {workers.map((w) => (
                <tr
                  key={w.id}
                  className="av-table-row av-clickable"
                  onClick={() =>
                    navigate(`/dashboard/workers/${w.id}`)
                  }
                >
                  <td className="av-td">{w.id}</td>
                  <td className="av-td">{w.name}</td>
                  <td className="av-td">{w.category}</td>
                  <td className="av-td">
                    <span className={`av-badge av-badge-${w.status.toLowerCase()}`}>
                      {w.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="av-section">
        <div className="av-section-header">
          <h3 className="av-section-title">Transactions</h3>

          <div className="av-filter-group">
            <input
              className="av-input"
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />

            <button
              className="av-link-btn"
              onClick={() =>
                navigate("/dashboard/total-transactions")
              }
            >
              View All
            </button>
          </div>
        </div>

        <div className="av-table-wrapper">
          <table className="av-table">
            <thead className="av-table-head">
              <tr className="av-table-row">
                <th className="av-th">ID</th>
                <th className="av-th">Agent</th>
                <th className="av-th">Type</th>
                <th className="av-th">Date</th>
                <th className="av-th">Amount</th>
              </tr>
            </thead>

            <tbody className="av-table-body">
              {filteredTx.map((t) => (
                <tr key={t.id} className="av-table-row">
                  <td className="av-td">{t.id}</td>
                  <td className="av-td">{agent.name}</td>
                  <td className="av-td">{t.type}</td>
                  <td className="av-td">{t.date}</td>
                  <td className="av-td">₹{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};