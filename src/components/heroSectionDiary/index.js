"use client"
import Link from 'next/link'
import React from 'react'

// ------------------------------------

const HeroSectionDiary = () => {
    return (
        <>
            <section className="bg-white text-primaryColor py-20">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-thirdColor mb-6">
                        Keep Your Thoughts Organized with MindTrack Diary
                    </h1>
                    <p className="text-xl text-secondaryColor mb-8">
                        Capture your daily reflections, thoughts, and ideas in a secure, easy-to-use diary. Your personal journey, always with you.
                    </p>

                    {/* Cards for Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Express Your Thoughts Card */}
                        <div className="bg-primaryColor text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-2xl font-semibold text-thirdColor mb-4">Express Your Thoughts</h3>
                            <p className='text-justify'>
                                Write down anything that matters to you. Capture your emotions, ideas, and experiences in a secure space.
                            </p>
                        </div>

                        {/* Track Your Journey Card */}
                        <div className="bg-primaryColor text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-2xl font-semibold text-thirdColor mb-4">Track Your Journey</h3>
                            <p className='text-justify'>
                                Keep a record of your growth, learn from past experiences, and reflect on your journey with ease.
                            </p>
                        </div>

                        {/* Safe & Secure Card */}
                        <div className="bg-primaryColor text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-2xl font-semibold text-thirdColor mb-4">Safe & Secure</h3>
                            <p className='text-justify'>
                                Your personal diary entries are protected and encrypted, giving you peace of mind as you write.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <Link href="/diary">
                        <button className="mt-8 px-8 py-3 bg-thirdColor text-primaryColor font-semibold rounded hover:bg-secondaryColor transition duration-300">
                            Start Writing
                        </button>
                    </Link>

                    {/* Optional Footer or Extra Information */}
                    <div className="mt-10">
                        <p className="text-secondaryColor text-lg lg:text-center text-justify">
                            With MindTrack Diary, you&apos;re free to express yourself, track your growth, and keep your memories safe for years to come.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSectionDiary
