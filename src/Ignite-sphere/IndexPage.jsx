import Dashboard from "./dashboard/Dashboard";

import Menubar from "./Menubar";
import Navbar from "./Navbar";



const IndexPage = () => {
  return (
    <div className="flex">
      <Menubar />
      <div className="flex-1 ml-64"> {/* Adjust margin left to match Menubar width */}
        <Navbar />
        <Dashboard />
     
      </div>
    </div>
  )
}

export default IndexPage