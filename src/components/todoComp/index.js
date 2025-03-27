"use client";

import React, { useState } from "react";
import Icon from "../Icon";
import { useSelector } from "react-redux";

// ----------------------------------------

const TodoComponent = () => {
    const user = useSelector((state) => state.auth.user);
    const token = user?.token;

    const [heading, setHeading] = useState("");
    const [tasks, setTasks] = useState([
        { id: Date.now(), title: "", status: "pending", dateTime: "" }
    ]);

    // Add New Task Field
    const addTask = () => {
        setTasks([...tasks, { id: Date.now(), title: "", status: "pending", dateTime: "" }]);
    };

    // Remove Task Field
    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Handle Input Change
    const handleTaskChange = (id, field, value) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, [field]: value } : task)));
    };

    // Save To-Do (API Call)
    const saveTodo = async () => {
        const payload = {
            heading,
            tasks: tasks.map(({ id, dateTime, ...rest }) => ({
                ...rest,
                dueDate: dateTime,
            })),
        };

        try {
            const response = await fetch("http://localhost:8080/api/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.status === 200) {
                alert("To-Do saved successfully!");
            } else {
                alert(data.error || "Failed to save To-Do.");
            }
        } catch (error) {
            console.error("Error saving To-Do:", error);
        }

        setTasks([{ id: "", title: "", status: "pending", dateTime: "" }]);
        setHeading("");
    };

    return (
        <div className="w-full flex justify-center items-center min-h-screen">
            <div className="flex justify-center flex-col items-center max-w-[1000px] gap-y-16 w-full py-10">
                <h1 className="text-5xl font-semibold">Todo - Welcome To MindTrack!</h1>
                <div className="w-full gap-y-8 flex flex-col justify-center items-start">
                    <div className="p-6 w-full bg-white rounded-xl shadow-lg">
                        <div className="w-full flex gap-x-4">
                            <input
                                type="text"
                                value={heading}
                                onChange={(e) => setHeading(e.target.value)}
                                placeholder="Title here"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <hr className="mt-8 border-gray-200" />

                        <div className="py-2 pt-4">
                            {tasks.map((task) => (
                                <div key={task.id} className="flex items-center gap-x-4 p-2">
                                    <input type="checkbox" className="w-10 h-10 accent-primaryColor" />
                                    <input
                                        type="text"
                                        value={task.title}
                                        onChange={(e) => handleTaskChange(task.id, "title", e.target.value)}
                                        placeholder="Enter task..."
                                        className="w-full border-b border-gray-400 focus:outline-none py-1 px-2"
                                    />
                                    <input
                                        type="datetime-local"
                                        value={task.dateTime}
                                        onChange={(e) => handleTaskChange(task.id, "dateTime", e.target.value)}
                                        className="border border-gray-300 px-2 py-1 rounded-md text-sm"
                                    />
                                    <select
                                        value={task.status}
                                        onChange={(e) => handleTaskChange(task.id, "status", e.target.value)}
                                        className="border border-gray-300 px-2 py-1 rounded-md text-sm"
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="in-progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                    <button className="text-red-500" onClick={() => removeTask(task.id)}>
                                        <Icon width={24} height={24} icon="material-symbols:delete-outline" />
                                    </button>
                                </div>
                            ))}
                            <div className="pl-2 text-gray-500 cursor-pointer" onClick={addTask}>
                                + Add More
                            </div>
                        </div>

                        <div className="w-full flex justify-end items-center gap-x-6 pt-8">
                            <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg">
                                Delete All Task
                            </button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg">
                                Complete All
                            </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                                Delete Note
                            </button>
                            <button onClick={saveTodo} className="px-4 py-2 bg-primaryColor rounded-xl text-white">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoComponent;
