"use client"
import React, { useState } from 'react'

// -----------------------------------------

const ResetPassComp = () => {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSavePassword = () => {
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setError("");
        console.log("New password saved:", newPassword);
    };

    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-gray-300 px-6 py-12">
                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg transform transition-all hover:scale-[1.02]">
                    <div className="text-center w-full flex justify-center flex-col items-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Reset Password</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Enter your new password and confirm it below.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                placeholder="Enter new password"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                placeholder="Confirm new password"
                            />
                        </div>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <div>
                            <button
                                type="button"
                                onClick={handleSavePassword}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save New Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPassComp
