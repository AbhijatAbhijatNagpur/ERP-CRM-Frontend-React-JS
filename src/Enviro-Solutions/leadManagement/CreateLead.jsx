import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateLead = () => {
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const [formData, setFormData] = useState([
    {
      organizationName: "",
      address: "",
      area: "",
      productPromoted: "",
      leadGeneratedThrough: {
        email: false,
        calling: false,
        meetings: false,
      },
      city: "",
      pincode: "",
      callObjective: "",
      nextCallObjective: "",
      targetedDepartment: "",
      discussionPoints: "",
      lastMeeting: "",
      nextFollowUp: "",
      requiredSupport: "",
      comments: "",
      salesExpected: "",
      status: "",
      leadOwner: "",
      category: {
        hot: false,
        warm: false,
        cold: false,
      },
    },
  ]);

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

  const isFormEmpty = () => {
    const isEmpty = Object.values(formData).every(
      (field) =>
        (typeof field === "string" && field === "") ||
        (typeof field === "object" && Object.values(field).every((val) => !val))
    );

    if (isEmpty) {
      alert("All credentials required");
    }

    return isEmpty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData("");

    localStorage.setItem("leadFormData", JSON.stringify(formData));
    try {
      const response = await axios.post("/api/AddLead", formData);

      if (response.data) {
        alert("Lead added success fully");
      } else {
        alert("There was an error adding the lead!");
      }
    } catch (error) {
      console.error("There was an error adding the lead!", error);
    }
  };

  const handleCreateLead = () => {
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
    <div className="px-6 py-2 bg-gray-200">
      <div className="flex my-5 mr-5 space-x-2 ">
        <p className="text-[12px]  font-poppins">Lead Management</p>
        <img className="h-2 mt-[5px]" src="/Path 2.png" alt="path" />
        <p className="text-[12px] text-blue-500 font-poppins">Create Lead</p>
        <img
          className="h-2 mt-[5px] fill-blue-300"
          src="/Path3.png"
          alt="path"
        />{" "}
      </div>
      <div className="bg-[#fff] rounded-2xl shadow-lg  my-7 pb-3">
        <div
          className="relative  w-full h-20  bg-cover bg-center"
          style={{ backgroundImage: "url('/blue-background.png')" }}
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

          <h2 className="text-3xl font-bold text-black text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Add Lead
          </h2>
        </div>

        <p className="text-center font-poppins my-4">
          Please fill out the following details to add a Lead to the system.
        </p>
        <hr className="text-[#D5D9DD] border-[1.5px]" />

        <div className="px-4">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 "
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
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
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
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Lead Generated Through
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="leadGeneratedThrough[email]"
                    // checked={formData.leadGeneratedThrough.email}
                    onChange={handleChange}
                  />{" "}
                  Email
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="leadGeneratedThrough[calling]"
                    // checked={formData.leadGeneratedThrough.calling}
                    onChange={handleChange}
                  />{" "}
                  Calling
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="leadGeneratedThrough[meetings]"
                    // checked={formData.leadGeneratedThrough.meetings}
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
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Pincode
              </label>
              <input
                type="number"
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
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Next Call Objective
              </label>
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
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Discussion Points
              </label>
              <input
                type="text"
                name="discussionPoints"
                value={formData.discussionPoints}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Discussion Points"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Last Meeting
              </label>
              <input
                type="date"
                name="lastMeeting"
                value={formData.lastMeeting}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Last Meeting"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Next Follow Up
              </label>
              <input
                type="date"
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
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Comments
              </label>
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
                type="date"
                name="salesExpected"
                value={formData.salesExpected}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none rounded-lg border-2 border-[#00000073]"
                placeholder="Sales Expected"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Status
              </label>
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
              <label className="block text-[#000000] font-poppins font-weight-[500] w-40">
                Category
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="category[hot]"
                    // checked={formData.category.hot}
                    onChange={handleChange}
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
                    // checked={formData.category.warm}
                    onChange={handleChange}
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
                    // checked={formData.category.cold}
                    onChange={handleChange}
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

        <div className="flex justify-center space-x-6 mt-8">
          <button
            type="submit"
            className="bg-[#709EB1] text-white px-7 py-1 rounded-lg  hover:bg-[#648fa2]"
            disabled={isFormEmpty()}
            onClick={handleCreateLead}
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
                    New Customer
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
                    New Lead Added Successfully!
                  </h3>
                  <img src="/Vector3.png" alt="Checkmark" className="my-4" />
                  <p className="text-gray-600 text-center">
                    New Lead has been created & added successfully to Database.
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

export default CreateLead;
