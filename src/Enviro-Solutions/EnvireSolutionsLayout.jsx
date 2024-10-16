import { Outlet } from "react-router-dom"; // Import Outlet
import Menubar from "../Ignite-sphere/Menubar";

const EnviroSolutionLayout = () => {
  return (
    <div className="flex">
      <Menubar />
      {/* Use Outlet to render nested routes */}
      <div className="flex-1 ml-2"> {/* Adjust margin left to match Menubar width */}
        <Outlet />
      </div>
    </div>
  );
};

export default EnviroSolutionLayout;
