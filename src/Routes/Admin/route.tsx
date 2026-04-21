import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoutes";
import { AddViewCategory } from "../../Test/Admin/Masters/Category/AddViewCategory";
import { AddViewSubcategory } from "../../Test/Admin/Masters/Category/AddViewSubCategory";
import AdminPanel from "../../Pages/Panels/AdminPanel";
import { HerbalGel } from "../../Pages/LandingPages/HerbalGel";



export const adminRoutes = [
  {
    element: <Outlet />, // no global restriction
    children: [
      {
        path: "admin", // this becomes dashboard home for admin users
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/order",
        element: (
          <ProtectedRoute allowedRoles={['admin', 'subadmin']}>
            <AddViewCategory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/sub-category",
        element: (
          <ProtectedRoute allowedRoles={['admin', 'subadmin']}>
            <AddViewSubcategory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/herbal-gel",
        element: (
          <ProtectedRoute allowedRoles={['admin', 'subadmin']}>
            <HerbalGel />
          </ProtectedRoute>
        ),
      },
    ],
  },
];