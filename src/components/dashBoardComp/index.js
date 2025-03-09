"use client"
import React, { useState } from 'react'
import Icon from '../Icon';

const DashBoardComp = () => {
    const [active, setActive] = useState("task");
    const [sortOrder, setSortOrder] = useState("newest");
    return (
        <>
            <div className='w-full flex justify-center items-center min-h-screen'>
                <div className=' flex justify-center flex-col items-center max-w-[1000px] gap-y-16 w-full py-10'>
                    <h1 className='text-5xl font-semibold'>Welcome To MindTrack!</h1>
                    <div className='w-full gap-y-8 flex flex-col justify-center items-start'>
                        <div className="relative flex bg-primaryColor rounded-full p-1 w-36 shadow-md">
                            <div
                                className={`absolute left-0 w-1/2 h-full bg-thirdColor rounded-full transition-all duration-300 ease-in-out top-0 ${active === "task" ? "translate-x-0" : "translate-x-full"
                                    }`}
                            ></div>
                            <button
                                className={`relative flex justify-center items-center
                                     w-1/2 text-center font-semibold z-10 py-1 rounded-full transition-colors duration-300 ${active === "task" ? "text-white" : "text-gray-600"
                                    }`}
                                onClick={() => setActive("task")}
                            >
                                <Icon icon={"iconoir:task-list"} height={30} width={30} className={"text-white font-bold"} />
                            </button>
                            <button
                                className={`relative flex justify-center items-center
                                     w-1/2 text-center font-semibold z-10 py-1 rounded-full transition-colors duration-300 ${active === "diary" ? "text-white" : "text-gray-600"
                                    }`}
                                onClick={() => setActive("diary")}
                            >
                                <Icon icon={"mdi:diary"} height={30} width={30} className={"text-white font-bold"} />
                            </button>
                        </div>
                        <div className="p-6 w-full bg-white rounded-xl shadow-lg">
                            {/* Heading  */}
                            <div className="w-full flex gap-x-4">
                                <input
                                    type="text"
                                    placeholder="Title here"
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                                />
                                <button className="flex justify-center items-center gap-x-2 bg-primaryColor text-white py-2 px-4 rounded-xl text-lg">
                                    <Icon width={30} height={30} icon="material-symbols:add-rounded" />
                                    Add
                                </button>
                            </div>

                            <hr className="mt-8 border-gray-200" />

                            {/* Tasks  */}
                            <div className="py-2 pt-4">
                                <div className="flex items-center gap-x-4 p-2 ">
                                    <input type="checkbox" className="w-10 h-10 accent-primaryColor" />
                                    <input
                                        type="text"
                                        placeholder="Enter task..."
                                        className="w-full border-b border-gray-400 focus:outline-none py-1 px-2"
                                    />
                                    <input
                                        type="datetime-local"
                                        className="border border-gray-300 px-2 py-1 rounded-md text-sm"
                                    />
                                    <select className="border border-gray-300 px-2 py-1 rounded-md text-sm">
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                    <button className="text-red-500">
                                        <Icon width={24} height={24} icon="material-symbols:delete-outline" />
                                    </button>
                                </div>
                                <div className='pl-2 text-gray-500'>
                                    + Add More 
                                </div>
                            </div>

                            {/* Tools  */}
                            <div className="w-full flex justify-end items-center gap-x-6 pt-8">
                                <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg">
                                    Complete All
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                                    Delete Note
                                </button>

                                {/* Sort by Date & Time */}
                                <div className="flex items-center gap-x-2">
                                    <span className="text-gray-700">Sort by:</span>
                                    <select
                                        className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring"
                                        value={sortOrder}
                                        onChange={(e) => setSortOrder(e.target.value)}
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="oldest">Oldest First</option>
                                    </select>
                                </div>

                                <button className='px-4 py-2 bg-primaryColor rounded-xl text-white'>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoardComp
