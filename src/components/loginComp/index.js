"use client";
import { Logo } from "@/asset";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-primaryColor px-6 py-12">
                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg transform transition-all hover:scale-[1.02]">
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
                            Welcome Back!
                        </h2>
                        <p className="mt-2 text-sm text-gray-700">
                            Please login to your account
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
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
                                autoComplete="email"
                                required
                                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                                placeholder="name@example.com"
                            />
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
                                autoComplete="current-password"
                                required
                                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link
                                    href={"/forgot-password"}
                                    className="font-medium text-thirdColor hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-thirdColor px-4 py-2 text-sm font-semibold text-primaryColor shadow-md hover:bg-secondaryColor hover:text-white transition-all focus:ring-2 focus:ring-thirdColor focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Not a member?
                        <Link
                            href="/signup"
                            className="font-medium pl-2 text-thirdColor hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
