import { useState } from "react";
import "./ViewAgent.css";
import { useNavigate } from "react-router-dom";

export const ViewAgents = () => {
  const navigate = useNavigate();
  const agents = [
    { id: "AG001", name: "Rahul Sharma", mobile: "9876543210", category: "Electricians", date: "2026-04-10", status: "Active" },
    { id: "AG002", name: "Amit Das", mobile: "9123456780", category: "Plumbers", date: "2026-04-09", status: "Pending" },
    { id: "AG003", name: "Suresh Kumar", mobile: "9988776655", category: "Carpenters", date: "2026-04-08", status: "Inactive" },
    { id: "AG004", name: "Vikram Singh", mobile: "9090909090", category: "Drivers", date: "2026-04-07", status: "Active" },
    { id: "AG005", name: "Rohit Kumar", mobile: "8888888888", category: "Labour", date: "2026-04-06", status: "Pending" },
    { id: "AG006", name: "Arjun Das", mobile: "7777777777", category: "AC Repair", date: "2026-04-05", status: "Active" },
    { id: "AG007", name: "Deepak Sharma", mobile: "6666666666", category: "Housekeeping", date: "2026-04-04", status: "Inactive" },
  ];

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 5;

  const filtered = agents.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);

  const paginated = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="vag-container">
      <h1 className="vag-title">View Agents</h1>

      {/* Search */}
      <div className="vag-topbar">
        <input
          className="vag-search"
          placeholder="Search agents..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Table */}
      <div className="vag-table-wrapper">
        <table className="vag-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Category</th>
              <th>Registered</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.mobile}</td>
                <td>{a.category}</td>
                <td>{a.date}</td>
                <td>
                  <span className={`vag-status ${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </td>
                <td>
                  <button className="vag-btn" onClick={() => navigate("/dashboard/agent-detail")}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="vag-pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="vag-page-btn"
        >
          Prev
        </button>

        <span className="vag-page-info">
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="vag-page-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};