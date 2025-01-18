"use client"
import Link from 'next/link'
import React from 'react'

// ------------------------------------------

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-black text-white h-20 flex items-center justify-evenly'>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/login"}>
                    Login
                </Link>
                <Link href={"/signup"}>
                    Signup
                </Link>
            </div>
        </>
    )
}

export default Navbar
