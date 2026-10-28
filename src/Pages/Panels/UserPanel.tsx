import { useContext } from "react";
import "./Styles/AdminPanel.css";
import { AuthContext } from "../../Context/AuthContextValue";
import { UserCheck, Shield, Mail, Phone } from "lucide-react";

const UserPanel = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="adp">
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", margin: 0, letterSpacing: "-0.01em" }}>
          Hello, {auth?.user?.name || "User"} 👋
        </h2>
        <p style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>
          Welcome to your personal client workspace
        </p>
      </div>

      {/* Top Cards */}
      <div className="adp__cards">
        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon indigo">
              <UserCheck size={22} />
            </div>
            <span className="adp__card-tag">Account</span>
          </div>
          <h4 className="adp__card-title">My Role</h4>
          <h2 className="adp__card-value">Standard User</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Authenticated via Sanctum</span>
          </div>
        </div>

        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon emerald">
              <Shield size={22} />
            </div>
            <span className="adp__card-tag">Status</span>
          </div>
          <h4 className="adp__card-title">Account Status</h4>
          <h2 className="adp__card-value">Active</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Full client access enabled</span>
          </div>
        </div>
      </div>

      {/* Profile & Info Box */}
      <div className="adp__orders">
        <h3 className="adp__section-title">
          <UserCheck size={18} color="#4f46e5" />
          My Profile Details
        </h3>
        <p className="adp-subtitle" style={{ marginTop: "4px", marginBottom: "20px" }}>
          Your verified credentials and personal workspace information.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          <div style={{ padding: "16px 20px", border: "1px solid #eef2f6", borderRadius: "12px", background: "#f8fafc" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>Full Name</span>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a", marginTop: "4px" }}>
              {auth?.user?.name || "—"}
            </div>
          </div>

          <div style={{ padding: "16px 20px", border: "1px solid #eef2f6", borderRadius: "12px", background: "#f8fafc" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>Email Address</span>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a", marginTop: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Mail size={15} color="#6366f1" />
              {auth?.user?.email || "—"}
            </div>
          </div>

          <div style={{ padding: "16px 20px", border: "1px solid #eef2f6", borderRadius: "12px", background: "#f8fafc" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>Phone Number</span>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a", marginTop: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Phone size={15} color="#0284c7" />
              {auth?.user?.phone || "Not set"}
            </div>
          </div>

          <div style={{ padding: "16px 20px", border: "1px solid #eef2f6", borderRadius: "12px", background: "#f8fafc" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>Access Role</span>
            <div style={{ marginTop: "6px" }}>
              <span className="adp-role-badge user">
                <span className="badge-dot" /> Regular User
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
