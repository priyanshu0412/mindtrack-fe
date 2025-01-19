import Link from 'next/link'
import React from 'react'

// --------------------------------

const HeroSectionTodo = () => {
    return (
        <>
            <section className="bg-primaryColor text-white py-20">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-thirdColor mb-6">
                        Stay Organized with MindTrack Todo List
                    </h1>
                    <p className="text-xl text-secondaryColor mb-8 text-justify lg:text-center">
                        Manage your tasks effortlessly with a simple, yet powerful to-do list. Stay on top of your goals, track progress, and never miss a deadline again.
                    </p>

                    {/* Cards for Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Organize Your Day Card */}
                        <div className="bg-secondaryColor text-primaryColor p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-2xl font-semibold text-white mb-4">Organize Your Day</h3>
                            <p className='text-justify'>
                                Prioritize tasks and create a clear roadmap for your day. With MindTrack&apos;s Todo List, you can break your goals into actionable steps.
                            </p>
                        </div>

                        {/* Track Your Progress Card */}
                        <div className="bg-secondaryColor text-primaryColor p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-2xl font-semibold text-white mb-4">Track Your Progress</h3>
                            <p className='text-justify'>
                                Monitor your progress and stay motivated as you complete each task. MindTrack helps you see how much you&apos;ve achieved.
                            </p>
                        </div>

                        {/* Stay Focused Card */}
                        <div className="bg-secondaryColor text-primaryColor p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-2xl font-semibold text-white mb-4">Stay Focused</h3>
                            <p className='text-justify'>
                                Reduce distractions by having everything you need to do in one place. Stay focused and efficient with your daily tasks.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <Link href="/todo">
                        <button className="mt-8 px-8 py-3 bg-thirdColor text-black font-semibold rounded hover:bg-white transition duration-300">
                            Start Organizing
                        </button>
                    </Link>

                    {/* Optional Footer or Extra Information */}
                    <div className="mt-10">
                        <p className="text-secondaryColor text-lg text-justify">
                            With MindTrack, your to-do list becomes more than just a list. It&apos;s a way to track your personal growth and accomplish more every day.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSectionTodo
