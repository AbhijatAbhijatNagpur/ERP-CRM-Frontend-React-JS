import { useNavigate } from "react-router-dom";
import AdditionalUiSection from "../subComponents/AdditionalUiSection";

const CustomerDatabase = () => {
  const navigate = useNavigate();
  const customers = [
    {
      srNo: "01",
      salesPerson: "Anand",
      region: "North/Delhi/South Delhi",
      organization: "Latamangeshkar Hospital",
      quotationIn: "Anand",
      name: "Shubham",
      designation: "HOD",
      speciality: "Cardiologists",
    },
    {
      srNo: "02",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "03",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "04",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "05",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "06",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "07",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "07",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "07",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "07",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
    {
      srNo: "07",
      salesPerson: "Dhiraj",
      region: "South/Tamil Nadu/Chennai",
      organization: "Maxwell Hospital",
      quotationIn: "Dhiraj",
      name: "Rutuja",
      designation: "HOD",
      speciality: "Orthopedic",
    },
  ];

  const GoToCreate = () => {
    navigate("/createCustomer");
  };

  return (
    <div className="p-6 bg-gray-200 h-auto">
      <div className="flex items-center mb-6">
        <div className="flex space-x-2">
          <p className="text-sm font-medium">Database</p>
          <img className="h-2 mt-2" src="/Path2.png" alt="path" />
          <p className="text-sm text-blue-500 font-medium">Customer Database</p>
          <img className="h-2  mt-2 " src="/Path.png" alt="path" />
        </div>
        <div className="flex space-x-16 ml-[400px]">
          <div className="flex items-center bg-white px-2 py-4 rounded-3xl shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex justify-center items-center">
              <img className="w-8 h-8" src="/profile-2user.png" alt="profile" />
            </div>
            <div className="ml-3 text-center">
              <p className="text-gray-400">Total Customers</p>
              <p className="text-black text-2xl font-bold">5,423</p>
              <p className="text-green-600 text-sm">
                ↑ 16% <span className="text-black">this month</span>
              </p>
            </div>
          </div>
          <div className="flex items-center bg-white px-2 py-4 rounded-3xl shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex justify-center items-center">
              <img className="w-8 h-8" src="/profile-tick1.png" alt="active" />
            </div>
            <div className="ml-3 text-center">
              <p className="text-gray-400">Active Customers</p>
              <p className="text-black text-xl font-semibold">5,027</p>
            </div>
          </div>
          <div className="flex items-center bg-white px-4 rounded-3xl shadow-xl">
            <div className="w-12 h-12 bg-red-100 rounded-full flex justify-center items-center">
              <img className="w-8 h-8" src="/profile-tick.png" alt="inactive" />
            </div>
            <div className="ml-3 text-center">
              <p className="text-gray-400">
                Customer Not <br /> Approached
              </p>
              <p className="text-black text-xl font-semibold">328</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="text-xl font-bold text-center py-3">
          CUSTOMER DATABASE
        </div>
        <table className="min-w-full">
          <thead className="bg-white border-2">
            <tr>
              <th className="py-2 px-6">Sr. No</th>
              <th className="py-2 px-6">
                Sales Person Name
                <img
                  src="/Vector2.png"
                  alt="vector"
                  className="inline-block px-1 w-5 h-2"
                />
              </th>
              <th className="py-2 px-6">
                Region/State/District{" "}
                <img
                  src="/Vector2.png"
                  alt="vector"
                  className="inline-block px-1 w-5 h-2"
                />
              </th>
              <th className="py-2 px-6">
                Organization Name
                <img
                  src="/Vector2.png"
                  alt="vector"
                  className="inline-block px-1 w-5 h-2"
                />
              </th>
              <th className="py-2 px-6">Quotation In Name</th>
              <th className="py-2 px-6">Name</th>
              <th className="py-2 px-6">Designation</th>
              <th className="py-2 px-6">Speciality</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-6">{customer.srNo}</td>
                <td className="py-2 px-6">
                  {" "}
                  <a href="/customerDetails">{customer.salesPerson}</a>
                </td>
                <td className="py-2 px-6">{customer.region}</td>
                <td className="py-2 px-6">
                  <a href="/customerDetails">{customer.organization}</a>
                </td>
                <td className="py-2 px-6">{customer.quotationIn}</td>
                <td className="py-2 px-6">{customer.name}</td>
                <td className="py-2 px-6">{customer.designation}</td>
                <td className="py-2 px-6">{customer.speciality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center space-x-3 ">
        <button
          className="bg-white text-black text-[20px] font-bold py-4 px-3 ml-5 mt-2 rounded-sm shadow-xl"
          onClick={GoToCreate}
        >
          ADD NEW CUSTOMER
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
  );
};

export default CustomerDatabase;
