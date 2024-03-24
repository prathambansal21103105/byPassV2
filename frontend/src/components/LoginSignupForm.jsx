import React, { useState } from "react";

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="p-8 bg-white rounded shadow-md">
        {/* Toggle container */}
        <div className="flex items-center justify-center mb-4">
          <span
            className={`text-sm font-semibold ${
              isLogin ? "text-gray-400" : "text-blue-500"
            }`}
          >
            Signup
          </span>
          <div
            className="w-14 h-8 bg-gray-200 rounded-full p-1 mx-2 cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {/* Slider */}
            <div
              className={`w-6 h-6 bg-blue-500 rounded-full shadow-md transform duration-300 ease-in-out ${
                isLogin ? "translate-x-0" : "translate-x-6"
              }`}
            ></div>
          </div>
          <span
            className={`text-sm font-semibold ${
              isLogin ? "text-blue-500" : "text-gray-400"
            }`}
          >
            Login
          </span>
        </div>

        {/* Form content */}
        {isLogin ? (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Login Form</h2>
            {/* Login form inputs and submission button */}
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Signup Form</h2>
            {/* Signup form inputs and submission button */}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupForm;
