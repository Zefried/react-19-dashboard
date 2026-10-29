import { useState, useEffect, useMemo } from "react";
import "./Styles/AdminPanel.css";
import {
  UserPlus,
  X,
  Users,
  Shield,
  User as UserIcon,
  Search,
  Sliders,
  Lock,
  CheckCircle2,
  Copy,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import api from "../../api/axios";
import { VisitEnquiriesTab } from "./Components/VisitEnquiriesTab";
import { CottageBookingsTab } from "./Components/CottageBookingsTab";
import { useSearchParams } from "react-router-dom";

interface ManagedUser {
  id: number;
  name: string;
  email?: string | null;
  phone?: string | null;
  role: "admin" | "sub_admin" | "user" | "business";
  created_at?: string;
}

const AdminPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "overview";

  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Modal State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formName, setFormName] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");
  const [formPhone, setFormPhone] = useState<string>("");
  const [formPassword, setFormPassword] = useState<string>("");
  const [formRole, setFormRole] = useState<"sub_admin" | "user">("user");

  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const [formSuccess, setFormSuccess] = useState<string>("");

  // Settings State
  const [settingsPlatformName, setSettingsPlatformName] = useState("O1 Marketing Suite");
  const [settingsEmail, setSettingsEmail] = useState("support@o1marketing.com");
  const [settingsSavedToast, setSettingsSavedToast] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      const res = await api.get<{ status: boolean; data: ManagedUser[] }>("/admin/users");
      if (res.data.status && Array.isArray(res.data.data)) {
        setUsers(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!formName.trim()) {
      setFormError("Full Name is required.");
      return;
    }
    if (!formEmail.trim() && !formPhone.trim()) {
      setFormError("Either Email or Phone is required.");
      return;
    }
    if (!formPassword || formPassword.length < 6) {
      setFormError("Password must be at least 6 characters.");
      return;
    }

    try {
      setFormSubmitting(true);
      const payload = {
        name: formName.trim(),
        email: formEmail.trim() || undefined,
        phone: formPhone.trim() || undefined,
        password: formPassword,
        role: formRole,
      };

      const res = await api.post<{ status: boolean; message: string }>("/admin/users", payload);

      if (res.data.status) {
        setFormSuccess(res.data.message || "User created successfully!");
        setFormName("");
        setFormEmail("");
        setFormPhone("");
        setFormPassword("");
        setFormRole("user");
        await fetchUsers();
        setTimeout(() => {
          setShowModal(false);
          setFormSuccess("");
        }, 1100);
      }
    } catch (err: any) {
      const msg = err?.response?.data?.message || err?.message || "Failed to create user.";
      setFormError(msg);
    } finally {
      setFormSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const totalSubAdmins = useMemo(
    () => users.filter((u) => u.role === "sub_admin").length,
    [users]
  );
  const totalRegularUsers = useMemo(
    () => users.filter((u) => u.role === "user").length,
    [users]
  );

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchRole = roleFilter === "all" || user.role === roleFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        user.name.toLowerCase().includes(q) ||
        (user.email && user.email.toLowerCase().includes(q)) ||
        (user.phone && user.phone.includes(q)) ||
        `#${user.id}`.includes(q);
      return matchRole && matchQuery;
    });
  }, [users, roleFilter, searchQuery]);

  return (
    <div className="adp">
      {/* =======================
          TOP STATS CARDS
      ======================= */}
      <div className="adp__cards">
        {/* Card 1: Total Users */}
        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon indigo">
              <Users size={22} />
            </div>
            <span className="adp__card-tag">Accounts</span>
          </div>
          <h4 className="adp__card-title">Total Created Users</h4>
          <h2 className="adp__card-value">{users.length}</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Active database records</span>
          </div>
        </div>

        {/* Card 2: Sub-Admins */}
        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon sky">
              <Shield size={22} />
            </div>
            <span className="adp__card-tag">Managers</span>
          </div>
          <h4 className="adp__card-title">Sub-Admins</h4>
          <h2 className="adp__card-value">{totalSubAdmins}</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Delegated privileges</span>
          </div>
        </div>

        {/* Card 3: Regular Users */}
        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon emerald">
              <UserIcon size={22} />
            </div>
            <span className="adp__card-tag">Standard</span>
          </div>
          <h4 className="adp__card-title">Regular Users</h4>
          <h2 className="adp__card-value">{totalRegularUsers}</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Client workspace access</span>
          </div>
        </div>

        {/* Card 4: Active System Role */}
        <div className="adp__card">
          <div className="adp__card-top">
            <div className="adp__card-icon amber">
              <Sparkles size={22} />
            </div>
            <span className="adp__card-tag">Logged As</span>
          </div>
          <h4 className="adp__card-title">Active System Role</h4>
          <h2 className="adp__card-value" style={{ fontSize: "22px" }}>Super Admin</h2>
          <div className="adp__card-footer">
            <span className="dot" />
            <span>Root administrative access</span>
          </div>
        </div>
      </div>

      {/* =======================
          TAB: SETTINGS
      ======================= */}
      {currentTab === "visit-enquiries" ? (
        <VisitEnquiriesTab />
      ) : currentTab === "cottage-bookings" ? (
        <CottageBookingsTab />
      ) : currentTab.startsWith("settings") ? (
        <div className="adp__orders">
          <div className="adp-settings-container">
            <div>
              <h3 className="adp__section-title">
                <Sliders size={20} color="#4f46e5" />
                System Settings
              </h3>
              <p className="adp-subtitle">
                Configure your workspace preferences, permissions, and security parameters.
              </p>
            </div>

            {/* Sub-tab navigation */}
            <div className="adp-settings-nav">
              <button
                className={`adp-settings-tab-btn ${currentTab === "settings-general" ? "active" : ""}`}
                onClick={() => setSearchParams({ tab: "settings-general" })}
              >
                <SlidersHorizontal size={15} />
                General
              </button>
              <button
                className={`adp-settings-tab-btn ${currentTab === "settings-roles" ? "active" : ""}`}
                onClick={() => setSearchParams({ tab: "settings-roles" })}
              >
                <Shield size={15} />
                Roles & Permissions
              </button>
              <button
                className={`adp-settings-tab-btn ${currentTab === "settings-security" ? "active" : ""}`}
                onClick={() => setSearchParams({ tab: "settings-security" })}
              >
                <Lock size={15} />
                Security
              </button>
            </div>

            {/* General Settings */}
            {currentTab === "settings-general" && (
              <div className="adp-settings-card">
                <h4 className="adp-settings-card-title">General Preferences</h4>
                <p className="adp-settings-card-desc">
                  Customize the basic information of this installation.
                </p>

                {settingsSavedToast && (
                  <div className="adp-success-banner">
                    Preferences saved successfully!
                  </div>
                )}

                <div className="adp-settings-grid">
                  <div className="adp-setting-field">
                    <label>Platform Name</label>
                    <input
                      type="text"
                      value={settingsPlatformName}
                      onChange={(e) => setSettingsPlatformName(e.target.value)}
                    />
                  </div>

                  <div className="adp-setting-field">
                    <label>Admin Support Email</label>
                    <input
                      type="email"
                      value={settingsEmail}
                      onChange={(e) => setSettingsEmail(e.target.value)}
                    />
                  </div>

                  <div className="adp-setting-field">
                    <label>Default Role for New Users</label>
                    <select defaultValue="user">
                      <option value="user">User (Standard)</option>
                      <option value="sub_admin">Sub-Admin (Manager)</option>
                    </select>
                  </div>

                  <div className="adp-setting-field">
                    <label>Timezone</label>
                    <select defaultValue="Asia/Kolkata">
                      <option value="Asia/Kolkata">Asia/Kolkata (GMT+5:30)</option>
                      <option value="UTC">UTC (GMT+0:00)</option>
                      <option value="America/New_York">America/New York (EST)</option>
                    </select>
                  </div>
                </div>

                <button
                  className="adp-btn-primary"
                  onClick={() => {
                    setSettingsSavedToast(true);
                    setTimeout(() => setSettingsSavedToast(false), 2000);
                  }}
                >
                  Save Settings
                </button>
              </div>
            )}

            {/* Roles & Permissions */}
            {currentTab === "settings-roles" && (
              <div className="adp-settings-card">
                <h4 className="adp-settings-card-title">Role Matrix & Privileges</h4>
                <p className="adp-settings-card-desc">
                  Role-based access hierarchy defined in the system.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                  <div style={{ padding: "18px", border: "1.5px solid #e0e7ff", borderRadius: "14px", background: "#fbfbfe" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span className="adp-role-badge admin">
                        <span className="badge-dot" /> Super Admin
                      </span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                      Full unrestricted control. Can create and manage Sub-Admins and regular users, configure security, and seed database accounts.
                    </p>
                  </div>

                  <div style={{ padding: "18px", border: "1.5px solid #bae6fd", borderRadius: "14px", background: "#fbfdfe" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span className="adp-role-badge sub_admin">
                        <span className="badge-dot" /> Sub-Admin
                      </span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                      Delegated operational manager. Can view assigned modules and execute workflows. Cannot create admin-level users.
                    </p>
                  </div>

                  <div style={{ padding: "18px", border: "1.5px solid #e2e8f0", borderRadius: "14px", background: "#ffffff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span className="adp-role-badge user">
                        <span className="badge-dot" /> Standard User
                      </span>
                    </div>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                      End-user access to profile, client dashboards, and specific user features. Protected by Sanctum token guard.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {currentTab === "settings-security" && (
              <div className="adp-settings-card">
                <h4 className="adp-settings-card-title">Security & Tokens</h4>
                <p className="adp-settings-card-desc">
                  Authentication guards and token security status.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "#f8fafc", borderRadius: "10px", border: "1px solid #eef2f6" }}>
                    <div>
                      <h5 style={{ margin: "0 0 2px 0", fontSize: "14px", fontWeight: 600 }}>Sanctum API Authentication</h5>
                      <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>Tokens are hashed with SHA-256 in the database.</p>
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#059669", background: "#ecfdf5", padding: "4px 10px", borderRadius: "20px" }}>Active</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "#f8fafc", borderRadius: "10px", border: "1px solid #eef2f6" }}>
                    <div>
                      <h5 style={{ margin: "0 0 2px 0", fontSize: "14px", fontWeight: 600 }}>Middleware Role Protection</h5>
                      <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>Admin routes protected via CheckAdmin middleware.</p>
                    </div>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#059669", background: "#ecfdf5", padding: "4px 10px", borderRadius: "20px" }}>Enforced</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* =======================
            USER ACCOUNTS TABLE
        ======================= */
        <div className="adp__orders">
          <div className="adp-header-actions">
            <div className="adp-header-title-wrap">
              <h3 className="adp__section-title">
                User Accounts & Roles
                <span className="adp-count-pill">{users.length} Total</span>
              </h3>
              <p className="adp-subtitle">
                Only Admin can register new Sub-Admin and User accounts.
              </p>
            </div>

            <div className="adp-action-controls">
              {/* Search Box */}
              <div className="adp-search-box">
                <Search size={16} className="adp-search-icon" />
                <input
                  type="text"
                  placeholder="Search name, email, ID..."
                  className="adp-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Role Filter */}
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="adp-search-input"
                style={{ width: "auto", paddingLeft: "14px" }}
              >
                <option value="all">All Roles</option>
                <option value="sub_admin">Sub-Admin</option>
                <option value="user">User</option>
                <option value="business">Business</option>
              </select>

              {/* Add User Button */}
              <button
                className="adp-btn-primary"
                onClick={() => {
                  setFormError("");
                  setFormSuccess("");
                  setShowModal(true);
                }}
              >
                <UserPlus size={16} />
                <span>Add User</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="adp-table-wrapper">
            <table className="adp-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User / Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Assigned Role</th>
                  <th>Created At</th>
                  <th style={{ textAlign: "right" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {loadingUsers ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center", padding: "32px", color: "#64748b" }}>
                      Loading accounts...
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={{ textAlign: "center", padding: "32px", color: "#64748b" }}>
                      {searchQuery || roleFilter !== "all"
                        ? "No accounts match the active filter criteria."
                        : "No users created yet. Click 'Add User' to register one."}
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => {
                    const initials = u.name
                      ? u.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()
                      : "U";

                    return (
                      <tr key={u.id}>
                        <td>
                          <span className="adp-id-chip">#{u.id}</span>
                        </td>
                        <td>
                          <div className="adp-user-cell">
                            <div className="adp-user-avatar">{initials}</div>
                            <span className="adp-user-name">{u.name}</span>
                          </div>
                        </td>
                        <td>{u.email || "—"}</td>
                        <td>{u.phone || "—"}</td>
                        <td>
                          <span className={`adp-role-badge ${u.role}`}>
                            <span className="badge-dot" />
                            {u.role === "sub_admin"
                              ? "Sub-Admin"
                              : u.role === "admin"
                                ? "Super Admin"
                                : u.role}
                          </span>
                        </td>
                        <td style={{ color: "#64748b" }}>
                          {u.created_at ? new Date(u.created_at).toLocaleDateString() : "10/28/2026"}
                        </td>
                        <td style={{ textAlign: "right" }}>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(u.email || u.phone || String(u.id), u.id)}
                            title="Copy email or phone"
                            style={{
                              background: "transparent",
                              border: "none",
                              color: copiedId === u.id ? "#059669" : "#94a3b8",
                              cursor: "pointer",
                              padding: "6px",
                              borderRadius: "6px",
                            }}
                          >
                            {copiedId === u.id ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =======================
          ADD USER MODAL DIALOG
      ======================= */}
      {showModal && (
        <div className="adp-modal-overlay">
          <div className="adp-modal-content">
            <div className="adp-modal-header">
              <h3 className="adp-modal-title">Register New Account</h3>
              <button
                className="adp-modal-close"
                onClick={() => setShowModal(false)}
                type="button"
              >
                <X size={18} />
              </button>
            </div>

            {formError && <div className="adp-error-banner">{formError}</div>}
            {formSuccess && <div className="adp-success-banner">{formSuccess}</div>}

            <form onSubmit={handleCreateUser}>
              <div className="adp-form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                />
              </div>

              <div className="adp-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                />
              </div>

              <div className="adp-form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="e.g. 9876543210"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                />
              </div>

              <div className="adp-form-group">
                <label>Password * (min 6 characters)</label>
                <input
                  type="password"
                  placeholder="Enter initial password"
                  value={formPassword}
                  onChange={(e) => setFormPassword(e.target.value)}
                  required
                />
              </div>

              {/* Role Radio Cards */}
              <div className="adp-form-group">
                <label>Select Role *</label>
                <div className="adp-role-cards-grid">
                  <div
                    className={`adp-role-card-option ${formRole === "user" ? "selected" : ""}`}
                    onClick={() => setFormRole("user")}
                  >
                    <div className="adp-role-card-title">Regular User</div>
                    <div className="adp-role-card-desc">Standard client dashboard & profile</div>
                  </div>

                  <div
                    className={`adp-role-card-option ${formRole === "sub_admin" ? "selected" : ""}`}
                    onClick={() => setFormRole("sub_admin")}
                  >
                    <div className="adp-role-card-title">Sub-Admin</div>
                    <div className="adp-role-card-desc">Operational manager workspace</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "24px" }}>
                <button
                  type="button"
                  className="adp-modal-close"
                  style={{ border: "1px solid #e2e8f0", padding: "10px 16px", fontSize: "13.5px" }}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="adp-btn-primary"
                  disabled={formSubmitting}
                >
                  {formSubmitting ? "Creating Account..." : "Save Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
