"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { signUpValidationSchema } from "@/validation/signUpValidation";

const passwordValidationSchema = Yup.object({
    newPassword: signUpValidationSchema.fields.password,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const ResetPassComp = ({ token }) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSavePassword = async () => {
        try {
            await passwordValidationSchema.validate({ newPassword, confirmPassword }, { abortEarly: false });

            setError("");

            const response = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/auth/reset-password`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, newPassword }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            Swal.fire({
                icon: "success",
                title: "Password Updated",
                text: "Your password has been successfully reset!",
                confirmButtonColor: "#004250",
            }).then(() => {
                router.push("/login");
            });

        } catch (err) {
            if (err.inner) {
                setError(err.inner.map((e) => e.message).join(" "));
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: err.message,
                    confirmButtonColor: "#004250",
                });
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-primaryColor px-6 py-12">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg transform transition-all hover:scale-[1.02]">
                <div className="text-center w-full flex justify-center flex-col items-center">
                    <h2 className="text-3xl font-extrabold text-thirdColor">Reset Password</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Enter your new password and confirm it below.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-secondaryColor">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                            placeholder="Enter new password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondaryColor">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-thirdColor focus:border-thirdColor transition-all"
                            placeholder="Confirm new password"
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <div>
                        <button
                            type="button"
                            onClick={handleSavePassword}
                            className="flex w-full justify-center rounded-md bg-thirdColor px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-secondaryColor hover:text-white transition-all focus:ring-2 focus:ring-thirdColor focus:ring-offset-2"
                        >
                            Save New Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassComp;
