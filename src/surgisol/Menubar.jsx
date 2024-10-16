import { ChevronDown, ChevronUp, Info, LogOut, MessageCircleMore } from 'lucide-react'; 
import { useState } from 'react';
import { Link,NavLink,useNavigate} from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
 

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-dashboard-color shadow-lg overflow-auto">

      {/* Small Image and Text */}
      <div className="flex items-center mt-4 px-2">
        <img src="/crm 2.png" alt="CRM" className="w-10 h-10" />
        <p className="ml-2 text-sm font-bold">CustomerRelationship Management & SALSE</p>
      </div>

      {/* Logo Image */}
      <div className="flex justify-center mt-2">
        <img src="/surgisollogo.png" alt="Logo" className="w-3/4 h-auto" />
      </div>
      {/* Dropdowns */}
      <div className="mt-4 space-y-8 px-2 ">
        <div>
          <Link
          to="/"
            className="w-full flex justify-between items-center p-1 text-right text-md font-semibold bg-custom-sky hover:bg-hover-sky rounded"
            onClick={() => toggleDropdown('dashboard')}
          >
            <div className='flex items-center gap-1'>
              <img src="/dashboard.png" alt="dashboard" className="w-8 h-8" />
              Dashboard
            </div>
          </Link>
       
        </div>

        <div>
  <button
    className="w-full flex justify-between items-center p-1 text-left text-md font-semibold bg-custom-sky hover:bg-hover-sky rounded"
    onClick={() => toggleDropdown('lead-management')}
  >
    <div className="flex items-center gap-1">
      <img src="/leadership.png" alt="leadership" className="w-8 h-8" />
      Lead Management
    </div>
    <span>{openDropdown === 'lead-management' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
  </button>

  {openDropdown === 'lead-management' && (
    <div className="p-1 bg-custom-sky border-gray-400 rounded mt-1">
      <ul className="flex flex-col gap-0  border-gray-400 ">
        <li className="p-2 border-b border-gray-400 hover:bg-hover-sky rounded-t">
          <Link to="/create" className="linkStyle block w-full">
            Create Lead
          </Link>
        </li>
        <li className="p-2 border-b border-gray-400 hover:bg-hover-sky">
          <Link to="/track" className="linkStyle block w-full">
            Track Lead
          </Link>
        </li>
        <li className="p-2 hover:bg-hover-sky rounded-b">
          <Link to="/getLead" className="linkStyle block w-full">
            View Lead
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>


        <div>
        <Link to='/customerDatabase'
        className="w-full flex justify-between items-center p-1 text-left text-md font-semibold bg-custom-sky hover:bg-hover-sky rounded"
        onClick={() => navigate('/database')}
      >
        <div className='flex items-center gap-1'>
          <img src="/database.png" alt="Database" className="w-8 h-8" />
          Database
        </div>
        <span>
  <NavLink
    to="/database" // Your route path here
    className={({ isActive }) =>
      `${isActive ? 'bg-hover-sky' : 'bg-custom-sky'} hover:bg-hover-sky`
    }
  >
    {openDropdown === 'database' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
  </NavLink>
</span>


      </Link>

      {openDropdown === 'database' && (
        <div className="p-1 bg-gray-50 rounded">
          <p className="text-sm">Database Routes Available</p>
        </div>
      )}
        </div>

        {/* Sales Analytics Dropdown */}
        <div>
          <button
            className="w-full flex justify-between items-center p-1 text-left text-md font-semibold bg-custom-sky hover:bg-hover-sky rounded"
            onClick={() => toggleDropdown('sales-analytics')}
          >
            <div className='flex items-center gap-1'>
              <img src="/sales-analitics.png" alt="Sales Analytics" className="w-8 h-8" />
              Sales Analytics
            </div>
            <span>{openDropdown === 'sales-analytics' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
          </button>
          {openDropdown === 'sales-analytics' && (
            <div className="p-1 bg-gray-50 rounded">
              <p className="text-sm">Sales Analytics Content</p>
            </div>
          )}
        </div>
      </div>

      {/* Help Centre, Contact, Logout */}
      <div
  className='flex items-center justify-center flex-col mt-16 gap-2 cursor-pointer bg-[url("/sirgisolwing.png")] bg-cover bg-center bg-no-repeat p-6 rounded-lg h-[280px]'
>
  <div className='flex gap-1 text-xs text-gray-600 hover:text-black'>
    <Info size={16} />
    <h4>Help Centre</h4>
  </div>
  <div className='flex gap-1 text-xs text-gray-600 hover:text-black'>
    <MessageCircleMore size={16} />
    <h4>Contact us</h4>
  </div>
  <div className='flex gap-1 text-xs text-gray-600 hover:text-black'>
    <LogOut size={16} />
    <h4>Log out</h4>
  </div>
</div>


    </div>
  );
}

export default Menubar;
