import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './TotalAgent.css';

export const TotalAgent = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const agents = [
    { id: "AGT101", name: "Rahul Sharma", phone: "9876543210", status: "Active" },
    { id: "AGT102", name: "Amit Das", phone: "9123456780", status: "Disabled" },
    { id: "AGT103", name: "Priya Singh", phone: "9988776655", status: "Active" },
  ];

  const filtered = agents.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ta-container">

      {/* Header */}
      <div className="ta-header">
        <h2 className="ta-title">Agents</h2>
      </div>

      {/* Search */}
      <div className="ta-controls">
        <input
          className="ta-input"
          type="text"
          placeholder="Search name / ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="ta-table-wrapper">
        <table className="ta-table">
          <thead>
            <tr className="ta-row">
              <th className="ta-th">ID</th>
              <th className="ta-th">Name</th>
              <th className="ta-th">Phone</th>
              <th className="ta-th">Status</th>
              <th className="ta-th">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="ta-row">
                <td className="ta-td">{a.id}</td>
                <td className="ta-td">{a.name}</td>
                <td className="ta-td">{a.phone}</td>

                <td className="ta-td">
                  <span className={`ta-badge ta-badge-${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </td>

                <td className="ta-td">
                  <button
                    className="ta-link-btn"
                    onClick={() =>
                      navigate(`/dashboard/agent-detail/`)
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};