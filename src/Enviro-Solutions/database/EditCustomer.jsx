import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const EditCustomer = ({ customerId }) => {
  const navigate = useNavigate();

  const [ setCustomerData] = useState({
    organizationName1: "",
    address1: "",
    region1: "",
    state1: "",
    district1: "",
    pinCode1: "",
    totalBeds1: "",
    totalICU1: "",
    totalOT1: "",
    totalMIS1: "",
    quotationName: "",
    organizationName2: "",
    address2: "",
    region2: "",
    state2: "",
    district2: "",
    pinCode2: "",
    totalBeds2: "",
    totalICU2: "",
    totalOT2: "",
    totalMIS2: "",
    salesPersonName: "",
  });

  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const fetchCustomerDetails = () => {
      // Mock data for customer
      const customer = {
        organizationName1: "Orange City Hospital",
        address1: "Plot no 61 Bajaj Nagar",
        region1: "West",
        state1: "Maharashtra",
        district1: "Nagpur",
        pinCode1: "440034",
        totalBeds1: "100",
        totalICU1: "10",
        totalOT1: "5",
        totalMIS1: "50",
        quotationName: "John Doe",
        organizationName2: "Sukhkarta Hospital",
        address2: "Near TVS Showroom",
        region2: "West",
        state2: "Maharashtra",
        district2: "Nagpur",
        pinCode2: "440034",
        totalBeds2: "50",
        totalICU2: "5",
        totalOT2: "3",
        totalMIS2: "20",
        salesPersonName: "Jane Doe",
      };
      setCustomerData(customer);
    };

    fetchCustomerDetails();
  }, [customerId]);

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setCustomerData((prevData) => ({ ...prevData, [name]: value }));
  //   };

  const handleUpdateCustomer = () => {
    setPopupVisible(true);

    setTimeout(() => {
      setPopupVisible(false);
    }, 4000);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const GoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-11/12 max-w-6xl  pb-4 my-4">
        <div
          className="relative  w-full h-20  bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/gradient.png')" }}
        >
          <button
            className="absolute top-5 right-4 text-black"
            onClick={GoBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-[#000000] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Edit Customer Details
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-6 px-6 ">
          <div>
            <h2 className="font-semibold mb-2">
              Organization Name (Workplace Name 1)
            </h2>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-[#000] rounded"
              placeholder="Orange City Hospital And Research Institute"
            />

            <h2 className="font-semibold mb-2">Address</h2>
            <textarea
              className="w-full p-2 mb-4 border border-[#000] rounded"
              placeholder="Plot no 61 Near TVS Showroom Bajaj Nagar Nagpur"
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">Region</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                  placeholder="West"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">State</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                  placeholder="Maharashtra"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">District</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                  placeholder="Nagpur"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">Pin Code</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                  placeholder="440034"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">Total Beds</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">Total ICU</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">Total Operation Theater</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">
                  Total No Of MIS in A Year
                </h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
            </div>

            <h2 className="font-semibold mb-2">
              Quotation In The Name /Designation
            </h2>
            <input
              type="text"
              className="w-full p-2 border border-[#000] rounded"
            />
          </div>

          <div>
            <h2 className="font-semibold mb-2">
              Organization Name (Workplace Name 2)
            </h2>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-[#000] rounded"
              placeholder="Sukhkarta Hospital"
            />

            <h2 className="font-semibold mb-2">Address</h2>
            <textarea
              className="w-full p-2 mb-4 border border-[#000] rounded"
              placeholder="Plot no 61 Near TVS Showroom Bajaj Nagar Nagpur"
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">Region</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">State</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">District</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">Pin Code</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">Total Beds</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">Total ICU</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="font-semibold mb-2">Total Operation Theater</h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
              <div>
                <h2 className="font-semibold mb-2">
                  Total No Of MIS in A Year
                </h2>
                <input
                  type="text"
                  className="w-full p-2 border border-[#000] rounded"
                />
              </div>
            </div>

            <h2 className="font-semibold mb-2">Sales Person Name</h2>
            <input
              type="text"
              className="w-full p-2 border border-[#000] rounded"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <button
            type="submit"
            className="bg-[#709EB1] text-white px-7 py-2 rounded-lg  hover:bg-[#648fa2]"
            onClick={handleUpdateCustomer}
          >
            Save
          </button>

          {isPopupVisible && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-start justify-center pt-2">
              <div className="bg-white w-full max-w-md rounded-2xl shadow-lg relative pb-4">
                <div
                  className="text-left relative h-14"
                  style={{ backgroundImage: "url('/blueColorBackground.png')" }}
                >
                  <h2 className="text-xl font-bold text-gray-700 px-6 py-3">
                    Edit Customer Details
                  </h2>
                  <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    onClick={closePopup}
                  >
                    <img src="/Vector4.png" alt="Close icon" className="" />
                  </button>
                </div>

                <div className="flex flex-col items-center my-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Customer Editted Added Successfully!
                  </h3>
                  <img src="/Vector3.png" alt="Checkmark" className="my-4" />
                  <p className="text-gray-600 text-center">
                    Edited Customer details has been added successfully to
                    Customer Database.
                  </p>
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={closePopup}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-6 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="bg-gray-300  font-poppins font-weight-[500] px-7 py-1 rounded-lg  hover:bg-gray-400 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
