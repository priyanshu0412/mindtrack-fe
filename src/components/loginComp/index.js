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

const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const loginValidationSchema = signUpValidationSchema.pick(["email", "password"]);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_BE_URL}/auth/login`,
                    values,
                    { withCredentials: true }
                );
                dispatch(setAuthUser({
                    userName: response?.data?.data?.user?.userName,
                    email: response?.data?.data?.user?.email,
                    isVerified: true,
                    _id: response?.data?.data?.user?._id,
                    token: response?.data?.data?.token
                }));
                Swal.fire({
                    title: "Login Successfully",
                    text: response.data.message,
                    icon: "success",
                    confirmButtonText: "OK",
                });
                router.push("/todo");
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
                        <Image width={50} height={50} alt="Logo" className="!w-full !h-full" src={Logo} />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-thirdColor">
                        Welcome Back!
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Please login to your account
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondaryColor">
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
                        <label htmlFor="password" className="block text-sm font-medium text-secondaryColor">
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
                    <Link href={"/forgot-password"} className="w-fit" >
                        <p className="mt-4">
                            Forgot Password ?
                        </p>
                    </Link>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full justify-center rounded-md bg-thirdColor px-4 py-2 text-sm font-semibold text-primaryColor shadow-md hover:bg-secondaryColor hover:text-white transition duration-300 focus:ring-2 focus:ring-thirdColor focus:ring-offset-2"
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-center text-sm text-gray-700">
                    Don&apos;t have an account?
                    <Link href="/signup" className="font-medium pl-2 text-thirdColor hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
