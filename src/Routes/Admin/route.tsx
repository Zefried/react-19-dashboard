import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoutes";
import AdminPanel from "../../Pages/Panels/AdminPanel";

export const adminRoutes = [
  {
    path: "admin",
    element: <Outlet />, // no global restriction
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: "departments",
        element: (
          <ProtectedRoute allowedRoles={['admin', 'subadmin']}>
            <div>Admin Departments</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "agents",
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <div>Admin Agents</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
];