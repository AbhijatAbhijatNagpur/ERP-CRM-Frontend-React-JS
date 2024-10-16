
import { useState } from 'react';
import Modal from '../../Modal'; // Import the Modal component

const SalesReportForm = () => {
  const initialFormData = {
    productName: '',
    employeeFirstName: '',
    employeeLastName: '',
    date: '',
    organizationName: '',
    email: '',
    contact: '',
    region: '',
    state: '',
    district: '',
    billAmount: '',
    paidAmount: '',
    unclearedAmount: '',
    noOfProductsSold: '',
    billStatus: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [error, setError] = useState(null); // State to handle error messages

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here, you can add your form submission logic, such as sending data to a backend

    // After successful submission, open the modal
    setIsModalOpen(true);
  };

  // Handle discarding the form
  const handleDiscard = () => {
    setFormData(initialFormData);
    setError(null); // Reset error state on discard
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setError(null); // Reset error state when closing modal
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Sales Report</h2>
      {error && <p className="text-red-600">{error}</p>} {/* Show error message if exists */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Form fields remain the same... */}
          
          {/* Product Name */}
          <div>
            <label htmlFor="productName" className="block text-sm text-gray-700">
              Product Name
            </label>
            <input
              id="productName"
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Employee First Name */}
          <div>
            <label htmlFor="employeeFirstName" className="block text-sm text-gray-700">
              Employee First Name
            </label>
            <input
              id="employeeFirstName"
              type="text"
              name="employeeFirstName"
              value={formData.employeeFirstName}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Employee Last Name */}
          <div>
            <label htmlFor="employeeLastName" className="block text-sm text-gray-700">
              Employee Last Name
            </label>
            <input
              id="employeeLastName"
              type="text"
              name="employeeLastName"
              value={formData.employeeLastName}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm text-gray-700">
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Organization Name */}
          <div>
            <label htmlFor="organizationName" className="block text-sm text-gray-700">
              Organization Name
            </label>
            <input
              id="organizationName"
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block text-sm text-gray-700">
              Contact
            </label>
            <input
              id="contact"
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Region */}
          <div>
            <label htmlFor="region" className="block text-sm text-gray-700">
              Region
            </label>
            <input
              id="region"
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm text-gray-700">
              State
            </label>
            <input
              id="state"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* District */}
          <div>
            <label htmlFor="district" className="block text-sm text-gray-700">
              District
            </label>
            <input
              id="district"
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Bill Amount */}
          <div>
            <label htmlFor="billAmount" className="block text-sm text-gray-700">
              Bill Amount
            </label>
            <input
              id="billAmount"
              type="number"
              name="billAmount"
              value={formData.billAmount}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              min="0"
              required
            />
          </div>

          {/* Paid Amount */}
          <div>
            <label htmlFor="paidAmount" className="block text-sm text-gray-700">
              Paid Amount
            </label>
            <input
              id="paidAmount"
              type="number"
              name="paidAmount"
              value={formData.paidAmount}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              min="0"
              required
            />
          </div>

          {/* Unclear Amount */}
          <div>
            <label htmlFor="unclearedAmount" className="block text-sm text-gray-700">
              Unclear Amount
            </label>
            <input
              id="unclearedAmount"
              type="number"
              name="unclearedAmount"
              value={formData.unclearedAmount}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              min="0"
              required
            />
          </div>

          {/* No. of Products Sold */}
          <div>
            <label htmlFor="noOfProductsSold" className="block text-sm text-gray-700">
              No. of Products Sold
            </label>
            <input
              id="noOfProductsSold"
              type="number"
              name="noOfProductsSold"
              value={formData.noOfProductsSold}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              min="0"
              required
            />
          </div>

          {/* Bill Status */}
          <div>
            <label htmlFor="billStatus" className="block text-sm text-gray-700">
              Bill Status
            </label>
            <input
              id="billStatus"
              type="text"
              name="billStatus"
              value={formData.billStatus}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
        

        </div>

        {/* Save and Discard Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleDiscard}
            className="px-4 py-2 bg-red-light text-red-600 rounded hover:bg-red-500 focus:outline-none"
          >
            Discard
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-light text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Success">
        <p className="text-gray-700">New sales report added successfully!</p>
      </Modal>
    </div>
  );
};

export default SalesReportForm;
