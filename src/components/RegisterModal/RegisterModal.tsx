"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TInputsRegister } from "@/types";
import { useRegisterMutation } from "@/redux/api/baseApi";

const RegisterModal = ({
  onClose,
  onSwitch,
}: {
  onClose: () => void;
  onSwitch: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TInputsRegister>();

  const [registerUser, { isSuccess }] = useRegisterMutation();

  const onSubmit: SubmitHandler<TInputsRegister> = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await registerUser(data).unwrap();
      console.log("Registration response:", response);

      reset();
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error: any) {
      console.error("Registration failed:", error);
      setGeneralError(error.data?.message || "Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
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

        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        {generalError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {generalError}
          </div>
        )}
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Registration successful! Please log in.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Full Name</label>
            <input
              {...register("fullName", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#FF6A1A]"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#FF6A1A]"
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
                className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-[#FF6A1A]"
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

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#FF6A1A] text-white py-3 rounded-md transition ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-orange-600"
            }`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">Or Sign Up with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex gap-4">
          <button
            disabled={isSubmitting}
            className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2 text-lg" /> Google
          </button>
          <button
            disabled={isSubmitting}
            className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100"
          >
            <FaFacebookF className="mr-2 bg-blue-600 p-0.5 rounded-full text-white text-lg" />{" "}
            Facebook
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={onSwitch}
            disabled={isSubmitting}
            className="text-[#FF6A1A] font-medium"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
