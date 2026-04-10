import { ChevronDown } from "lucide-react";
import "./Style/Sidebar.css";

type MenuItem = {
  name: string;
  icon: React.ElementType;
  children?: { name: string }[];
};

type SidebarProps = {
  menu: MenuItem[];
  sidebarOpen: boolean;
  openMenu: string | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
};

export const Sidebar = ({
  menu,
  sidebarOpen,
  openMenu,
  setOpenMenu,
  setActive,
  active
}: SidebarProps) => {
    return (
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
       
       {/* Logo section  */}
        <div className="sidebar-brand">
          <div className="brand-logo">
            <img
              src="https://www.shutterstock.com/image-vector/speedo-meter-logo-vector-illustration-600nw-2688888335.jpg"
              alt="Fixo Logo"
            />
          </div>
          {sidebarOpen && <span className="brand-name">Fixzo Dash</span>}
        </div>

        {/* nav section    */}
        <nav className="nav">

          {menu.map((item) => {
            const Icon = item.icon;
            const isOpen = openMenu === item.name;
            const isActive = active === item.name;

            return (
              <div key={item.name}>

                {/* Menu Item */}
                <div
                  onClick={() => {
                    if (item.children) {
                      setOpenMenu(isOpen ? null : item.name);
                    }
                    setActive(item.name);
                  }}
                  className={`menu-item ${isActive ? "active" : ""}`}
                >
                  <div className="menu-left">
                    <Icon size={18} />
                    {sidebarOpen && <span>{item.name}</span>}
                  </div>

                  {item.children && sidebarOpen && (
                    <ChevronDown
                      size={16}
                      className={`chevron ${isOpen ? "rotate" : ""}`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.children && isOpen && sidebarOpen && (
                  <div className="submenu">
                    {item.children.map((sub) => (
                      <div
                        key={sub.name}
                        onClick={() => setActive(sub.name)}
                        className="submenu-item"
                      >
                        {sub.name}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            );
          })}

        </nav>
      </div>
    );
};