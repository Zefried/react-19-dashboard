import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "../Layouts/DashboardLayout";
import { PublicChat } from "../Pages/PublicChat/PublicChat";
import { Login } from "../Pages/Auth/Login";
import { ProtectedRoute } from "./ProtectedRoutes";
import { Unauthorized } from "../Pages/Auth/Unauthorized";
import { DashboardHome } from "../Pages/Panels/DashboardHome";
import { JsonView } from "../jsonWork/jsonView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/chat/:token?",
    element: <PublicChat />,
  },
  {
    path: "/chat",
    element: <PublicChat />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/json",
    element: <JsonView />,
  },
  {
    path: "/json-view",
    element: <JsonView />,
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
    element: <Navigate to="/login" replace />,
  },
]);

export default router;