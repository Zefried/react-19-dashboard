
import {
  Home,
  Users,
  Settings,
  ShoppingCart,
  PlusCircle,
  FileText,
  UsersRound,
  UserPlus,
} from "lucide-react";

export type Role = "admin" | "subadmin" | "department";

export type MenuItem = {
  name: string;
  icon: React.ElementType;
  path?: string;
  children?: { name: string; path?: string }[];
};

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

  subadmin: [
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
    {
    name: "Home",
    icon: Home,
    path: "/dashboard/department",
    },

    /* Agents */
    {
      name: "Agents",
      icon: Users,
      path: "/dashboard/department/total-agents",
    },
    {
      name: "Add Agent",
      icon: UserPlus,
      path: "/dashboard/department/add-agent",
    },

    /* Workers */
    {
      name: "Workers",
      icon: UsersRound,
      path: "/dashboard/department/total-workers",
    },

    /* Transactions */
    {
      name: "Transactions",
      icon: FileText,
      path: "/dashboard/department/total-transactions",
    },
    {
      name: "Add Transaction",
      icon: PlusCircle,
      path: "/dashboard/department/add-transaction",
    },
  ]
};