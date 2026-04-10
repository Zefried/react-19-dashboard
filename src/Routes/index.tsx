import { createBrowserRouter } from "react-router-dom";
import { TestComo } from "../Test/Test";
import { DashboardLayout } from "../Layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestComo/>
  },
  {
    path: "/",
    element: <DashboardLayout/>
  }
]);

export default router;