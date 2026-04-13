import { Outlet } from "react-router-dom";
import DepartmentPanel from "../../Pages/Panels/DepartmentPanel";
import { ProtectedRoute } from "../ProtectedRoutes";
import { AgentView } from "../../Test/Department/AgentView/AgentView";
import { WorkersList } from "../../Test/Department/Extra/WorkerList";
import { WorkerDetail } from "../../Test/Department/Extra/Worker";
import { TotalAgent } from "../../Test/Department/Extra/TotalAgent";
import { TotalTransactions } from "../../Test/Department/Extra/TotalTransaction";
import { TotalWorkerList } from "../../Test/Department/Extra/TotalWorkerList";
import { AddTransaction } from "../../Test/Department/Extra/AddTransaction";
import { AddAgent } from "../../Test/Department/Extra/AddAgent";

export const departmentRoutes = [
  {
    path: "department",
    element: <Outlet />, // no global restriction
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute allowedRoles={['department']}>
            <DepartmentPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: "agents",
        element: (
          <ProtectedRoute allowedRoles={['department']}>
            <div>Department Agents</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "total-agents",
        element: (
          <ProtectedRoute allowedRoles={['department']}>
            <TotalAgent/>
          </ProtectedRoute>
        ),
      },
      {
        path: "total-transactions",
        element: (
          <ProtectedRoute allowedRoles={['department']}>
            <TotalTransactions/>
          </ProtectedRoute>
        ),
      },
      {
        path: "agent-detail",
        element: (
          <ProtectedRoute allowedRoles={['department']}>
            <AgentView/>
          </ProtectedRoute>
        ),
      },
       {
        path: "agent-detail",
        element: (
          <ProtectedRoute allowedRoles={['department']}>
            <AgentView/>
          </ProtectedRoute>
        ),
      },
      {
        path: "agent/workers",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <WorkersList/>
          </ProtectedRoute>
        ),
      },
      {
        path: "agent/single-worker",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <WorkerDetail/>
          </ProtectedRoute>
        ),
      },
      {
        path: "total-workers",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <TotalWorkerList/>
          </ProtectedRoute>
        ),
      },
      {
        path: "add-transaction",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <AddTransaction/>
          </ProtectedRoute>
        ),
      },
      {
        path: "add-agent",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <AddAgent/>
          </ProtectedRoute>
        ),
      },
    ],
  },
];