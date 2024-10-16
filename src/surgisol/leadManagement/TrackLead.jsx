import  { useEffect, useState } from "react";

const TrackLead = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData([
        {
          organization: "Government Medical",
          lastMeeting: "06-11-2023",
          nextMeeting: "06-11-2023",
          status: "Procurement sale",
          salesExpected: "06-11-2023",
          category: "HOT",
        },
        {
          organization: "Maxwell Hospital",
          lastMeeting: "06-11-2023",
          nextMeeting: "06-11-2023",
          status: "Procurement sale",
          salesExpected: "06-11-2023",
          category: "WARM",
        },
        {
          organization: "Maxwell Hospital",
          lastMeeting: "06-11-2023",
          nextMeeting: "06-11-2023",
          status: "Procurement sale",
          salesExpected: "06-11-2023",
          category: "WARM",
        },
        {
          organization: "Maxwell Hospital",
          lastMeeting: "06-11-2023",
          nextMeeting: "06-11-2023",
          status: "Procurement sale",
          salesExpected: "06-11-2023",
          category: "HOT",
        },
        {
          organization: "Maxwell Hospital",
          lastMeeting: "06-11-2023",
          nextMeeting: "06-11-2023",
          status: "Procurement sale",
          salesExpected: "06-11-2023",
          category: "WARM",
        },
        {
          organization: "Maxwell Hospital",
          lastMeeting: "06-11-2023",
          nextMeeting: "06-11-2023",
          status: "Procurement sale",
          salesExpected: "06-11-2023",
          category: "WARM",
        },
        {
          organization: "Maxwell Hospital",
          lastMeeting: "06-11-2023",
          nextMeeting: "06-11-2023",
          status: "Procurement sale",
          salesExpected: "06-11-2023",
          category: "HOT",
        },
      ]);
    }
  }, []);

  const categoryColor = (category) => {
    switch (category) {
      case "HOT":
        return "bg-[#ED0E3F33] text-[#EF6E68CC]";
      case "WARM":
        return "bg-[#FBBC1A61] text-[#FF9600CC]";
      case "COLD":
        return "bg-[#399EB561] text-[#2196F3CC]";
      default:
        return "";
    }
  };

  const handleOrganizationClick = (organization) => {
    alert(`You clicked on ${organization}`);
  };

  const handleCategoryClick = (category) => {
    alert(`You clicked on ${category}`);
  };

  return (
    <div className="p-4 bg-gray-200 h-screen">
      <div className="flex my-5 mr-5 space-x-2 ">
        <p className="text-[12px]  font-poppins">Lead Management</p>
        <img className="h-2 mt-[5px]" src="/Path 2.png" alt="arrow" />{" "}
        <p className="text-[12px] text-blue-500 font-poppins">Track Lead</p>
        <img
          className="h-2 mt-[5px] fill-blue-300"
          src="/Path3.png"
          alt="path"
        />{" "}
      </div>
      <div className="bg-white border rounded-lg shadow-[8px_8px_15px_0_rgba(0,0,0,0.1)]">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="border-b-2">
            <tr>
              <th className="  px-4 py-2 text-left">
                Organisation Name{" "}
                <img
                  src="/down-arrow.png"
                  className="inline-block w-3 h-3"
                  alt="down arrow"
                />
              </th>
              <th className="px-4 py-2 text-left">Last Meeting</th>
              <th className="px-4 py-2 text-left">Next Meeting</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Sales Expected</th>
              <th className="px-4 py-2 text-left">
                Category
                <img
                  src="/down-arrow.png"
                  className="inline-block w-3 h-3"
                  alt="down arrow"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2">
                  <a
                    href="/leadDetails"
                    onClick={() => handleOrganizationClick(row.organization)}
                    className="text-md font-poppins"
                  >
                    {row.organization}
                  </a>
                </td>
                <td className="px-4 py-2">{row.lastMeeting}</td>
                <td className="px-4 py-2">{row.nextMeeting}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2">{row.salesExpected}</td>
                <td className="px-4 py-2">
                  <a
                    href="/leadDetails"
                    onClick={() => handleCategoryClick(row.category)}
                    className={`px-2 rounded text-[12px] font-medium ${categoryColor(
                      row.category
                    )}`}
                  >
                    {row.category}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center space-x-3 mt-6">
        <button className="px-2 py-2 bg-white rounded-lg border text-md hover:bg-gray-100 shadow-lg">
          <img className="h-[11px]" src="/icon.png" alt="icon" />
        </button>
        <button className="bg-white border px-3 py-1 rounded-lg hover:bg-gray-100 text-sm shadow-lg font-semibold">
          Prev
        </button>
        <button className="bg-blue-200 px-4 py-1 rounded-lg hover:bg-blue-300 text-sm shadow-lg font-semibold">
          Next
        </button>
        <span className="text-sm font-semibold">Page:</span>
        <select className="border px-2 py-1 rounded-lg text-sm shadow-lg font-semibold">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <span className="text-sm font-semibold">of 10</span>
        <select className="border px-2 py-1 rounded-lg text-sm shadow-lg font-semibold">
          <option>15</option>
          <option>30</option>
          <option>50</option>
        </select>
      </div>
    </div>
  );
};

export default TrackLead;
