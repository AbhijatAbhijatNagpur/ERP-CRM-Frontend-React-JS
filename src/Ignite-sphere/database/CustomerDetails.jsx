import { useNavigate } from "react-router-dom";

const CustomerDetails = () => {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate("/customerDatabase");
  };

  const GoToEditPage = () => {
    navigate("/editCustomer");
  };
  return (
    <div className="p-8 bg-gray-200   ">
      <div className="w-[80%] mx-auto">
        <div
          className="relative flex justify-center items-center h-20 bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: "url('/gradient.png')" }}
        >
          <button
            className="absolute top-4 left-4 text-gray-500 hover:text-gray-900"
            onClick={GoToEditPage}
          >
            <img className="w-6 h-6" src="/Edit.png" alt="edit icon" />
          </button>
          <h1 className="text-2xl text-right font-bold text-gray-800">
            Customer Details
          </h1>

          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            onClick={GoBack}
          >
            <img src="/Vector4.png" alt="Close icon" />
          </button>
        </div>
        <div className="bg-white py-3 px-4">
          <div className="flex justify-end mr-6">
            <p className="text-gray-600 text-[14px]">
              Added On{" "}
              <span className="text-md text-gray-500 font-semibold pl-3">
                {" "}
                06/11/2020
              </span>
            </p>
          </div>

          {/* first section */}

          <div className="bg-[#FFFFFF] p-4  ">
            <div className="flex space-x-8 ">
              <h2 className="text-16 font-lexend text-[#000000B8] tracking-tighter">
                Organization Name <br />
                <span className="text-[14px] font-lexend">
                  (Workplace Name 1)
                </span>
              </h2>
              <h4 className="w-[400px] mx-auto text-gray-600 font-lexend   border-2 border-gray-300 shadow-[#00000040] px-5 py-2">
                Orange City Hospital And Research Institute
              </h4>

              <p className="text-[16px] font-lexend ">
                Sales Person Name
                <span className=" px-4 font-lexend ml-8">
                  Marooti Shrivastav
                </span>{" "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 space-x-3">
              <div className="space-y-2">
                <p className="text-[14px] font-lexend">
                  State :
                  <span className="text-16 font-lexend text-right px-4">
                    Maharashtra
                  </span>
                </p>
                <p className="text-[14px] font-lexend">
                  Dis :
                  <span className="text-16 px-4 font-lexend text-right">
                    {" "}
                    Nagpur
                  </span>
                </p>
                <p className="text-[14px] font-lexend">
                  Pin :
                  <span className="text-16 px-4 font-lexend text-right">
                    440034
                  </span>{" "}
                </p>
                <p className="text-[14px] font-lexend">
                  Region :
                  <span className="text-16 px-4 font-lexend text-right">
                    West
                  </span>{" "}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[14px] font-lexend">
                  Quotation In The :
                  <span className="text-16 px-4 font-lexend text-right">
                    Sujal Patil
                  </span>{" "}
                </p>
                <p className="text-[14px] font-lexend ">
                  Address :
                  <span className="text-16 px-4 font-lexend text-right">
                    Plot no 61 Near TVS Showroom Bajaj Nagar Nagpur
                  </span>{" "}
                </p>
                <p className="text-[14px] font-lexend">
                  Total Number Of MIS In Y :
                  <span className="text-16 px-4 font-lexend text-right">
                    5000
                  </span>{" "}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[14px] font-lexend">
                  Total Beds :
                  <span className="text-16 px-4 font-lexend text-right">
                    450
                  </span>
                </p>
                <p className="text-[14px] font-lexend">
                  Total ICU :
                  <span className="text-16 px-4 font-lexend text-right">
                    50
                  </span>
                </p>
                <p className="text-[14px] font-lexend">
                  Total Operation Theater :
                  <span className="text-16 px-4 font-lexend text-right">
                    15
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Second Section */}

          <div className="bg-[#FFFFFF] p-4  ">
            <div className="flex space-x-8 ">
              <h2 className="text-16 font-lexend text-[#000000B8] tracking-tighter">
                Organization Name <br />
                <span className="text-[14px] font-lexend">
                  (Workplace Name 2)
                </span>
              </h2>
              <h4 className="w-[400px] mx-auto text-gray-600 font-lexend   border-2 border-gray-300 shadow-[#00000040] px-5 py-2">
                Shukhkarta Hospital
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 space-x-3 space-y-2">
              <div className="space-y-2">
                <p className="text-[14px] font-lexend">
                  State:
                  <span className="text-16 font-lexend px-4">Maharashtra</span>
                </p>
                <p className="text-[14px] font-lexend">
                  District:
                  <span className="text-16 px-4 font-lexend"> Nagpur</span>
                </p>
                <p className="text-[14px] font-lexend">
                  Pin Code:
                  <span className="text-16 px-4 font-lexend">440034</span>{" "}
                </p>
                <p className="text-[14px] font-lexend">
                  Region: <span className="text-16 px-4 font-lexend">West</span>{" "}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[14px] font-lexend">
                  Address:
                  <span className="text-16 px-4 font-lexend">
                    Plot no 61 Near TVS Showroom Bajaj Nagar Nagpur
                  </span>{" "}
                </p>
                <p className="text-[14px] font-lexend">
                  Total Number Of MIS In Year:
                  <span className="text-16 px-4 font-lexend">5000</span>{" "}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[14px] font-lexend">
                  Total Beds:
                  <span className="text-16 px-4 ">20</span>
                </p>
                <p className="text-[14px] font-lexend">
                  Total ICU: <span className="text-16 px-4 ">08</span>
                </p>
                <p className="text-[14px] font-lexend">
                  Total Operation Theater:
                  <span className="text-16 px-4 font-lexend">02</span>
                </p>
              </div>
            </div>
          </div>

          {/* Third Section */}

          <div className="gap-4">
            <div className="bg-white p-4 text-center">
              <p className="text-sm text-gray-600">HOD Department</p>

              <div className="text-center">
                <h6 className="text-gray-900 font-semibold">
                  HOD GS / Dr Vikas Mahatme
                </h6>
                <p className="text-green-500 font-semibold text-right mr-6">
                  DECISION MAKER
                </p>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-left text-[14px] text-[#000000]">
                    Designation:
                    <span className="text-16 px-4 font-lexend">
                      Hod final year
                    </span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Date Of Birth:{" "}
                    <span className="text-16 px-4 font-lexend">06-11-1998</span>{" "}
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Anniversary:{" "}
                    <span className="text-16 px-4 font-lexend">06-11-2020</span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Contact Number:{" "}
                    <span className="text-16 px-4 font-lexend">
                      +91 9928446110
                    </span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Alternate Number:{" "}
                    <span className="text-16 px-4 font-lexend">
                      +91 7855339442
                    </span>
                  </p>

                  <p className="text-left text-[14px] text-[#000000]">
                    Address:
                    <span className="text-16 px-4 font-lexend">
                      {" "}
                      Plot no 61 Near TVS Showroom Bajaj Nagar Nagpur
                    </span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Official Email:{" "}
                    <span className="text-16 px-4 font-lexend">
                      vikasmahatme@gmail.com
                    </span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Pin Code:
                    <span className="text-16 px-4 font-lexend"> 440034</span>
                  </p>

                  <p className="text-left text-[14px] text-[#000000]">
                    Category:{" "}
                    <span className="text-16 px-4 font-lexend">Surgeon</span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Landmark:{" "}
                    <span className="text-16 px-4 font-lexend">
                      Near water tank
                    </span>
                  </p>

                  <p className="text-left text-[14px] text-[#000000]">
                    Type of Surgery Performed:
                    <span className="text-16 px-4 font-lexend">
                      {" "}
                      Open Heart Surgery
                    </span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Specialty:{" "}
                    <span className="text-16 px-4 font-lexend">Cardiology</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Fourth Section */}
            <div className="bg-white p-4 text-center">
              <p className="text-sm text-gray-600">HOD Department</p>
              <div className="text-center">
                <h6 className="text-gray-900 font-semibold">
                  HOD GS / Dr Vikas Mahatme
                </h6>
                <p className="text-green-500 font-semibold text-right mr-6">
                  DECISION MAKER
                </p>
              </div>
              <div className="mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-left text-[14px] text-[#000000]">
                    Designation:{" "}
                    <span className="text-16 px-4 font-lexend">
                      HOD third year
                    </span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Date Of Birth:{" "}
                    <span className="text-16 px-4 font-lexend">06-11-1998</span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Anniversary:{" "}
                    <span className="text-16 px-4 font-lexend">06-11-2020</span>
                  </p>
                  <p className="text-left text-[14px] text-[#000000]">
                    Contact Number:{" "}
                    <span className="text-16 px-4 font-lexend">
                      +91 9928446110
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
