import  { useContext, useState } from 'react';
import AdditionalUiSection from '../subComponents/AdditionalUiSection';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/MyAppContext';

const SalesAnalytics = () => {
    const navigate = useNavigate();
    
    const { totalSale, clearBill, pendingBill } = useContext(AppContext);

  // State for period selection
  const [selectedPeriod, setSelectedPeriod] = useState('Daily');
  
  // Sample data array
  const salesData = [
    {
      id: 1,
      employee: 'John Doe',
      product: 'Product A',
      date: '2024-04-01',
      noOfProductsSold: 50,
      billAmount: 5000.0,
      paidAmount: 4500.0,
      unclearedAmount: 500.0,
      billStatus: 'Pending',
    },
    {
      id: 2,
      employee: 'Jane Smith',
      product: 'Product B',
      date: '2024-04-02',
      noOfProductsSold: 30,
      billAmount: 3000.0,
      paidAmount: 3000.0,
      unclearedAmount: 0.0,
      billStatus: 'Paid',
    },
    // Add more data objects as needed
  ];

  const GoToCreate = () => {
    navigate("/addSalesReport");
  };


  return (
    <div className="flex ">
      {/* Left Menubar (Assumed to be present externally) */}
      {/* If the menubar is part of this component, include it here. Otherwise, ensure it's rendered outside this component. */}

      {/* Main Content */}
      <div className="flex-1  ml-64 p-4 bg-gray-100 min-h-screen">
        {/* Summary Cards and Controls Container */}
        <div className="flex  items-center justify-center space-y-4 md:space-y-0 mb-6">
          {/* Summary Cards */}
          <div className="flex items-center justify-center  space-x-4">
            {/* Total Sales Card */}
            <div className="bg-white shadow rounded-lg p-3 min-w-[100px]">
              <h3 className=" font-semibold text-sm ">Total Sales</h3>
              <p className="text-sm font-semibold ">{totalSale.message}</p>
            </div>

            {/* Clear Bill Card */}
            <div className="bg-white shadow rounded-lg p-3 min-w-[100px]">
              <h3 className=" font-semibold text-sm ">Clear Bill</h3>
              <p className="text-sm font-semibold ">{clearBill.message}</p>
            </div>

            {/* Pending Bill Card */}
            <div className="bg-white shadow rounded-lg p-3 min-w-[100px]">
              <h3 className="font-semibold text-sm">Pending Bill</h3>
              <p className="text-sm font-semibold ">{pendingBill.message}</p>
            </div>
          </div>

          {/* Date Range and Period Selection */}
          <div className="flex items-center justify-center  space-x-4">
            {/* Date Range Selector */}
            <div className="flex items-center space-x-2 ml-2">
              <div>
                <input
                  id="start-date"
                  type="date"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                />
              </div>
              <span className="text-blue-500">To</span>
              <div>
                <input
                  id="end-date"
                  type="date"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-1"
                />
              </div>
            </div>

            {/* Period Selection Radio Buttons */}
            <div className="flex items-center justify-center  space-x-2">
              {['Daily', 'Weekly', 'Monthly'].map((period) => (
                <label key={period} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="period"
                    value={period}
                    checked={selectedPeriod === period}
                    onChange={() => setSelectedPeriod(period)}
                    className="hidden"
                  />
                  <span
                    className={`px-4 py-2 rounded-full text-white text-sm ${
                      selectedPeriod === period
                        ? 'bg-blue-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    } transition duration-200`}
                  >
                    {period}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Employee</th>
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">No. of Products Sold</th>
                  <th className="py-3 px-6 text-left">Bill Amount ($)</th>
                  <th className="py-3 px-6 text-left">Paid Amount ($)</th>
                  <th className="py-3 px-6 text-left">Uncleared Amount ($)</th>
                  <th className="py-3 px-6 text-left">Bill Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {salesData.map((data) => (
                  <tr key={data.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.employee}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.product}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.date}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">{data.noOfProductsSold}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">${data.billAmount.toFixed(2)}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">${data.paidAmount.toFixed(2)}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">${data.unclearedAmount.toFixed(2)}</td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <span
                        className={`py-1 px-3 rounded-full text-xs font-semibold ${
                          data.billStatus === 'Paid'
                            ? 'bg-green-200 text-green-600'
                            : data.billStatus === 'Pending'
                            ? 'bg-yellow-200 text-yellow-600'
                            : 'bg-red-200 text-red-600'
                        }`}
                      >
                        {data.billStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
          <div className="flex justify-between items-center  ">
        <button
          className="bg-white flex items-center justify-center text-black text-[16px] font-bold  mt-1 rounded-sm shadow-xl"
          onClick={GoToCreate}
        >
          ADD REPORT
          <img
            src="/Vector.png"
            className="inline-block w-6 h-6 mx-2"
            alt="add-customer"
          />
        </button>

        <div className="flex mt-3">
          <AdditionalUiSection />
        </div>
      </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
