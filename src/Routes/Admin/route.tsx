import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoutes";
import { AdminPanelRoute } from "./AdminPanelRoute";

export const adminRoutes = [
  {
    element: <Outlet />, // no global restriction
    children: [
      {
        path: "admin", // this becomes dashboard home for admin users
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPanelRoute />
          </ProtectedRoute>
        ),
      },
     
    ],
  },
];