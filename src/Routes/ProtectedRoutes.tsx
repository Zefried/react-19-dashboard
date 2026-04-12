import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: JSX.Element;
  allowedRoles?: string[];
}) => {
  const authContext = useContext(AuthContext);
  const role = authContext?.user?.role;

  // preventing flicker
  if (!authContext || authContext.isLoading) return null;

  // not logged in
  if (!authContext.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // role check
  if (allowedRoles && (!role || !allowedRoles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};