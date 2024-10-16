import { useState } from "react";
import { Link } from "react-router-dom";

const VerificationCode = () => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 md:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-full">
        {/* Left Section */}
        <div className="md:w-1/2 w-full bg-[#f4e7df] flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Enter Verification Code</h2>
          <p className="text-gray-900 mb-6 text-center">
            Your 6-digit code has been sent to
            <span className="font-bold"> pi****@gmail.com</span>. Check your email to continue.
          </p>
          <p className="text-black mb-4 text-center text-[20px]">
            Please enter the code you received.
          </p>

          <div className="flex space-x-4 justify-center mb-8">
            {code.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-10 h-10 border border-gray-300 text-center text-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#f1d9c9] placeholder:text-black"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                placeholder=""
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="w-32 py-2 bg-[#f1d9c9] hover:bg-[#f5ceb3] text-black rounded-full transition duration-200 mt-6 lg:mt-10"
              onClick={() => alert("Code Submitted")}
            >
              Continue
            </button>
          </div>

          <div className="mt-4">
            <Link to="/resend-code" className="text-black underline">
              Resend Code
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex md:w-1/2 bg-[#E9EBF7] px-8 py-20 items-center justify-center">
          <img
            src="/verification.png"
            alt="Verification"
            className="max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;

