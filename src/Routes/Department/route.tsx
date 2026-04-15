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
import { ViewAgents } from "../../Test/Admin/Masters/Agent/ViewAgent";
import { AgentProfile } from "../../Test/Department/Extra/AgentProfile";

export const departmentRoutes = [
  {
    element: <Outlet />, // no global restriction
    children: [
      {
        path: "department", // this becomes dashboard home for dept users
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <DepartmentPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: "agents",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <div>Department Agents</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "total-agents",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <TotalAgent/>
          </ProtectedRoute>
        ),
      },
      {
        path: "total-transactions",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <TotalTransactions/>
          </ProtectedRoute>
        ),
      },
      {
        path: "agent-detail",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
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
      {
        path: "agent-profile",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <AgentProfile/>
          </ProtectedRoute>
        ),
      },
      {
        path: "view-agents",
        element: (
          <ProtectedRoute allowedRoles={['department', 'admin']}>
            <ViewAgents/>
          </ProtectedRoute>
        ),
      },



    ],
  },
];