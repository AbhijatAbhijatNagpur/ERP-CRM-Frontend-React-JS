import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 md:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-full">
        {/* Left Section */}
        <div className="md:w-1/2 w-full bg-[#f4e7df] flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-center mb-4">Reset Password</h2>
            <p className="text-center text-[#000000] mb-6 text-[16px] font-semibold">
              Enter your new password below,
              <br />
              and you're all set to go!
            </p>

            <form>
              <div className="mb-6">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none bg-[#f1d9c9] placeholder:text-black text-center"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your new password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none bg-[#f1d9c9] placeholder:text-black text-center"
                />
              </div>

              <div className="flex justify-center">
                <Link to="/verifyCode" className="w-auto">
                  <button
                    type="submit"
                    className="py-2 px-6 lg:px-7 rounded-full text-gray-700 bg-[#f1d9c9] hover:bg-[#f5ceb3] mt-6 lg:mt-10 font-roboto"
                  >
                    Continue
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex md:w-1/2 bg-[#E9EBF7] px-8 py-20 items-center justify-center">
          <img
            src="/passwordReset.png"
            alt="Password Reset"
            className="max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
