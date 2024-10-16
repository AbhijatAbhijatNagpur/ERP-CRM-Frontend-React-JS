import { useNavigate } from "react-router-dom";

const LeadDetails = () => {
  const navigate = useNavigate();

  const BackToLeadDetails = () => {
    navigate("/trackLead");
  };

  return (
    <div className=" ml-64 md:p-8  h-screen">
      <div className="bg-white rounded-xl shadow-lg">
        <div
          className="relative  h-20 bg-cover bg-center rounded-t-2xl"
          style={{ backgroundImage: "url('/blue-background.png')" }}
        >
          <a href="/editLead" className="absolute top-4 left-4 text-black">
            <img src="/Edit.png" alt="edit-lead" className="w-6 h-6" />
          </a>

          <button
            className="absolute top-4 right-4 text-black"
            onClick={BackToLeadDetails}
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
            Lead Details
          </h2>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-48 gap-y-4 text-sm text-gray-700">
          <div className="flex">
            <p className="font-semibold w-40">Organization Name</p>
            <p className="ml-auto">Lata Mangeskar Hospital</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Address</p>
            <p className="ml-auto">
              Plot No 61 Mahatma Gandhi Nagar Hudkeshwar Road
            </p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Area</p>
            <p className="ml-auto">Burdi</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Lead Generated Through</p>
            <p className="ml-auto">Meeting</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">City</p>
            <p className="ml-auto">Nagpur</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Next Call Objective</p>
            <p className="ml-auto">Quotation for Product</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Pincode</p>
            <p className="ml-auto">440034</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Discussion Points</p>
            <p className="ml-auto">
              Need Quotation of Product
              <br />
              Ready to Buy Product
              <br />
              Positive Attitude
            </p>
          </div>

          <div className="flex">
            <p className="font-semibold w-40">Call Objective</p>
            <p className="ml-auto">Product Sale</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Next Follow Up</p>
            <p className="ml-auto">30-08-2024</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Targeted Department</p>
            <p className="ml-auto">Neurology</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Comments</p>
            <p className="ml-auto">He is positive toward buying Product</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Last Meeting</p>
            <p className="ml-auto">22-08-2024</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Status</p>
            <p className="ml-auto">Procurement Sale</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Required Support</p>
            <p className="ml-auto">Want approval From Dean</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Sales Expected</p>
            <p className="ml-auto">01-11-2024</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-40">Lead Owner</p>
            <p className="ml-auto">Abhijit Kulkarni</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Category</p>
            <span className="bg-[#ED0E3F33] rounded-md text-[#EF6E68CC] text-xs px-2 py-1 ">
              HOT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
