import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditLeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: "",
    address: "",
    area: "",
    city: "",
    pincode: "",
    callObjective: "",
    targetedDepartment: "",
    lastMeeting: "",
    requiredSupport: "",
    salesExpected: "",
    leadOwner: "",
    leadGeneratedThrough: {
      email: false,
      calling: false,
      meetings: false,
    },
    nextCallObjective: "",
    discussionPoints: "",
    nextFollowUp: "",
    comments: "",
    status: "",
    category: "cold",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCategoryChange = (category) => {
    setFormData({ ...formData, category });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/updateLead", {
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Lead updated successfully!");
      } else {
        alert("Failed to update lead.");
      }
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const backToLeadDetails = () => {
    navigate("/leadDetails");
  };

  return (
    <div className="px-6 py-1 bg-gray-200">
      <div className="bg-[#fff] rounded-2xl shadow-lg  pb-3">
        <div
          className="relative  w-full h-20  bg-cover bg-center"
          style={{ backgroundImage: "url('/blue-background.png') " }}
        >
          <button
            className="absolute top-5 right-4 text-black"
            onClick={backToLeadDetails}
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

          <h2 className="text-3xl font-bold text-black text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Edit Lead
          </h2>
        </div>
        <p className="text-center font-poppins my-4">
          Please fill out the following details to edit a lead in the system.
        </p>

        <hr className="text-[#D5D9DD] border-[1.5px]" />

        <div className="px-6 py-5">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <div className="col-span-1 md:col-span-2 flex items-center gap-4 mt-3">
              <label className="block text-[#000000] font-poppins font-weight-[500] mb-2 w-40">
                Organization Name
                <p className="text-[10px]">(Workplace name 1)</p>
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Organization Name"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Address"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-60">
                Area
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Area"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Product Promoted
              </label>
              <input
                type="text"
                name="productPromoted"
                value={formData.productPromoted}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Product Promoted"
              />
            </div>

            <div className="flex items-start gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-60">
                Lead Generated Through
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="leadGeneratedThrough[email]"
                    checked={formData.leadGeneratedThrough.email}
                    onChange={handleChange}
                  />{" "}
                  Email
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="leadGeneratedThrough[calling]"
                    checked={formData.leadGeneratedThrough.calling}
                    onChange={handleChange}
                  />{" "}
                  Calling
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="leadGeneratedThrough[meetings]"
                    checked={formData.leadGeneratedThrough.meetings}
                    onChange={handleChange}
                  />{" "}
                  Meetings
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="City"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000]  font-poppins font-weight-[500] w-60">
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Pincode"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Call Objective
              </label>
              <input
                type="text"
                name="callObjective"
                value={formData.callObjective}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Call Objective"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className=" text-[#000000] font-poppins font-weight-[500] w-48">
                Next Call Objective
              </label>
              <img className="w-5 h-5" src="/Vector.png" alt="vector" />
              <input
                type="text"
                name="nextCallObjective"
                value={formData.nextCallObjective}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Next Call Objective"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Targeted Department
              </label>

              <input
                type="text"
                name="targetedDepartment"
                value={formData.targetedDepartment}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Targeted Department"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-48">
                Discussion Points
              </label>
              <img className="w-5 h-5" src="/Vector.png" alt="vector" />
              <input
                type="text"
                name="discussionPoints"
                value={formData.discussionPoints}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Discussion Points"
              />
            </div>

            {/* Last Meeting */}
            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Last Meeting
              </label>

              <input
                type="text"
                name="lastMeeting"
                value={formData.lastMeeting}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Last Meeting"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-48">
                Next Follow Up
              </label>
              <img className="w-5 h-5" src="/Vector.png" alt="vector" />
              <input
                type="text"
                name="nextFollowUp"
                value={formData.nextFollowUp}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Next Follow Up"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Required Support
              </label>
              <input
                type="text"
                name="requiredSupport"
                value={formData.requiredSupport}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Required Support"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-48">
                Comments
              </label>
              <img className="w-5 h-5" src="/Vector.png" alt="vector" />
              <input
                type="text"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Comments"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Sales Expected
              </label>
              <input
                type="text"
                name="salesExpected"
                value={formData.salesExpected}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Sales Expected"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-48">
                Status
              </label>
              <img className="w-5 h-5" src="/Vector.png" alt="vector" />
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Status"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Lead Owner
              </label>
              <input
                type="text"
                name="leadOwner"
                value={formData.leadOwner}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Lead Owner"
              />
            </div>

            <div className="flex items-start gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-48">
                Category
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="category[hot]"
                    checked={formData.category.hot}
                    onChange={handleCategoryChange}
                    className="mr-3"
                  />
                  <div className="w-17 rounded-sm px-3 bg-[#ED0E3F33] text-center text-[12px] flex justify-center text-[#EF6E68CC] items-center">
                    HOT
                  </div>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="category[warm]"
                    checked={formData.category.warm}
                    onChange={handleCategoryChange}
                    className="mr-3"
                  />
                  <div className="w-17 rounded-sm px-3 bg-[#FBBC1A61] text-center text-[12px] flex justify-center text-[#FF9600CC] items-center">
                    WARM
                  </div>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="category[cold]"
                    checked={formData.category.cold}
                    onChange={handleCategoryChange}
                    className="mr-3"
                  />
                  <div className="w-17 rounded-sm px-3 bg-[#399EB561] text-center text-[12px] flex justify-center text-[#2196F3CC] items-center">
                    COLD
                  </div>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-center space-x-4 mt-6 mb-5">
          <button
            type="submit"
            className="bg-[#709EB1] text-white px-6 py-2 rounded-lg border-2 hover:bg-[#648fa2]"
          >
            Save
          </button>
          <button
            type="submit"
            className="bg-gray-300 text-[#000000] font-poppins font-weight-[500] px-6 py-2 rounded-lg  hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLeadForm;
