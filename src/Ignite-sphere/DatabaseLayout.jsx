import Menubar from "./Menubar";
import { Outlet } from "react-router-dom"; // Import Outlet

const DatabaseLayout = () => {
  return (
    <div className="flex">
      <Menubar />
      {/* Use Outlet to render nested routes */}
      <div className="flex-1 ml-64"> {/* Adjust margin left to match Menubar width */}
        <Outlet />
      </div>
    </div>
  );
};

export default DatabaseLayout;
