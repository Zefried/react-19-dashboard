import { useContext, lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const AdminPanel = lazy(() => import("./AdminPanel"));
const SubAdminPanel = lazy(() => import("./SubAdminPanel"));
const DepartmentPanel = lazy(() => import("./DepartmentPanel"));

export const DashboardHome = () => {
  const auth = useContext(AuthContext);

  if (!auth || auth.isLoading) return null;

  const role = auth.user?.role;

  if (!role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {role === "admin" && <AdminPanel />}
      {role === "subadmin" && <SubAdminPanel />}
      {role === "department" && <DepartmentPanel />}
    </Suspense>
  );
};