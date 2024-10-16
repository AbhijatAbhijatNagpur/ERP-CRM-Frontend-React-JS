import { useState } from "react";

const LeadManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative w-64 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mr-6">
        <div className="ml-3 ">
          <button
            type="button"
            className="inline-flex justify-between items-center w-full px-5 py-2 mt-6 text-sm font-medium border-gray-300 bg-[#CAD2FF] rounded-md hover:bg-[#CAD2FF] focus:outline-none"
            onClick={toggleDropdown}
          >
            <img src="/leadership.png" alt="leadership" />
            Lead Management
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="absolute  w-60 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg origin-top-right rounded-lg ml-3 bg-[#CAD2FF8F] shadow-lg ring-1 ring-black ring-opacity-5"
            role="menu"
          >
            <div className="" role="none">
              <a
                href="/createLead"
                className="text-gray-700 block border-b-2 border-b-slate-300 px-3 py-2 text-sm hover:bg-[#CAD2FF]"
                role="menuitem"
              >
                Create Lead
              </a>
              <a
                href="/trackLead"
                className="text-gray-700 block border-b-2 border-b-slate-300 px-3 py-2 text-sm hover:bg-[#CAD2FF]"
                role="menuitem"
              >
                Track Lead
              </a>
              <a
                href="/getLead"
                className="text-gray-700 block  px-3 py-2 text-sm hover:bg-[#CAD2FF]"
                role="menuitem"
              >
                View Lead
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadManagement;
