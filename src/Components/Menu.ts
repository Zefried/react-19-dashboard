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
  children?: {
    name: string;
    path?: string;
    icon: React.ElementType;
  }[];
};

export const menus: Record<Role, MenuItem[]> = {
  admin: [
    {
      name: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },

    {
      name: "Masters",
      icon: Building,
      children: [
        {
          name: "Location",
          icon: Layers,
          path: "/dashboard/locations",
        },
      ],
    },

  ],

  subadmin: [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard/subadmin",
    },
    {
      name: "Users",
      icon: Users,
      children: [
        {
          name: "All Users",
          icon: Users,
          path: "/dashboard/subadmin/users",
        },
      ],
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      path: "/dashboard/subadmin/orders",
    },
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

    {
      name: "All Agents",
      icon: Users,
      path: "/dashboard/total-agents",
    },

    {
      name: "All Workers",
      icon: UsersRound,
      path: "/dashboard/total-workers",
    },

    {
      name: "All Transactions",
      icon: FileText,
      path: "/dashboard/total-transactions",
    },
  ],
};