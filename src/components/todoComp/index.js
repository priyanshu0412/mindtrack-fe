"use client";

import React, { useState, useEffect } from "react";
import Icon from "../Icon";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { v4 as uuidv4 } from 'uuid';

const TodoComponent = () => {
    const user = useSelector((state) => state.auth.user);
    const token = user?.token;

    const [heading, setHeading] = useState("");
    const [tasks, setTasks] = useState([
        { id: uuidv4(), title: "", status: "pending", dateTime: "" }
    ]);

    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/todo", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error("Error fetching To-Dos:", error);
        }
    };

    const addTask = () => {
        setTasks([...tasks, { id: uuidv4(), title: "", status: "pending", dateTime: "" }]);
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }).replace(",", " -");
    };

    const viewTodo = (todo) => {
        withReactContent(Swal).fire({
            title: `<strong>${todo.heading}</strong>`,
            html: `
                <ul style="text-align: left; padding: 0; list-style: none;">
                    ${todo.tasks.map(task => `
                        <li style="margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">
                            <strong>Task:</strong> ${task.title} <br/>
                            <strong>Status:</strong> ${task.status} <br/>
                            <strong>Due Date:</strong> ${task.dueDate ? formatDate(task.dueDate) : "Not Set"}
                        </li>
                    `).join('')}
                </ul>
            `,
            icon: "info",
            confirmButtonText: "OK",
        });
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleTaskChange = (id, field, value) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, [field]: value } : task)));
    };

    const saveTodo = async () => {
        const payload = {
            heading,
            tasks: tasks.map(({ id, dateTime, ...rest }) => ({
                ...rest,
                dueDate: dateTime,
            })),
        };

        try {
            const url = editId ? `http://localhost:8080/api/todo/${editId}` : "http://localhost:8080/api/todo";
            const method = editId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (response.status === 200) {
                alert("To-Do saved successfully!");
                fetchTodos();
                setEditId(null);
            } else if (response.status === 401) {
                alert("Session expired. Please login again.");
                window.location.href = "/login";
            }
        } catch (error) {
            console.error("Error saving To-Do:", error);
        }

        setTasks([{ id: uuidv4(), title: "", status: "pending", dateTime: "" }]);
        setHeading("");
    };

    const deleteTodo = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This task will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch(`http://localhost:8080/api/todo/${id}`, {
                        method: "DELETE",
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    fetchTodos();
                    Swal.fire("Deleted!", "Your task has been deleted.", "success");
                } catch (error) {
                    console.error("Error deleting To-Do:", error);
                }
            }
        });
    };

    const editTodo = (todo) => {
        console.log("Editing Todo:", todo); // Debugging
        setEditId(todo._id);
        setHeading(todo.heading);

        const updatedTasks = todo.tasks.map(task => {
            console.log("Task Before Formatting:", task); // Debugging

            // Ensure dueDate exists and is valid
            let formattedDate = "";
            if (task.dueDate) {
                const dateObj = new Date(task.dueDate);
                if (!isNaN(dateObj.getTime())) {
                    formattedDate = dateObj.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
                }
            }

            return {
                id: uuidv4(),
                title: task.title || "",
                status: task.status || "pending", // Ensuring status is always set
                dateTime: formattedDate, // Properly formatted date
            };
        });

        console.log("Updated Tasks:", updatedTasks); // Debugging
        setTasks(updatedTasks);
    };




    const handleCheckboxChange = (taskId) => {
        setTasks(tasks.map((task) =>
            task.id === taskId
                ? { ...task, status: task.status === "completed" ? "pending" : "completed" }
                : task
        ));
    };

    const getTaskStyle = (status) => {
        return status === "completed" ? "line-through text-gray-500" : "";
    };

    const handleDeleteAll = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to delete all tasks?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete all!"
        }).then((result) => {
            if (result.isConfirmed) {
                setTasks([]);
                Swal.fire("Deleted!", "All tasks have been deleted.", "success");
            }
        });
    };

    const handleCompleteAll = () => {
        setTasks(tasks.map(task => ({ ...task, status: "completed" })));
    };

    const handleCancel = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your unsaved changes will be lost!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, discard!"
        }).then((result) => {
            if (result.isConfirmed) {
                setHeading("");
                setTasks([{ id: uuidv4(), title: "", status: "pending", dateTime: "" }]);
            }
        });
    };

    const handleSave = async () => {
        await saveTodo();
        Swal.fire({
            title: "Success!",
            text: "Your task has been created successfully!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK"
        });
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
                                value={heading || ""}
                                onChange={(e) => setHeading(e.target.value)}
                                placeholder="Title here"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <hr className="mt-8 border-gray-200" />

                        <div className="py-2 pt-4">
                            {tasks.map((task) => (
                                <div key={task.id} className="flex items-center gap-x-4 p-2">
                                    <input
                                        type="checkbox"
                                        checked={task.status === "completed"}
                                        onChange={() => handleCheckboxChange(task.id)}
                                        className="w-10 h-10 accent-primaryColor"
                                    />
                                    <input
                                        type="text"
                                        value={task.title || ""}
                                        onChange={(e) => handleTaskChange(task.id, "title", e.target.value)}
                                        placeholder="Enter task..."
                                        className={`w-full border-b border-gray-400 focus:outline-none py-1 px-2 ${getTaskStyle(task.status)}`}
                                    />

                                    <input
                                        type="datetime-local"
                                        value={task.dateTime || ""}
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
                            <div className="pl-2 text-gray-500 cursor-pointer w-fit" onClick={addTask}>+ Add More</div>
                        </div>

                        <div className="w-full flex justify-end items-center gap-x-6 pt-8">
                            {(heading.trim() || tasks.some(task => task.title.trim())) && (
                                <>
                                    <button onClick={handleDeleteAll}>Delete All</button>
                                    <button onClick={handleCompleteAll}>Complete All</button>
                                    <button onClick={handleCancel}>Cancel</button>
                                </>
                            )}
                            <button onClick={handleSave} className="px-4 py-2 bg-primaryColor rounded-xl text-white">
                                {editId ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>

                    <div className="w-full">
                        {todos.map((todo) => (
                            <div key={todo._id} className="p-4 bg-white rounded-xl shadow-md mb-4">
                                <h3 className="text-lg font-semibold">{todo.heading}</h3>
                                <button className="text-blue-500 mr-4" onClick={() => viewTodo(todo)}>View</button>
                                <button className="text-green-500 mr-4" onClick={() => editTodo(todo)}>Edit</button>
                                <button className="text-red-500" onClick={() => deleteTodo(todo._id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoComponent;