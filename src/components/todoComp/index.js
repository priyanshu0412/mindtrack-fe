"use client"
import React, { useState } from 'react'
import Icon from '../Icon';

// --------------------------------

const TodoComponent = () => {

    const [active, setActive] = useState("task");
    const [sortOrder, setSortOrder] = useState("newest");
    const [tasks, setTasks] = useState([{ id: Date.now(), title: "", status: "Pending", dateTime: "" }]);

    // Add New Task
    const addTask = () => {
        setTasks([...tasks, { id: Date.now(), title: "", status: "Pending", dateTime: "" }]);
    };

    // Remove Task
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <>
            <div className='w-full flex justify-center items-center min-h-screen'>
                <div className='flex justify-center flex-col items-center max-w-[1000px] gap-y-16 w-full py-10'>
                    <h1 className='text-5xl font-semibold'>Todo - Welcome To MindTrack!</h1>
                    <div className='w-full gap-y-8 flex flex-col justify-center items-start'>
                        {/* Task Section */}
                        <div className="p-6 w-full bg-white rounded-xl shadow-lg">
                            <div className="w-full flex gap-x-4">
                                <input type="text" placeholder="Title here" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                            </div>

                            <hr className="mt-8 border-gray-200" />

                            {/* Task List */}
                            <div className="py-2 pt-4">
                                {tasks.map((task, index) => (
                                    <div key={task.id} className="flex items-center gap-x-4 p-2">
                                        <input type="checkbox" className="w-10 h-10 accent-primaryColor" />
                                        <input type="text" placeholder="Enter task..." className="w-full border-b border-gray-400 focus:outline-none py-1 px-2" />
                                        <input type="datetime-local" className="border border-gray-300 px-2 py-1 rounded-md text-sm" min={new Date().toISOString().slice(0, 16)} />
                                        <select className="border border-gray-300 px-2 py-1 rounded-md text-sm">
                                            <option value="pending">Pending</option>
                                            <option value="in-progress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>

                                        <button className="text-red-500" onClick={() => removeTask(task.id)}>
                                            <Icon width={24} height={24} icon="material-symbols:delete-outline" />
                                        </button>
                                    </div>
                                ))}
                                <div className='pl-2 text-gray-500 cursor-pointer' onClick={addTask}>
                                    + Add More
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="w-full flex justify-end items-center gap-x-6 pt-8">
                                <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg">Delete All Task</button>
                                <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg">Complete All</button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete Note</button>

                                {/* Sort by Date & Time */}
                                <div className="flex items-center gap-x-2">
                                    <span className="text-gray-700">Sort by:</span>
                                    <select className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                        <option value="newest">Newest First</option>
                                        <option value="oldest">Oldest First</option>
                                    </select>
                                </div>

                                <button className='px-4 py-2 bg-primaryColor rounded-xl text-white'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoComponent
