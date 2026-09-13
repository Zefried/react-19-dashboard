import { Outlet } from "react-router-dom";
import { TestPage } from "./TestPage";

export const testRoutes = [
  {
    element: <Outlet />,
    children: [
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
];