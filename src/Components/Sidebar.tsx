import { ChevronDown } from "lucide-react";
import "./Style/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/dash.png";
import { useEffect } from "react";

type MenuItem = {
  name: string;
  icon: React.ElementType;
  path?: string;
  children?: {
    name: string;
    path: string;
    icon?: React.ElementType;
  }[];
};

type SidebarProps = {
  menu: MenuItem[];
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: string | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Sidebar = ({
  menu,
  sidebarOpen,
  setSidebarOpen,
  openMenu,
  setOpenMenu,
}: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = window.innerWidth < 768;

  const currentFullUrl = location.pathname + (location.search || "");

  // Auto-expand parent menu if one of its children is currently active
  useEffect(() => {
    menu.forEach((item) => {
      if (item.children) {
        const hasActiveChild = item.children.some(
          (sub) => sub.path === currentFullUrl || (sub.path === "/dashboard?tab=overview" && currentFullUrl === "/dashboard")
        );
        if (hasActiveChild) {
          setOpenMenu(item.name);
        }
      }
    });
  }, [currentFullUrl, menu, setOpenMenu]);

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      {/* Brand Header */}
      <div className="sidebar-brand">
        <div className="brand-logo">
          <img src={logo} alt="Logo" />
        </div>

        {sidebarOpen && (
          <div className="brand-info">
            <span className="brand-name">Dashboard</span>
            <span className="brand-badge">PRO</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="nav">
        {menu.map((item) => {
          const Icon = item.icon;
          const isOpen = openMenu === item.name;

          // Check if parent or child is active
          const isDirectActive = item.path
            ? (item.path === "/dashboard?tab=overview" && (currentFullUrl === "/dashboard" || currentFullUrl === "/dashboard?tab=overview")) ||
            currentFullUrl === item.path
            : false;

          const hasActiveChild = item.children?.some(
            (sub) => sub.path === currentFullUrl
          );

          const isActive = isDirectActive || hasActiveChild;

          return (
            <div key={item.name} className="menu-group">
              {/* Parent Menu Item */}
              <div
                onClick={() => {
                  if (item.children) {
                    setOpenMenu(isOpen ? null : item.name);
                  } else if (item.path) {
                    navigate(item.path);
                    if (isMobile) {
                      setSidebarOpen(false);
                    }
                  }
                }}
                className={`menu-item ${isActive ? "active" : ""}`}
                title={!sidebarOpen ? item.name : undefined}
              >
                <div className="menu-left">
                  <div className="menu-icon-wrap">
                    <Icon size={18} />
                  </div>
                  {sidebarOpen && <span className="menu-text">{item.name}</span>}
                </div>

                {item.children && sidebarOpen && (
                  <ChevronDown
                    size={16}
                    className={`chevron ${isOpen ? "rotate" : ""}`}
                  />
                )}
              </div>

              {/* Submenu Dropdown */}
              {item.children && isOpen && sidebarOpen && (
                <div className="submenu animate-slide-down">
                  {item.children.map((sub) => {
                    const SubIcon = sub.icon;
                    const isSubActive = currentFullUrl === sub.path;

                    return (
                      <div
                        key={sub.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(sub.path);
                          if (isMobile) {
                            setSidebarOpen(false);
                          }
                        }}
                        className={`submenu-item ${isSubActive ? "active" : ""}`}
                      >
                        <div className="submenu-bullet" />
                        {SubIcon && <SubIcon size={14} className="submenu-icon" />}
                        <span className="submenu-text">{sub.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
