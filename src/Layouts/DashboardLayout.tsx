import { useState} from "react";
import { Sidebar } from "../Components/Sidebar";
import { Navbar } from "../Components/Navbar";
import { menus } from "../Components/Menu";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import '../Components/Style/Dashboard.css';


export const DashboardLayout  = () => {
  // render menu based on role
    const auth = useContext(AuthContext);
    if (!auth) return null;

    const { user, isLoading } = auth;

    if (isLoading) return null; // avoid flicker

    const role = user?.role || "department"; // fallback


  const menu = menus[role];
  const [active,setActive] = useState<string | null>("Home");
  const [sidebarOpen,setSidebarOpen] = useState<boolean>(true);
  const [openMenu,setOpenMenu] = useState<string | null>(null);
  const [dark,setDark] = useState<boolean>(false);
  const [showNotif,setShowNotif] = useState<boolean>(false);
  const [showProfile,setShowProfile] = useState<boolean>(false);

 

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex h-screen relative app">

        {/* Sidebar */}
        <Sidebar
          menu={menu}
          sidebarOpen={sidebarOpen}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setActive={setActive}
          active={active} 
        />

        {/* Right */}
        <div className="flex flex-col flex-1">

          <Navbar
            active={active}
            setSidebarOpen={setSidebarOpen}
            dark={dark}
            setDark={setDark}
            showNotif={showNotif}
            setShowNotif={setShowNotif}
            showProfile={showProfile}
            setShowProfile={setShowProfile}
          />

          {/* Main */}
          <div className="flex-1 overflow-y-auto main-div">
            <Outlet />
          </div>

        </div>

      </div>
    </div>
  );
};