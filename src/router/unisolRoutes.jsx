// src/routes/unisolRoutes.js
import IndexPage from "../unisol/IndexPage";
import DatabaseManagement from "../unisol/database/DatabaseManagement";
import CustomerDatabase from "../unisol/database/CustomerDatabase";
import CreateCustomer from "../unisol/database/CreateCustomer";
import CustomerDetails from "../unisol/database/CustomerDetails";
import EditCustomer from "../unisol/database/EditCustomer";
import CreateLead from "../unisol/CreateLead";
import TrackLead from "../unisol/leadManagement/TrackLead";
import Create from "../unisol/leadManagement/CreateLead";
import LeadDetails from "../unisol/subComponents/LeadDetails";
import GetLead from "../unisol/leadManagement/GetLead";
import EditLeadForm from "../unisol/subComponents/EditLead";
import UnisolLayout from "../unisol/UnisolLayout";
import SalesAnalytics from "../unisol/salesAnalytics/SalesAnalytics"
import AddSalesReport from "../unisol/salesAnalytics/AddSalesReport";
const unisolRoutes = [
  {
    path: "/unisol",
    element: <UnisolLayout />,
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
      { path: "salesAnalytics", element: <SalesAnalytics /> },
      { path: "addSalesReport", element: <AddSalesReport /> }
    ],
  },
];

export default unisolRoutes;
