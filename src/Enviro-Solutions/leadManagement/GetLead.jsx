import  { useState } from "react";
import AdditionalUiSection from "../../unisol/subComponents/AdditionalUiSection";
// import AdditionalUiSection from "../../subComponents/AdditionalUiSection";

// import axios from "axios";

const initialLeads = [
  {
    organization: "TechCorp",
    lastMeeting: "2024-09-15",
    nextMeeting: "2024-10-01",
    department: "Sales",
    leadOwner: "John Doe",
  },
  {
    organization: "HealthSolutions",
    lastMeeting: "2024-09-12",
    nextMeeting: "2024-09-29",
    department: "Marketing",
    leadOwner: "Jane Smith",
  },
  {
    organization: "Lata Mangeskar",
    lastMeeting: "2024-09-12",
    nextMeeting: "2024-09-29",
    department: "Neurology",
    leadOwner: "Ankit",
  },
  {
    organization: "Maxwell Hospital",
    lastMeeting: "2024-09-12",
    nextMeeting: "2024-09-29",
    department: "Marketing",
    leadOwner: "Nikhil",
  },
  {
    organization: "Alexis Hospital",
    lastMeeting: "2024-09-12",
    nextMeeting: "2024-09-29",
    department: "Marketing",
    leadOwner: "Jane Smith",
  },
];

const GetLead = () => {
  // eslint-disable-next-line no-unused-vars
  const [leads, setLeads] = useState(initialLeads); // Initialize leads with static data

  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [frequency, setFrequency] = useState("daily");

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-200 h-screen">
      <div className="flex my-5 mr-5 space-x-2">
        <p className="text-[12px] font-poppins">Lead Management</p>
        <img className="h-2 mt-[5px]" src="/Path 2.png" alt="path" />
        <p className="text-[12px] text-blue-500 font-poppins">View Lead</p>
        <img
          className="h-2 mt-[5px] fill-blue-300"
          src="/Path3.png"
          alt="path"
        />
      </div>

      <div className="bg-white">
        <div className="w-full p-4 border-b mr-12">
          <h2 className="text-3xl font-DM-Sans">All Leads</h2>
          <div className="flex flex-col items-end justify-end space-y-3">
            <div className="inline-block space-x-2 items-center">
              <label htmlFor="startDate" className="text-[12px]">
                From
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={dateRange.startDate}
                onChange={handleDateChange}
                className="border outline-none rounded px-2 py-1 text-[12px]"
              />
              <label htmlFor="endDate" className="text-[12px]">
                To
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={dateRange.endDate}
                onChange={handleDateChange}
                className="border outline-none rounded px-2 py-1 text-[12px]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <label className="flex items-center text-[12px]">
                <input
                  type="radio"
                  name="frequency"
                  value="daily"
                  checked={frequency === "daily"}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="mr-1"
                />
                Daily
              </label>
              <label className="flex items-center text-[12px]">
                <input
                  type="radio"
                  name="frequency"
                  value="weekly"
                  checked={frequency === "weekly"}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="mr-1"
                />
                Weekly
              </label>
              <label className="flex items-center text-[12px]">
                <input
                  type="radio"
                  name="frequency"
                  value="monthly"
                  checked={frequency === "monthly"}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="mr-1"
                />
                Monthly
              </label>
            </div>
          </div>
        </div>

        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-white border-2">
            <tr>
              <th className="px-4 py-2 text-left">
                Organization Name
                <img
                  src="/down-arrow.png"
                  className="inline-block w-3 h-3"
                  alt="down arrow"
                />
              </th>
              <th className="px-4 py-2 text-left">Last Meeting</th>
              <th className="px-4 py-2 text-left">Next Meeting</th>
              <th className="px-4 py-2 text-left">
                Targeted Department
                <img
                  src="/down-arrow.png"
                  className="inline-block w-3 h-3"
                  alt="down arrow"
                />
              </th>
              <th className="px-4 py-2 text-left">
                Lead Owner
                <img
                  src="/down-arrow.png"
                  className="inline-block w-3 h-3"
                  alt="down arrow"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{lead.organization}</td>
                <td className="px-4 py-2">{lead.lastMeeting}</td>
                <td className="px-4 py-2">{lead.nextMeeting}</td>
                <td className="px-4 py-2">{lead.department}</td>
                <td className="px-4 py-2">{lead.leadOwner}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex    mb-4 py-3 px-5">
          <div className="flex items-center  ml-5 mr-8">
            <span className="w-[10px] h-[10px] bg-blue-400 inline-block border-1 rounded-none mr-2"></span>
            <span className="text-[14px]">
              Wants to buy product budget allocation is done,
              <br /> will be within next 30 to 60 days
            </span>
          </div>
          <div className="flex items-center mr-8 ml-5">
            <span className="w-3 h-3 bg-yellow-400 inline-block border-1 rounded-none mr-2"></span>
            <span className="text-[14px]">
              Has intention to buy product, making provisions <br /> of
              procurement, conversion period would be 3 to 6 months
            </span>
          </div>
          <div className="flex items-center mr-5 ml-5">
            <span className="w-3 h-3 bg-red-400 inline-block border-1 rounded-none mr-2"></span>
            <span className="text-[14px]">
              Conversion period would be 9 to 10 months
            </span>
          </div>
        </div>
      </div>
      {/* Additional UI Section */}
      <AdditionalUiSection />
    </div>
  );
};

export default GetLead;
