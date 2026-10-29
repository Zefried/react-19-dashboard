import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "../Layouts/DashboardLayout";
import { PublicChat } from "../Pages/PublicChat/PublicChat";
import { Login } from "../Pages/Auth/Login";
import { ProtectedRoute } from "./ProtectedRoutes";
import { Unauthorized } from "../Pages/Auth/Unauthorized";
import { DashboardHome } from "../Pages/Panels/DashboardHome";
import { JsonView } from "../jsonWork/jsonView";
import { websiteRoutes } from "../website/routes/websiteRoutes";

const router = createBrowserRouter([
  // Public Heritage Website Routes
  ...websiteRoutes,

  // Existing Chat & Utilities
  {
    path: "/chat/:token?",
    element: <PublicChat />,
  },
  {
    path: "/chat",
    element: <PublicChat />,
  },
  {
    path: "/json",
    element: <JsonView />,
  },
  {
    path: "/json-view",
    element: <JsonView />,
  },

  // Future / Existing Admin & Auth Routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute allowedRoles={["admin", "sub_admin", "user", "business"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
