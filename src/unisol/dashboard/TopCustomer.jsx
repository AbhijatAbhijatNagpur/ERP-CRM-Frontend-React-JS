const TopCustomer = () => {
  // Sample data for top customers
  const customers = [
    { index: 1, name: 'John Doe', number: '4323', years: 10, color: 'bg-blue-500', yearsBg: 'bg-yellow-100' },
    { index: 2, name: 'Jane Smith', number: '5678', years: 7, color: 'bg-green-500', yearsBg: 'bg-pink-100' },
    { index: 3, name: 'Alice Johnson', number: '9101', years: 5, color: 'bg-red-500', yearsBg: 'bg-teal-100' },
    { index: 4, name: 'Bob Brown', number: '1122', years: 12, color: 'bg-yellow-500', yearsBg: 'bg-purple-100' },
    { index: 5, name: 'Charlie Davis', number: '3344', years: 8, color: 'bg-purple-500', yearsBg: 'bg-orange-100' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-3">
  {/* Left side with h2 */}
  <h2 className="text-lg font-medium">Top Customers</h2>
  
  {/* Right side with button and h6 */}
  <div className="flex flex-col items-end">
    <button className="px-3 py-1 bg-bgcolor text-white text-sm rounded-md mb-1">All Time</button>
  </div>
</div>


      {/* Top Customers List */}
      <div className="grid grid-cols-1">
      <p className="flex justify-end text-sm">Customer Since</p>
        {customers.map((customer) => (
          <div key={customer.index} className="flex justify-between items-center p-3">
            {/* Index with color */}
            <div className={`p-1 rounded-full w-8 h-8 text-white text-sm ${customer.color}`}>
              <p className="font-bold text-center">{customer.index}</p>
            </div>

            {/* Customer Details */}
            <div className="flex-1 ml-2 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">{customer.name}</p>
                <p className="text-xs text-gray-500">{customer.number}</p>
              </div>

              {/* Years with unique background color */}
               
              <div 
              className={`px-2 py-1 rounded ${customer.yearsBg}`}>
                <p className="text-xs text-gray-600">{customer.years}+ years</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCustomer;
