
import {
  Home,
  Users,
  Settings,
  ShoppingCart,
} from "lucide-react";


export const menu = [
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
