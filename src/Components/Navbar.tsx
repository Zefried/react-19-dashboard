import { Bell, Moon, Sun, PanelLeft, User, LogOut, ChevronDown } from "lucide-react";
import "./Style/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextValue";
import { useNavigate, useSearchParams } from "react-router-dom";

type NavbarProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNotif: React.Dispatch<React.SetStateAction<boolean>>;
  dark: boolean;
  showNotif: boolean;
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = ({
  setSidebarOpen,
  dark,
  setDark,
  showNotif,
  setShowNotif,
  showProfile,
  setShowProfile,
}: NavbarProps) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tab = searchParams.get("tab");

  let pageTitle = "Dashboard";
  if (tab === "overview") pageTitle = "Dashboard / Overview";
  else if (tab === "users") pageTitle = "Dashboard / User Management";
  else if (tab?.startsWith("settings")) pageTitle = "Dashboard / Settings";

  const userInitial = auth?.user?.name ? auth.user.name[0].toUpperCase() : "A";

  return (
    <header className={`navbar ${dark ? "dark" : ""}`}>
      {/* LEFT: Toggle & Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          className="icon-btn"
          onClick={() => setSidebarOpen((prev) => !prev)}
          title="Toggle Sidebar"
        >
          <PanelLeft size={18} />
        </button>
        <span className="nav-title">{pageTitle}</span>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3 extra-margin">
        {/* Dark/Light toggle */}
        <button
          onClick={() => setDark((prev) => !prev)}
          className="icon-btn"
          title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            className="icon-btn"
            onClick={() => setShowNotif((prev) => !prev)}
            title="Notifications"
          >
            <Bell size={17} />
          </button>

          {showNotif && (
            <div className="notif-box">
              <h3 style={{ fontSize: "14px", fontWeight: 600, margin: "0 0 6px 0" }}>Notifications</h3>
              <p style={{ fontSize: "12.5px", color: "#64748b", margin: 0 }}>No new alerts right now.</p>
            </div>
          )}
        </div>

        {/* User Pill / Avatar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            padding: "4px 8px 4px 4px",
            borderRadius: "20px",
            border: "1px solid #eef2f6",
            background: "#ffffff",
          }}
          onClick={() => setShowProfile((prev) => !prev)}
        >
          <div className="avatar">
            {userInitial}
          </div>
          <ChevronDown size={14} color="#64748b" />
        </div>

        {/* Profile Dropdown */}
        {showProfile && (
          <div className="profile-box">
            <div style={{ padding: "8px 12px 10px 12px", borderBottom: "1px solid #f1f5f9", marginBottom: "4px" }}>
              <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#0f172a" }}>
                {auth?.user?.name || "User"}
              </div>
              <div style={{ fontSize: "11px", color: "#64748b", textTransform: "capitalize" }}>
                {auth?.user?.role === "sub_admin" ? "Sub-Admin" : auth?.user?.role || "Admin"}
              </div>
            </div>

            <div
              className="profile-item"
              onClick={() => {
                setShowProfile(false);
                navigate("/dashboard?tab=settings-general");
              }}
            >
              <User size={15} />
              <span>Profile Settings</span>
            </div>

            <div
              className="profile-item"
              style={{ color: "#ef4444" }}
              onClick={async () => {
                setShowProfile(false);
                await auth?.logout();
                navigate("/login");
              }}
            >
              <LogOut size={15} />
              <span>Sign Out</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
