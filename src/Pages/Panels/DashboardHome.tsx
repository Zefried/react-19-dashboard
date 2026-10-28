// Render dashboard panels based on the user's role

import { useContext, lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextValue";

const AdminPanel = lazy(() => import("./AdminPanel"));
const SubAdminPanel = lazy(() => import("./SubAdminPanel"));
const UserPanel = lazy(() => import("./UserPanel"));

export const DashboardHome = () => {
  const auth = useContext(AuthContext);

  if (!auth || auth.isLoading) return null;

  const role = auth.user?.role;

  if (!role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <Suspense fallback={<div style={{ padding: "24px" }}>Loading Dashboard...</div>}>
      {role === "admin" && <AdminPanel />}
      {role === "sub_admin" && <SubAdminPanel />}
      {(role === "user" || role === "business") && <UserPanel />}
    </Suspense>
  );
};
