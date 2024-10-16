import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Dashboard from "../unisol/dashboard/Dashboard";

const IndexPage = () => {
  return (
    <div className="flex">
      <Menubar />
      <div className="flex-1 ml-64 bg-[#E5E4E0]">
        <Dashboard />
      </div>
    </div>
  );
};

export default IndexPage;
