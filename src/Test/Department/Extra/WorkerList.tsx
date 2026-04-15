import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const WorkersList = () => {
  // its agent worker list 
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const agent = {
    name: "Rahul Sharma",
    id: "AGT1021",
  };

  const workers = [
    { id: "WRK101", name: "Ramesh", category: "Electrician", status: "Approved" },
    { id: "WRK102", name: "Sita", category: "Maid", status: "Pending" },
    { id: "WRK103", name: "Aman", category: "Plumber", status: "Approved" },
    { id: "WRK104", name: "Kiran", category: "Carpenter", status: "Pending" },
  ];

  const filteredWorkers = workers.filter((w) => {
    const matchSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.id.toLowerCase().includes(search.toLowerCase());

    const matchStatus = statusFilter ? w.status === statusFilter : true;

    return matchSearch && matchStatus;
  });

  return (
    <div className="av-container">

      <div className="av-header">
        <div>
          <h2 className="av-title">Workers</h2>
          <p className="av-subtitle">{agent.name} • {agent.id}</p>
        </div>

        <button className="av-link-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      <div className="av-section-header">
        <div className="av-controls">
          <input
            className="av-input"
            type="text"
            placeholder="Search name / ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="av-input"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="av-table-wrapper">
        <table className="av-table">
          <thead>
            <tr className="av-table-row">
              <th className="av-th">ID</th>
              <th className="av-th">Name</th>
              <th className="av-th">Category</th>
              <th className="av-th">Status</th>
              <th className="av-th">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredWorkers.map((w) => (
              <tr key={w.id} className="av-table-row">
                <td className="av-td">{w.id}</td>
                <td className="av-td">{w.name}</td>
                <td className="av-td">{w.category}</td>

                <td className="av-td">
                  <span className={`av-badge av-badge-${w.status.toLowerCase()}`}>
                    {w.status}
                  </span>
                </td>

                <td className="av-td">
                  <div className="av-actions-inline">
                    <button
                      className="av-link-btn"
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