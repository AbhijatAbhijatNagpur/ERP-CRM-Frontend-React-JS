// src/routes/surgisolRoutes.js
import IndexPage from "../surgisol/IndexPage";
import DatabaseManagement from "../surgisol/database/DatabaseManagement";
import CustomerDatabase from "../surgisol/database/CustomerDatabase";
import CreateCustomer from "../surgisol/database/CreateCustomer";
import CustomerDetails from "../surgisol/database/CustomerDetails";
import EditCustomer from "../surgisol/database/EditCustomer";
import CreateLead from "../surgisol/CreateLead";
import TrackLead from "../surgisol/leadManagement/TrackLead";
import Create from "../surgisol/leadManagement/CreateLead";
import LeadDetails from "../surgisol/subComponents/LeadDetails";
import GetLead from "../surgisol/leadManagement/GetLead";
import EditLeadForm from "../surgisol/subComponents/EditLead";
import SurgisolLayout from "../surgisol/SurgisolLayout";

const surgisolRoutes = [
  {
    path: "/surgisol",
    element: <SurgisolLayout />,
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

export default surgisolRoutes;
