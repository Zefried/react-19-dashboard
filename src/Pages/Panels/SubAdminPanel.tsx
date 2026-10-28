import { useContext } from "react";
import "./Styles/AdminPanel.css";
import { AuthContext } from "../../Context/AuthContextValue";
import { ShieldCheck, Activity, Layers, Server } from "lucide-react";

const SubAdminPanel = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="adp">
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", margin: 0, letterSpacing: "-0.01em" }}>
          Welcome back, {auth?.user?.name || "Sub-Admin"} 👋
        </h2>
        <p style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>
          Sub-Admin Operational Management Console
        </p>
      </div>

      {/* Top Cards */}
      <div className="adp__cards">
        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon sky">
              <ShieldCheck size={22} />
            </div>
            <span className="adp__card-tag">Role</span>
          </div>
          <h4 className="adp__card-title">Access Level</h4>
          <h2 className="adp__card-value">Sub-Admin</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Operational Manager</span>
          </div>
        </div>

        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon emerald">
              <Activity size={22} />
            </div>
            <span className="adp__card-tag">Health</span>
          </div>
          <h4 className="adp__card-title">System Status</h4>
          <h2 className="adp__card-value">Active</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>All systems operational</span>
          </div>
        </div>

        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon indigo">
              <Server size={22} />
            </div>
            <span className="adp__card-tag">Scope</span>
          </div>
          <h4 className="adp__card-title">Permission Scope</h4>
          <h2 className="adp__card-value">Delegated</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Managed by Super Admin</span>
          </div>
        </div>
      </div>

      {/* Overview Box */}
      <div className="adp__orders">
        <h3 className="adp__section-title">
          <Layers size={18} color="#0284c7" />
          Assigned Modules & Workflows
        </h3>
        <p className="adp-subtitle" style={{ marginTop: "6px", marginBottom: "20px" }}>
          You are authenticated as a <strong>Sub-Admin</strong>. You have permissions to monitor and manage delegated tasks.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
          <div style={{ padding: "20px", border: "1px solid #eef2f6", borderRadius: "14px", background: "#f8fafc" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#e0f2fe", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <ShieldCheck size={20} color="#0284c7" />
            </div>
            <h4 style={{ margin: "0 0 6px 0", fontSize: "15px", fontWeight: "600", color: "#0f172a" }}>Daily Operations</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>
              Monitor daily marketing campaigns, review traffic metrics, and maintain lead queues.
            </p>
          </div>

          <div style={{ padding: "20px", border: "1px solid #eef2f6", borderRadius: "14px", background: "#f8fafc" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <Activity size={20} color="#059669" />
            </div>
            <h4 style={{ margin: "0 0 6px 0", fontSize: "15px", fontWeight: "600", color: "#0f172a" }}>System Logs</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>
              Verify user interaction events and audit reports generated across system workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminPanel;
