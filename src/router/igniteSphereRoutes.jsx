// src/routes/igniteSphereRoutes.js
import IndexPage from "../ignite-sphere/IndexPage";
import DatabaseManagement from "../ignite-sphere/database/DatabaseManagement";
import CustomerDatabase from "../ignite-sphere/database/CustomerDatabase";
import CreateCustomer from "../ignite-sphere/database/CreateCustomer";
import CustomerDetails from "../ignite-sphere/database/CustomerDetails";
import EditCustomer from "../ignite-sphere/database/EditCustomer";
import CreateLead from "../ignite-sphere/CreateLead";
import TrackLead from "../ignite-sphere/leadManagement/TrackLead";
import Create from "../ignite-sphere/leadManagement/CreateLead";
import GetLead from "../ignite-sphere/leadManagement/GetLead";
import EditLeadForm from "../ignite-sphere/subComponents/EditLead";
import IgniteSphereLayout from "../Ignite-sphere/IgniteSphereLayout";
import LeadDetails from "../enviro-solutions/subComponents/LeadDetails";

const igniteSphereRoutes = [
  {
    path: "/ignite-sphere",
    element: <IgniteSphereLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "createLead", element: <CreateLead /> },
      {
        path: "databaseManagement",
        element: <DatabaseManagement />,
      },
      {
        path: "customerDatabase",
        element: <CustomerDatabase />,
      },
      {
        path: "createCustomer",
        element: <CreateCustomer />,
      },
      {
        path: "customerDetails",
        element: <CustomerDetails />,
      },
      {
        path: "editCustomer",
        element: <EditCustomer />,
      },
      { path: "create", element: <Create /> },
      { path: "track", element: <TrackLead /> },
      { path: "leadDetails", element: <LeadDetails /> },
      { path: "editLead", element: <EditLeadForm /> },
      { path: "getLead", element: <GetLead /> },
    ],
  },
];

export default igniteSphereRoutes;
