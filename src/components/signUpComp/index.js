"use client";
import { Logo } from "@/asset";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { signUpValidationSchema } from "@/validation/signUpValidation";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/authSlice";

// ----------------------------------------

const SignUp = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            userName: "",
        },
        validationSchema: signUpValidationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await axios.post(
                    "http://localhost:8080/auth/signup",
                    values,
                    { withCredentials: true }
                );
                dispatch(setAuthUser({
                    userName: response?.data?.data?.user?.userName,
                    email: response?.data?.data?.user?.email,
                    isVerified: response?.data?.data?.user?.isVerified,
                    _id: response?.data?.data?.user?._id,
                    token: response?.data?.data?.token
                }));
                console.log("res", response?.data?.data?.user?.email)
                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success",
                    confirmButtonText: "OK",
                });
                router.push("/verifyOtp");
            } catch (err) {
                Swal.fire({
                    title: "Error!",
                    text: err.response?.data?.message || "An error occurred",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-primaryColor px-6 py-12">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-center w-full flex justify-center flex-col items-center">
                    <div>
                        <Image
                            width={50}
                            height={50}
                            alt="Logo"
                            className="!w-full !h-full"
                            src={Logo}
                        />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-thirdColor">
                        Create Your Account!
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Sign up to join our community
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>

                    <div>
                        <label
                            htmlFor="userName"
                            className="block text-sm font-medium text-secondaryColor"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                            placeholder="Enter your username"
                        />
                        {formik.errors.userName && formik.touched.userName && (
                            <p className="text-red-500 pt-1">{formik.errors.userName}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-secondaryColor"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                            placeholder="name@example.com"
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-red-500 pt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-secondaryColor"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                            placeholder="••••••••"
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p className="text-red-500 pt-1">{formik.errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-secondaryColor"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                            placeholder="••••••••"
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                            <p className="text-red-500 pt-1">{formik.errors.confirmPassword}</p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-thirdColor px-4 py-2 text-sm font-semibold text-primaryColor shadow-md hover:bg-secondaryColor hover:text-white transition duration-300 focus:ring-2 focus:ring-thirdColor focus:ring-offset-2"
                        >
                            {loading ? "Loading..." : "Sign Up"}
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-700">
                    Already have an account?
                    <Link
                        href="/login"
                        className="font-medium pl-2 text-thirdColor hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
