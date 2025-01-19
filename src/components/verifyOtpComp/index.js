"use client";
import React, { useState, useEffect, useRef } from "react";

// ----------------------------------------

const VerifyOtpComp = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(60);
    const [resendDisabled, setResendDisabled] = useState(true);
    const [error, setError] = useState("");
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(interval);
        } else {
            setResendDisabled(false);
        }
    }, [timer]);

    const handleVerifyOTP = () => {
        if (otp.join("").length !== 6 || !/^\d{6}$/.test(otp.join(""))) {
            setError("Please enter a valid 6-digit OTP.");
            return;
        }

        setError("");
        // Logic to verify OTP
        console.log("OTP Verified:", otp.join(""));
    };

    const handleResendOTP = () => {
        setTimer(60);
        setResendDisabled(true);
        // Logic to resend OTP
        console.log("OTP Resent");
    };

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            otp[index] = value;
            setOtp([...otp]);
            if (index < 5) inputRefs.current[index + 1].focus(); // Move to next input
        } else {
            otp[index] = "";
            setOtp([...otp]);
        }
    };

    const handlePasteOtp = (e) => {
        const pastedValue = e.clipboardData.getData("text");
        if (/^\d{6}$/.test(pastedValue)) {
            setOtp(pastedValue.split(""));
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-300 px-6 py-12">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg transform transition-all hover:scale-[1.02]">
                <div className="text-center w-full flex justify-center flex-col items-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Verify OTP</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Enter the 6-digit OTP sent to your email.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value="user@example.com"
                            disabled
                            className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        />
                    </div>
                    <div className="mt-4 flex justify-between space-x-2">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleOtpChange(e, index)}
                                onPaste={handlePasteOtp}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className="w-12 h-12 text-center text-lg font-semibold rounded-md border border-gray-300 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        ))}
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <div>
                        <button
                            type="button"
                            onClick={handleVerifyOTP}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Verify OTP
                        </button>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <button
                            type="button"
                            onClick={handleResendOTP}
                            disabled={resendDisabled}
                            className={`font-medium ${resendDisabled
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-indigo-600 hover:underline"
                                }`}
                        >
                            Resend OTP
                        </button>
                        {resendDisabled && (
                            <p className="text-sm text-gray-500 mt-2">
                                Resend available in {timer} seconds
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtpComp;
