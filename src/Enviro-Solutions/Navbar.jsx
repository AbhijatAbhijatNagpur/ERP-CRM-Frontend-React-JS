import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Input} from 'antd';
const Navbar = () => {
 // To track which dropdown is open




  // Toggle individual dropdowns
 
  return (
    <div className="w-full bg-white p-4 flex items-center justify-between shadow-md">
      {/* Left Side: Menu Icon and Search */}
      <div className="flex items-center space-x-6">
        {/* Menu Icon to open the drawer */}
        <MenuOutlined className="text-xl cursor-pointer"  />
        
        {/* Search bar */}
        <div className="relative">
          <Input
            className="w-[320px] h-[40px] rounded-2xl"
            placeholder="Search for anything..."
            prefix={<SearchOutlined className="absolute right-3 text-gray-400" />}
          />
        </div>
      </div>

      {/* Right Side: Message, Bell, and Avatar */}
      <div className="flex items-center space-x-6 transform -translate-x-8">
        {/* Message Icon */}
        <img src="/bell.png" alt="Message Icon" className="w-6 h-6 cursor-pointer" />

        {/* Bell Icon */}
        <img src="/msg.png" alt="Bell Icon" className="w-6 h-6 cursor-pointer" />

        {/* Avatar and HR name */}
        <div className="flex flex-col items-center">
          <img src="/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Drawer Component */}
      
    

      
    </div>
  );
};

export default Navbar;
