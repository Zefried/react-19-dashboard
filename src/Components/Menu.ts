
import {
  Home,
  Users,
  Settings,
  ShoppingCart,
} from "lucide-react";


/* ---------- ROLE MENUS ---------- */

export const menus = {
  
  admin: [
    { name: "Home", icon: Home },
    {
      name: "Users",
      icon: Users,
      children: [
        { name: "All Users" },
        { name: "Admins" },
        { name: "Banned" }
      ]
    },
    { name: "Orders", icon: ShoppingCart },
    { name: "Settings", icon: Settings }
  ],

  subAdmin: [
    { name: "Home", icon: Home },
    {
      name: "Users",
      icon: Users,
      children: [
        { name: "All Users" }
      ]
    },
    { name: "Orders", icon: ShoppingCart }
  ],

  department: [
    { name: "Home", icon: Home },
    { name: "Orders", icon: ShoppingCart }
  ]
};