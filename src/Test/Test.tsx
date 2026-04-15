import { useState } from "react";
import {
  Home,
  Users,
  Settings,
  ShoppingCart,
  Bell,
  Menu,
  ChevronDown,
  Moon,
  Sun
} from "lucide-react";

export const TestComo = () => {

  const [active,setActive] = useState("Home");
  const [sidebarOpen,setSidebarOpen] = useState(true);
  const [openMenu,setOpenMenu] = useState<string | null>(null);
  const [dark,setDark] = useState(false);
  const [showNotif,setShowNotif] = useState(false);

  const menu = [
    {name:"Home",icon:Home},

    {
      name:"Users",
      icon:Users,
      children:[
        {name:"All Users"},
        {name:"Admins"},
        {name:"Banned"}
      ]
    },

    {name:"Orders",icon:ShoppingCart},
    {name:"Settings",icon:Settings}
  ];

  return (
    <div className={dark ? "dark":"default"}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white relative">

        {/* Sidebar */}
        <div className={`${sidebarOpen ? "w-60":"w-16"} bg-gray-800 p-3 transition-all`}>

          <nav className="flex flex-col gap-2 text-white">

            {menu.map((item)=>{
              const Icon = item.icon;

              return(
                <div key={item.name}>

                  <div
                    onClick={()=>{

                      if(item.children){
                        setOpenMenu(
                          openMenu===item.name ? null : item.name
                        );
                      }

                      setActive(item.name);

                    }}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-700 cursor-pointer"
                  >

                      <div className="flex items-center gap-3">
                        <Icon size={18}/>
                        {sidebarOpen && item.name}
                      </div>

                      {item.children && sidebarOpen && (
                        <ChevronDown
                          size={16}
                          className={`transition ${
                            openMenu===item.name ? "rotate-180":""
                          }`}
                        />
                      )}

                  </div>

                 
                 
                  {item.children && openMenu===item.name && sidebarOpen && (

                    <div className="ml-8 flex flex-col gap-1 text-sm text-gray-300">

                      {item.children.map((sub)=>(
                        <div
                          key={sub.name}
                          onClick={()=>setActive(sub.name)}
                          className="p-1 hover:text-white cursor-pointer"
                        >
                          {sub.name}
                        </div>
                      ))}

                    </div>

                  )}

                </div>
              )
            })}

            

          </nav>

        </div>

        {/* Right */}
        <div className="flex flex-col flex-1">

          {/* Navbar */}
          <div className="h-14 bg-white dark:bg-gray-800 border-b px-6 flex items-center justify-between relative">

            <div className="flex items-center gap-3">

              <Menu
                size={22}
                className="cursor-pointer"
                onClick={()=>setSidebarOpen(!sidebarOpen)}
              />

              <span className="font-semibold">
                {active}
              </span>

            </div>

            <div className="flex items-center gap-4">

              {/* Dark toggle */}
              <button
                onClick={()=>setDark(!dark)}
                className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {dark ? <Sun size={18}/> : <Moon size={18}/>}
              </button>

              {/* Notification */}
              <Bell
                size={20}
                className="cursor-pointer"
                onClick={()=>setShowNotif(!showNotif)}
              />

              {/* Modal */}
              {showNotif && (
                <div className="absolute right-6 top-14 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                  <h3 className="font-semibold mb-2">
                    Notifications
                  </h3>

                  <p className="text-sm text-gray-500">
                    No new notifications
                  </p>

                </div>
              )}

              <div className="w-8 h-8 bg-gray-300 rounded-full"/>

            </div>

          </div>

          {/* Main */}
          <div className="flex-1 p-6 overflow-y-auto">
            Current Page: {active}
          </div>

        </div>

      </div>
    </div>
  );
};