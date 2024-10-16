import { GiPlainArrow } from "react-icons/gi";
import { useState, useEffect } from 'react';

const SatisfactionRate = () => {
  // State to hold the satisfaction rate data
  const [data, setData] = useState({
    votes: '63,745 votes',
    verification: 'Verified by Customer',
    satisfactionRate: '78%',
    change: '2.5%'
  });

  // Example API call (simulate with a function)
  const fetchSatisfactionData = async () => {
    try {
      // Simulate API response
      const simulatedData = {
        votes: '63,745 votes',
        verification: 'Verified by Customer',
        satisfactionRate: '78%',
        change: '2.5%'
      };

      setData(simulatedData);
    } catch (error) {
      console.error('Error fetching satisfaction data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchSatisfactionData();
  }, []);

  return (
    <div className="p-2 bg-white rounded-lg h-[160px]">
      <h2 className="font-bold text-sm">Satisfaction Rate</h2>
      <div className="flex items-center justify-between p-2 border rounded-lg bg-gray-200 shadow-md h-[100px] mt-4">
        <div className="flex-shrink-0 rounded-lg w-16 h-16 flex items-center justify-center bg-founds">
          <img src="/funds.png" alt="Satisfaction Rate" className="w-8 h-8" />
        </div>
        <div className="flex-grow ml-2">
          <h2 className="text-lg text-gray-600 font-semibold">{data.votes}</h2>
          <p className="text-gray-600 text-sm">{data.verification}</p>
        </div>
        <div className="flex flex-col items-end ml-2">
          <p className="text-lg text-gray-600 font-semibold">{data.satisfactionRate}</p>
          <p className="text-founds flex items-center text-sm">
            {data.change} <GiPlainArrow className="text-black ml-1" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionRate;
