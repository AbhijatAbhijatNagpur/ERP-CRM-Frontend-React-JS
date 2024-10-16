import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Navbar = () => {
  return (
    <div className="w-full bg-white py-3 px-5 flex items-center justify-between shadow-[#000] shadow-md">
      {/* Left Side: Search Bar */}
      <div className="flex items-center space-x-4">
        <div className="relative flex justify-between items-center">
          <Input
            className="w-[300px] py-2 relative rounded-full bg-[#F5F6FA] placeholder:text-gray-500"
            placeholder="Search for anything..."
          />

          <div className="absolute right-6 px-2 top-[13px]  ">
            <SearchOutlined className="text-gray-500 absolute text-center" />
          </div>
        </div>
      </div>

      {/* Right Side: Bell Icon and Avatar */}
      <div className="flex items-center space-x-4">
        <img
          src="/bell.png"
          alt="Bell Icon"
          className="w-6 h-6 cursor-pointer"
        />

        <div className="flex items-center">
          <img src="/avatar.png" alt="Avatar" className="w-auto rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
