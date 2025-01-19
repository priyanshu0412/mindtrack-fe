import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

// ---------------------------------

const NotFoundPage = () => {
    return (
        <>
            <section className="bg-primaryColor text-white h-screen flex items-center justify-center">
                <div className="text-center px-8 sm:px-12 md:px-16">
                    <div className="mb-6">
                        <Icon icon={"mdi:alert-circle-outline"} className="text-6xl sm:text-7xl mx-auto mb-4" />
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-xl sm:text-2xl mb-8">
                        The page you are looking for might have been removed or never existed.
                    </p>
                    <Link href={"/"} className="inline-block px-8 py-3 bg-thirdColor text-primaryColor font-semibold rounded-lg hover:bg-secondaryColor hover:text-white transition duration-300">
                        Go Back to Home
                    </Link>
                </div>
            </section>
        </>
    )
}

export default NotFoundPage
