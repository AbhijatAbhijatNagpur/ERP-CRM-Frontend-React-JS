import Menubar from "./Menubar";
import { Outlet } from "react-router-dom";

const UnisolLayout = () => {
  return (
    <div className="flex">
      <Menubar />

      <div className="flex-1 ml-4 bg-[#E5E4E0]">
        <Outlet />
      </div>
    </div>
  );
};

export default UnisolLayout;
