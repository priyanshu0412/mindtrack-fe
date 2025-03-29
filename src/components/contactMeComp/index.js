"use client";
import contactSchema from "@/validations/contactSchema";
import React, { useState } from "react";
import Swal from 'sweetalert2'

const ContactMe = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await contactSchema.validate(formData, { abortEarly: false });
            setLoading(true);

            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                    title: "Email Sent Successfully!",
                    text: "will reach out to you very soon.",
                    icon: "success",
                    confirmButtonText: "OK",
                });

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setErrors({});
            } else {
                Swal.fire({
                    title: "Email Not Sent",
                    text: "An error occurred while sending the mail.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            }
        } catch (validationErrors) {
            const errorMessages = {};
            validationErrors.inner.forEach((error) => {
                errorMessages[error.path] = error.message;
            });
            setErrors(errorMessages);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-primaryColor">
            <div className="w-full py-20 max-w-[1200px] px-8 gap-y-16 flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-y-4">
                    <p className="text-3xl font-bold tracking-wide  lg:text-5xl text-thirdColor">
                        Contact Me
                    </p>
                    <p className="text-white font-poppins text-justify">
                        Feel free to reach out for collaborations, project inquiries, or just to connect. I&apos;m always open to discussing new opportunities and ideas.
                    </p>
                </div>
                <form
                    className="flex flex-col items-center justify-center w-full gap-y-4 lg:gap-y-10"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col justify-center w-full lg:flex-row gap-x-8 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-2 w-full lg:w-[40%]">
                            <p className="text-white">First name</p>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white"
                            />
                            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                        </div>
                        <div className="flex flex-col gap-y-2 w-full lg:w-[40%]">
                            <p className="text-white">Last name</p>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white"
                            />
                            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full lg:flex-row gap-x-8 gap-y-4 lg:gap-y-0">
                        <div className="flex flex-col gap-y-2 w-full lg:w-[40%]">
                            <p className="text-white">Email</p>
                            <input
                                type="text"
                                name="email"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white"
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div className="flex flex-col gap-y-2 w-full lg:w-[40%]">
                            <p className="text-white">Phone</p>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white"
                            />
                            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center w-full gap-x-8">
                        <div className="flex flex-col gap-y-2 w-full lg:w-[83%]">
                            <p className="text-white">Message</p>
                            <textarea
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message ..."
                                className="bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-4 rounded-lg w-full text-white"
                            />
                            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                        </div>
                    </div>
                    <div className="pt-10 w-fit lg:pt-0">
                        <button
                            type="submit"
                            className="text-[#000] bg-[#b2b3b3] px-6 py-4 rounded-full hover:bg-[#ffffffc0]"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
