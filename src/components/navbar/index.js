"use client";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "../Icon";

// ------------------------------------------------

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-primaryColor text-white border-b-thirdColor border-b">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <Link className="w-fit" href={"/"}>
                                <h1 className="text-2xl font-bold text-thirdColor" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    MindTrack
                                </h1>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:space-x-6 lg:space-x-8">
                            <Link href="/" className="hover:text-secondaryColor hover:underline font-semibold transition duration-300">
                                Home
                            </Link>
                            <Link href="/todo" className="hover:text-secondaryColor hover:underline font-semibold transition duration-300">
                                Todo
                            </Link>
                            <Link href="/diary" className="hover:text-secondaryColor hover:underline font-semibold transition duration-300">
                                Diary
                            </Link>
                            <Link href="/about" className="hover:text-secondaryColor hover:underline font-semibold transition duration-300">
                                About
                            </Link>
                            <Link href="/contact-us" className="hover:text-secondaryColor hover:underline font-semibold transition duration-300">
                                ContactUs
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <Link href={"/login"} className="w-fit">
                                <button className="px-5 py-2 bg-transparent border-2 border-thirdColor text-thirdColor rounded hover:bg-thirdColor hover:text-primaryColor transition duration-300">
                                    Login
                                </button>
                            </Link>
                            <Link href={"/signup"} className="w-fit">
                                <button className="px-5 py-2 bg-thirdColor text-primaryColor rounded hover:bg-secondaryColor hover:text-white transition duration-300">
                                    Sign Up
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Hamburger Icon */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-2xl focus:outline-none text-thirdColor"
                            >
                                <Icon icon={"mdi:menu"} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-primaryColor">
                        <div className="space-y-2 pt-4 pb-8 px-8">
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/" className="block hover:text-secondaryColor font-semibold transition duration-300">
                                Home
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/todo" className="block hover:text-secondaryColor font-semibold transition duration-300">
                                Todo
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/diary" className="block hover:text-secondaryColor font-semibold transition duration-300">
                                Diary
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/about" className="block hover:text-secondaryColor font-semibold transition duration-300">
                                About
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href="/contact-us" className="block hover:text-secondaryColor font-semibold transition duration-300">
                                ContactUs
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href={"/login"} className="w-fit">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block w-full text-left px-4 py-2 mt-2 border-2 border-thirdColor text-thirdColor rounded hover:bg-thirdColor hover:text-primaryColor transition duration-300">
                                    Login
                                </button>
                            </Link>
                            <Link onClick={() => setIsMenuOpen(!isMenuOpen)} href={"/signup"} className="w-fit ">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block w-full mt-2 text-left px-4 py-2 bg-thirdColor text-primaryColor rounded hover:bg-secondaryColor hover:text-white transition duration-300">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
