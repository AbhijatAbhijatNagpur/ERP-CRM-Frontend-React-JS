// src/routes/enviroSolutionsRoutes.js
import IndexPage from "../enviro-solutions/IndexPage";
import DatabaseManagement from "../enviro-solutions/database/DatabaseManagement";
import CustomerDatabase from "../enviro-solutions/database/CustomerDatabase";
import CreateCustomer from "../enviro-solutions/database/CreateCustomer";
import CustomerDetails from "../enviro-solutions/database/CustomerDetails";
import EditCustomer from "../enviro-solutions/database/EditCustomer";
import CreateLead from "../enviro-solutions/leadManagement/CreateLead";
import TrackLead from "../enviro-solutions/leadManagement/TrackLead";
import Create from "../enviro-solutions/leadManagement/CreateLead";
import LeadDetails from "../enviro-solutions/subComponents/LeadDetails";
import GetLead from "../enviro-solutions/leadManagement/GetLead";
import EditLeadForm from "../enviro-solutions/subComponents/EditLead";

const enviroSolutionsRoutes = [
  {
    path: "/enviro-solutions",
    children: [
      { index: true, element: <IndexPage /> },
      { path: "createLead", element: <CreateLead /> },
      { path: "databaseManagement", element: <DatabaseManagement /> },
      { path: "customerDatabase", element: <CustomerDatabase /> },
      { path: "createCustomer", element: <CreateCustomer /> },
      { path: "customerDetails", element: <CustomerDetails /> },
      { path: "editCustomer", element: <EditCustomer /> },
      { path: "create", element: <Create /> },
      { path: "track", element: <TrackLead /> },
      { path: "leadDetails", element: <LeadDetails /> },
      { path: "editLead", element: <EditLeadForm /> },
      { path: "getLead", element: <GetLead /> },
    ],
  },
];

export default enviroSolutionsRoutes;
