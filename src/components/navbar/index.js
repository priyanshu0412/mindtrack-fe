"use client"
import Link from 'next/link'
import React from 'react'

// ------------------------------------------

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-gray-300 text-black h-20 flex items-center justify-evenly '>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/login"}>
                    Login
                </Link>
                <Link href={"/signup"}>
                    Signup
                </Link>
                <Link href={"/reset-password"}>
                    Reset Password
                </Link>
                <Link href={"/verifyOtp"}>
                    Verify OTP
                </Link>
            </div>
        </>
    )
}

export default Navbar
