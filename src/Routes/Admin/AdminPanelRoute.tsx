import { lazy, Suspense } from "react";

const AdminPanel = lazy(() => import("../../Pages/Panels/AdminPanel"));

export const AdminPanelRoute = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AdminPanel />
  </Suspense>
);
