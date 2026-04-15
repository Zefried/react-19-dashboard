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


export const Rough = () => {

  
    const menu = [
        {name:"Home", icon:Home},

        {
        name:"Users", icon:Users,
        children:[
            {name:"All Users"},
            {name:"Admins"},
            {name:"Banned"}
        ]
        },

        {name:"Orders",icon:ShoppingCart},
        {name:"Settings",icon:Settings}
    ];

    const [open, setOpen] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    console.log(open);

  return(
  <div className="flex">

    {/* LEFT SIDEBAR */}
    <div className={sidebarOpen ? "w-60" : "w-16"}>

      {
        menu.map((item)=>{
          const Icon = item.icon;

          return(
            <div key={item.name}>

              <div onClick={()=>setOpen(open === item.name ? null : item.name)}>
                {Icon && <Icon/>}
                {sidebarOpen && item.name}
              </div>

              {open === item.name && item.children && item.children.map((child)=>(
                <div key={child.name}>
                  {child.name}
                </div>
              ))}

            </div>
          )
        })
      }

    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1">
        <Menu onClick={() => setSidebarOpen(!sidebarOpen)} />
      right side content
    </div>

  </div>
)
}