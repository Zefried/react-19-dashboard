
import {
  Home,
  Users,
  Settings,
  ShoppingCart,
  FileText,
  UsersRound,
  UserPlus,
  Building,
  Layers,
  BarChart3,
} from "lucide-react";

export type Role = "admin" | "subadmin" | "department";

export type MenuItem = {
  name: string;
  icon: React.ElementType;
  path?: string;
  children?: { name: string; path?: string; icon: React.ElementType;}[];

};

/* ---------- ROLE MENUS ---------- */

export const menus = {
  
  admin: [
    { name: "Dashboard", icon: Home, path:"/dashboard"},

    
    {
      name: "Masters",
      icon: Building,
      children: [
        { name: "Category", icon: Layers, path: "/dashboard/category" },
        { name: "Sub-category", icon: Layers, path: "/dashboard/sub-category" },
        { name: "Add Agent", icon: UserPlus, path: "/dashboard/add-agent" },
        { name: "View Agents", icon: UsersRound, path: "/dashboard/view-agents" }
      ]
    },
    {
      name: "Reports",
      icon: BarChart3,
      children: [
        { name: "Department Reports" },
        { name: "Agent Reports" }
      ]
    },

    {
      name: "Controls",
      icon: Settings,
      children: [
        { name: "Agent Limits" },
        { name: "Enable / Disable Accounts" }
      ]
    }
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

    {
      name: "Add Agent",
      icon: UserPlus,
      path: "/dashboard/add-agent",
    },

    {
      name: "View Agent Profile",
      icon: UserPlus,
      path: "/dashboard/agent-profile",
    },

    /* Agents */
    {
      name: "All Agents",
      icon: Users,
      path: "/dashboard/total-agents",
    },
    

    /* Workers */
    {
      name: "All Workers",
      icon: UsersRound,
      path: "/dashboard/total-workers",
    },

    /* Transactions */
    {
      name: "All Transactions",
      icon: FileText,
      path: "/dashboard/total-transactions",
    },
  ]
};