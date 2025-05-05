"use client";

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function RegisterModal({
  onClose,
  onSwitch,
}: {
  onClose: () => void;
  onSwitch: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <RxCross2 size={20} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">
            Register
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">Or Sign Up with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <FcGoogle className="mr-2 text-lg" /> Google
          </button>
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <FaFacebookF className="mr-2 text-blue-600 text-lg" /> Facebook
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button onClick={onSwitch} className="text-orange-500 font-medium">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
