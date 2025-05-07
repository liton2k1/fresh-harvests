"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useLoginMutation } from "@/redux/api/baseApi";
import { TInputsLogin } from "@/types";

const LoginModal = ({
  onClose,
  onSwitch,
}: {
  onClose: () => void;
  onSwitch: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const [generalError, setGeneralError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputsLogin>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<TInputsLogin> = async (data) => {
    setGeneralError("");

    try {
      const response = await login({
        email: data.email,
        password: data.password,
        remember: data.rememberMe,
      }).unwrap();

      console.log("Login successful", response);
      onClose();
    } catch (error: any) {
      console.error("Login failed", error);
      setGeneralError(error.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-md relative mx-3">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <RxCross2 size={20} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {generalError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {generalError}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className={`w-full mt-1 p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md outline-none focus:ring-2 focus:ring-[#FF6A1A]`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full mt-1 p-3 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md outline-none focus:ring-2 focus:ring-[#FF6A1A]`}
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
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                {...register("rememberMe")}
                type="checkbox"
                className="w-4 h-4 accent-[#FF6A1A] rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-gray-600 hover:underline">
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FF6A1A] text-white py-3 rounded-md hover:bg-orange-600 transition flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">Or Sign in with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2 text-lg" /> Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100"
          >
            <FaFacebookF className="mr-2 bg-blue-600 p-0.5 rounded-full text-white text-lg" />{" "}
            Facebook
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={onSwitch}
            className="text-[#FF6A1A] font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
