import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './TotalWorkerList.css'

export const TotalWorkerList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const workers = [
    {
      id: "WRK101",
      name: "Ramesh",
      category: "Electrician",
      status: "Approved",
      agent: "Rahul Sharma",
    },
    {
      id: "WRK102",
      name: "Sita",
      category: "Maid",
      status: "Pending",
      agent: "Amit Das",
    },
    {
      id: "WRK103",
      name: "Aman",
      category: "Plumber",
      status: "Approved",
      agent: "Rahul Sharma",
    },
    {
      id: "WRK104",
      name: "Kiran",
      category: "Carpenter",
      status: "Pending",
      agent: "Priya Singh",
    },
  ];

  const filteredWorkers = workers.filter((w) => {
    const matchSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.id.toLowerCase().includes(search.toLowerCase()) ||
      w.agent.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter ? w.status === statusFilter : true;

    return matchSearch && matchStatus;
  });

  return (
    <div className="twl-container">

      {/* Header */}
      <div className="twl-header">
        <h2 className="twl-title">All Workers</h2>
      </div>

      {/* Controls */}
      <div className="twl-section-header">
        <div className="twl-controls">
          <input
            className="twl-input"
            type="text"
            placeholder="Search name / ID / agent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="twl-input"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="twl-table-wrapper">
        <table className="twl-table">
          <thead>
            <tr className="twl-table-row">
              <th className="twl-th">ID</th>
              <th className="twl-th">Name</th>
              <th className="twl-th">Category</th>
              <th className="twl-th">Agent</th>
              <th className="twl-th">Status</th>
              <th className="twl-th">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredWorkers.map((w) => (
              <tr key={w.id} className="twl-table-row">
                <td className="twl-td">{w.id}</td>
                <td className="twl-td">{w.name}</td>
                <td className="twl-td">{w.category}</td>
                <td className="twl-td">{w.agent}</td>

                <td className="twl-td">
                  <span className={`twl-badge twl-badge-${w.status.toLowerCase()}`}>
                    {w.status}
                  </span>
                </td>

                <td className="twl-td">
                  <div className="twl-actions-inline">
                    <button
                      className="twl-link-btn"
                      onClick={() =>
                        navigate(`/dashboard/agent/single-worker`)
                      }
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};