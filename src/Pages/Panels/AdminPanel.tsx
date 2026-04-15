
import './Styles/AdminPanel.css';
import { useNavigate } from 'react-router';

const AdminPanel = () => {
  const navigate = useNavigate();
  const kpis = [
    { label: "Total Agents", value: 120, path : "/dashboard/total-agents" },
    { label: "Total Workers", value: 850, path : "/dashboard/total-workers" },
    { label: "Active Departments", value: 12 },
    { label: "Total Revenue", value: "₹1,20,000" },
    { label: "Total Commission", value: "₹25,000" },
  ];

  const pendingTransactions = [
    { id: "TXN201", agent: "Rahul", type: "Online", date: "2026-04-13", amount: "₹1200" },
    { id: "TXN202", agent: "Amit", type: "Online", date: "2026-04-13", amount: "₹800" },
    { id: "TXN203", agent: "Arush", type: "Online", date: "2026-04-13", amount: "₹500" },
  ];

  const latestTransactions = [
    { id: "TXN101", agent: "Rahul", type: "Offline", date: "2026-04-12", amount: "₹1200" },
    { id: "TXN102", agent: "Amit", type: "Online", date: "2026-04-11", amount: "₹800" },
    { id: "TXN103", agent: "Suresh", type: "Offline", date: "2026-04-10", amount: "₹950" },
    { id: "TXN104", agent: "Vikram", type: "Online", date: "2026-04-09", amount: "₹1100" },
    { id: "TXN105", agent: "Rohit", type: "Offline", date: "2026-04-08", amount: "₹700" },
  ];

  return (
    <div className="adp-container">
      <h1 className="adp-title">Admin Dashboard</h1>

      {/* KPIs */}
      <div className="adp-kpis">
        {kpis.map((item, i) => (
          <div
            key={i}
            className="adp-kpi-card"
            onClick={() => item.path && navigate(item.path)}
            style={{ cursor: item.path ? "pointer" : "default" }}
          >
            <p>{item.label}</p>
            <h3>{item.value}</h3>
          </div>
        ))}
      </div>
      {/* Transactions */}
      <div className="adp-transactions">

        {/* Pending */}
        <div className="adp-card">
          <div className="adp-card-header">
            <h2>Pending Transactions</h2>
            <span className="adp-link" onClick={()=>{navigate('total-transactions')}}>View All →</span>
          </div>

          <table className="adp-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Agent</th>
                <th>Mode</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {pendingTransactions.map((txn) => (
                <tr key={txn.id}>
                  <td>{txn.id}</td>
                  <td>{txn.agent}</td>
                  <td>{txn.type}</td>
                  <td>{txn.date}</td>
                  <td className="adp-amount">{txn.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Latest */}
        <div className="adp-card">
          <div className="adp-card-header">
            <h2>Latest Transactions</h2>
            <span className="adp-link"  onClick={()=>{navigate('total-transactions')}}>View All →</span>
          </div>

          <table className="adp-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Agent</th>
                <th>Mode</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {latestTransactions.map((txn) => (
                <tr key={txn.id}>
                  <td>{txn.id}</td>
                  <td>{txn.agent}</td>
                  <td>{txn.type}</td>
                  <td>{txn.date}</td>
                  <td className="adp-amount">{txn.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="adp-card">
        <div className="adp-card-header">
          <h2>Quick Actions</h2>
        </div>

        <div className="adp-quick-actions">
          <button>Create Department</button>
          <button>Create Agent</button>
          <button>Add Category</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;