"use client"
import React from 'react'
import Icon from '../Icon'
import Link from 'next/link'

// --------------------------------------

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-primaryColor text-white py-6">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                    {/* Footer Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Left - Mindtrack */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h1 className="text-3xl font-bold text-thirdColor mb-4">
                                MindTrack
                            </h1>
                            <p className="text-center sm:text-left text-white">
                                Your one-stop solution to stay organized, track progress, and focus better.
                            </p>
                        </div>

                        {/* Middle - Links */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-xl font-semibold text-white mb-3">Links</h3>
                            <Link href="/" className="text-white hover:text-secondaryColor hover:underline mb-2">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:text-secondaryColor hover:underline mb-2">
                                About
                            </Link>
                            <Link href="/contact-us" className="text-white hover:text-secondaryColor hover:underline mb-2">
                                Contact
                            </Link>
                            <Link href="/todo" className="text-white hover:text-secondaryColor hover:underline mb-2">
                                Todo
                            </Link>
                            <Link href="/diary" className="text-white hover:text-secondaryColor hover:underline mb-2">
                                Diary
                            </Link>
                        </div>

                        {/* Right - Social Links */}
                        <div className="flex flex-col items-center sm:items-start">
                            <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
                            <div className="flex items-center mb-2 space-x-4">
                                <a href="#" className="text-white hover:text-secondaryColor">
                                    <Icon icon="mdi:facebook" width={24} height={24} />
                                    <span className="ml-2">Facebook</span>
                                </a>
                            </div>
                            <div className="flex items-center mb-2 space-x-4">
                                <a href="#" className="text-white hover:text-secondaryColor">
                                    <Icon icon="mdi:twitter" width={24} height={24} />
                                    <span className="ml-2">Twitter</span>
                                </a>
                            </div>
                            <div className="flex items-center mb-2 space-x-4">
                                <a href="#" className="text-white hover:text-secondaryColor">
                                    <Icon icon="mdi:linkedin" width={24} height={24} />
                                    <span className="ml-2">LinkedIn</span>
                                </a>
                            </div>
                            <div className="flex items-center mb-2 space-x-4">
                                <a href="#" className="text-white hover:text-secondaryColor">
                                    <Icon icon="mdi:instagram" width={24} height={24} />
                                    <span className="ml-2">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center mt-8">
                        <p className="text-sm text-white">
                            &copy; {currentYear} MindTrack. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
