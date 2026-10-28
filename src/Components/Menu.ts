import { Home, Users, Settings, Sliders, Shield, Lock, Activity } from "lucide-react";
import type { Role } from "../Context/AuthContextValue";

export type MenuItem = {
  name: string;
  icon: React.ElementType;
  path?: string;
  children?: {
    name: string;
    path: string;
    icon?: React.ElementType;
  }[];
};

export const menus: Record<Role, MenuItem[]> = {
  admin: [
    {
      name: "Overview",
      icon: Home,
      path: "/dashboard?tab=overview",
    },
    {
      name: "User Management",
      icon: Users,
      path: "/dashboard?tab=users",
    },
    {
      name: "Settings",
      icon: Settings,
      children: [
        {
          name: "General Settings",
          path: "/dashboard?tab=settings-general",
          icon: Sliders,
        },
        {
          name: "Roles & Permissions",
          path: "/dashboard?tab=settings-roles",
          icon: Shield,
        },
        {
          name: "Security",
          path: "/dashboard?tab=settings-security",
          icon: Lock,
        },
      ],
    },
  ],

  sub_admin: [
    {
      name: "Sub-Admin Hub",
      icon: Shield,
      path: "/dashboard?tab=overview",
    },
    {
      name: "Assigned Workflows",
      icon: Activity,
      path: "/dashboard?tab=workflows",
    },
    {
      name: "Settings",
      icon: Settings,
      children: [
        {
          name: "My Profile",
          path: "/dashboard?tab=settings-general",
          icon: Sliders,
        },
        {
          name: "Security",
          path: "/dashboard?tab=settings-security",
          icon: Lock,
        },
      ],
    },
  ],

  user: [
    {
      name: "My Dashboard",
      icon: Home,
      path: "/dashboard?tab=overview",
    },
    {
      name: "Settings",
      icon: Settings,
      children: [
        {
          name: "My Profile",
          path: "/dashboard?tab=settings-general",
          icon: Sliders,
        },
        {
          name: "Security",
          path: "/dashboard?tab=settings-security",
          icon: Lock,
        },
      ],
    },
  ],

  business: [
    {
      name: "Business Overview",
      icon: Home,
      path: "/dashboard?tab=overview",
    },
    {
      name: "Settings",
      icon: Settings,
      children: [
        {
          name: "Business Profile",
          path: "/dashboard?tab=settings-general",
          icon: Sliders,
        },
      ],
    },
  ],
};
