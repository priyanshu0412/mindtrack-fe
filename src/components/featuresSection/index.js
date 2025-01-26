"use client"
import React from 'react'
import Icon from '../Icon'

// --------------------------------

const FeaturesSection = () => {
    return (
        <>
            <section className="bg-thirdColor text-white py-20">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Explore the Features of MindTrack
                    </h2>
                    <p className="text-xl mb-10">
                        MindTrack offers powerful tools to stay organized, reflect, and track your progress with ease.
                    </p>

                    {/* Features Cards */}
                    <div className="flex justify-center items-center gap-16 flex-wrap">
                        {/* Authentication Feature */}
                        <div className="bg-white w-[18rem] h-[15rem] flex justify-center items-center flex-col text-justify text-primaryColor p-6 rounded-lg shadow-lg hover:bg-primaryColor cursor-pointer hover:duration-500 duration-500 hover:text-white transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="text-4xl mb-4">
                                <Icon icon={"mdi:account-lock"} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Authentication</h3>
                            <p>
                                Secure login and signup features that protect your personal data while keeping it easy to access.
                            </p>
                        </div>

                        {/* Todo List Feature */}
                        <div className="bg-white w-[18rem] h-[15rem] flex justify-center items-center flex-col text-justify text-primaryColor p-6 rounded-lg shadow-lg hover:bg-primaryColor cursor-pointer hover:duration-500 duration-500 hover:text-white transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="text-4xl mb-4">
                                <Icon icon={"mdi:check-circle-outline"} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Todo List</h3>
                            <p>
                                Organize your tasks with an intuitive and interactive to-do list. Prioritize and stay productive every day.
                            </p>
                        </div>

                        {/* Diary Feature */}
                        <div className="bg-white w-[18rem] h-[15rem] flex justify-center items-center flex-col text-justify text-primaryColor p-6 rounded-lg shadow-lg hover:bg-primaryColor cursor-pointer hover:duration-500 duration-500 hover:text-white transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="text-4xl mb-4">
                                <Icon icon={"mdi:book-open-page-variant"} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Diary</h3>
                            <p>
                                Write your thoughts and reflections in a secure and private diary to track your emotional growth.
                            </p>
                        </div>

                        {/* Analytics Feature */}
                        <div className="bg-white w-[18rem] h-[15rem] flex justify-center items-center flex-col text-justify text-primaryColor p-6 rounded-lg shadow-lg hover:bg-primaryColor cursor-pointer hover:duration-500 duration-500 hover:text-white transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="text-4xl mb-4">
                                <Icon icon={"mdi:chart-line"} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Analytics</h3>
                            <p>
                                Visualize your progress and performance over time with insightful charts and graphs.
                            </p>
                        </div>

                        {/* Notes Feature */}
                        <div className="bg-white w-[18rem] h-[15rem] flex justify-center items-center flex-col text-justify text-primaryColor p-6 rounded-lg shadow-lg hover:bg-primaryColor cursor-pointer hover:duration-500 duration-500 hover:text-white transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="text-4xl mb-4">
                                <Icon icon={"mdi:note"} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Notes</h3>
                            <p>
                                Quickly jot down ideas, reminders, or anything you need to remember, all in one convenient space.
                            </p>
                        </div>

                        {/* Settings Feature */}
                        <div className="bg-white w-[18rem] h-[15rem] flex justify-center items-center flex-col text-justify text-primaryColor p-6 rounded-lg shadow-lg hover:bg-primaryColor cursor-pointer hover:duration-500 duration-500 hover:text-white transition-transform transform hover:scale-105 hover:shadow-xl">
                            <div className="text-4xl mb-4">
                                <Icon icon={"mdi:settings"} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Settings</h3>
                            <p>
                                Personalize your experience with customizable settings and preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturesSection
