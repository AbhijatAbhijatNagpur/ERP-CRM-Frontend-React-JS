import { Select } from "antd";
// import SalesOverview from "./SalesOverview";
import SatisfactionRate from "./SatisfactionRate";
import Earnings from "./Earnings";
import TopCustomer from "./TopCustomer";
import TopProducts from "./TopProducts";
import FinancialYear from "./FinancialYear";
import CalendarYear from "./calendarYear";
const { Option } = Select;

const Dashboard = () => {
  // Example data for the 4 small cards in the Sales Overview box
  // const salesData = [
  //   {
  //     imgSrc: "/sales.png",
  //     amount: "₹ 500,000",
  //     total: "Total Sales",
  //     percentage: "+8",
  //     bgColor: "#FA5A7D",
  //   }, // Pink
  //   {
  //     imgSrc: "/order.png",
  //     amount: "300",
  //     total: "Total Order",
  //     percentage: "+6",
  //     bgColor: "#FF947A",
  //   }, // Orange
  //   {
  //     imgSrc: "/disk.png",
  //     amount: "5",
  //     total: "Product Sold",
  //     percentage: "+5",
  //     bgColor: "#3CD865",
  //   }, // Green
  //   {
  //     imgSrc: "/costomers.png",
  //     amount: "8",
  //     total: "New Customers",
  //     percentage: "+4",
  //     bgColor: "#BF83FF",
  //   }, // Purple
  // ];

  return (
    <div className="bg-container min-h-screen">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="space-y-1">
          <h2 className="font-bold">Dashboard</h2>
          <h5>Hi, Welcome!</h5>
        </div>

        {/* Right side (Company selection) */}
        <div className="flex flex-col items-start space-y-2">
          <h2>Company</h2>
          {/* Ant Design Dropdown */}
          <Select
            placeholder="Select company"
            className="w-full"
            style={{ width: 200 }} // Adjust the width as needed
          >
            <Option value="company1">Unisol</Option>
            <Option value="company2">Surgisol</Option>
            <Option value="company3">Enviro Solutions</Option>
            <Option value="company3">Ignite sphere</Option>
          </Select>
        </div>
      </div>

      <div className="">
        <div className="row">
          <div className="col-lg-8 col-sm-12 ">
            <div className="mb-3 flex px-4">
              <FinancialYear />
            </div>
            <div className="mb-3 flex px-4">
              <CalendarYear />
            </div>
            <div className="mb-3 flex px-4">
              <TopProducts />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="mb-3 mt-4">
              <SatisfactionRate />
            </div>
            <div className="mb-3">
              <Earnings />
            </div>
            <div className="mb-3">
              <TopCustomer />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
