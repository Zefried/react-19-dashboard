import { Outlet } from "react-router-dom";

const TestPage = () => {
  return (
    <div>
      <h1>Test Route</h1>
      <p>React Router is working.</p>
    </div>
  );
};

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