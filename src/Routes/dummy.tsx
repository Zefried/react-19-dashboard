import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "../Layouts/DashboardLayout";
import { Login } from "../Pages/Auth/Login";
import { ProtectedRoute } from "./ProtectedRoutes";
import { Unauthorized } from "../Pages/Auth/Unauthorized";
import { Rough } from "../Test/Rough";
import { DashboardHome } from "../Pages/Panels/DashboardHome";
import { departmentRoutes } from "./Department/route";
import { adminRoutes } from "./Admin/route";

const dummy = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
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
      <ProtectedRoute allowedRoles={['admin','subadmin','department']}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      // Main entry (role decides panel)
      {
        index: true,
        element: <DashboardHome />,
      },

      // Optional test route
      {
        path: "test",
        element: <Rough />,
      },

      // Role-specific routes
      ...adminRoutes,
      ...departmentRoutes,
    ],
  },
]);

export default dummy;