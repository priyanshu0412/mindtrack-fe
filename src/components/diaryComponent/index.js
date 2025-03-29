"use client";

import { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Icon from "../Icon";
import { useRouter } from "next/navigation";
import { logout } from "@/store/authSlice";


// ---------------------------------------------

const DiaryComponent = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const token = user?.token;

    const editorRef = useRef(null);
    const [diaries, setDiaries] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchDiaries();
    }, []);

    const fetchDiaries = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BE_URL}/api/diary`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.status === 200) {
                setDiaries(response.data.data);
            } else if (response.status === 401) {
                dispatch(logout());
                Swal.fire({
                    icon: "warning",
                    title: "Session Expired",
                    text: "Your session has expired. Please log in again.",
                    confirmButtonText: "OK",
                }).then(() => {
                    router.push("/login");
                });
            }
        } catch (error) {
            console.error("Error fetching diaries:", error);
        }
    };

    const handleSaveOrUpdate = async () => {
        if (!title.trim() || !content.trim()) {
            Swal.fire({ icon: "error", title: "Oops...", text: "Title and Content cannot be empty!" });
            return;
        }

        const url = isEditing
            ? `${process.env.NEXT_PUBLIC_BE_URL}/api/diary/${editingId}`
            : `${process.env.NEXT_PUBLIC_BE_URL}/api/diary`;

        const method = isEditing ? axios.patch : axios.post;

        try {
            const response = await method(url, { title, content }, { headers: { Authorization: `Bearer ${token}` } });

            if (response.status === 200 || response.status === 201) {
                resetForm();
                fetchDiaries();
            } else if (response.status === 401) {
                dispatch(logout());
                Swal.fire({
                    icon: "warning",
                    title: "Session Expired",
                    text: "Your session has expired. Please log in again.",
                    confirmButtonText: "OK",
                }).then(() => {
                    router.push("/login");
                });
            }
        } catch (error) {
            console.error("Error saving/updating diary:", error);

            if (error.response && error.response.status === 401) {
                dispatch(logout());
                Swal.fire({
                    icon: "warning",
                    title: "Session Expired",
                    text: "Your session has expired. Please log in again.",
                    confirmButtonText: "OK",
                }).then(() => {
                    router.push("/login");
                });
            } else {
                Swal.fire({ icon: "error", title: "Error", text: "Something went wrong!" });
            }
        }
    };


    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This diary entry will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`${process.env.NEXT_PUBLIC_BE_URL}/api/diary/${id}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    if (response.status === 200) {
                        fetchDiaries();
                        Swal.fire({ icon: "success", title: "Deleted!", text: "Your diary entry has been deleted." });
                    } else if (response.status === 401) {
                        dispatch(logout());
                        Swal.fire({
                            icon: "warning",
                            title: "Session Expired",
                            text: "Your session has expired. Please log in again.",
                            confirmButtonText: "OK",
                        }).then(() => {
                            router.push("/login");
                        });
                    }
                } catch (error) {
                    console.error("Error deleting diary:", error);

                    if (error.response && error.response.status === 401) {
                        dispatch(logout());
                        Swal.fire({
                            icon: "warning",
                            title: "Session Expired",
                            text: "Your session has expired. Please log in again.",
                            confirmButtonText: "OK",
                        }).then(() => {
                            router.push("/login");
                        });
                    } else {
                        Swal.fire({ icon: "error", title: "Error", text: "Something went wrong!" });
                    }
                }
            }
        });
    };


    const handleView = (diary) => {
        withReactContent(Swal).fire({
            title: diary.title,
            html: `<div style="text-align: left; padding: 10px; font-size: 16px;">${diary.content}</div>`,
            showConfirmButton: false,
            showCloseButton: true,
            width: "600px",
        });
    };

    const handleEdit = (diary) => {
        setTitle(diary.title);
        setContent(diary.content);
        setEditingId(diary._id);
        setIsEditing(true);
    };

    const handleCancel = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Your unsaved changes will be lost!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, discard changes",
        }).then((result) => {
            if (result.isConfirmed) resetForm();
        });
    };

    const resetForm = () => {
        setTitle("");
        setContent("");
        setEditingId(null);
        setIsEditing(false);
    };

    return (
        <div className="w-full flex flex-col items-center min-h-screen p-6 bg-primaryColor">
            <div className="w-full max-w-3xl bg-white text-thirdColor shadow-lg rounded-xl p-6">
                <h1 className="text-3xl font-semibold mb-4">Write Your Diary</h1>
                <input
                    type="text"
                    placeholder="Enter Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border p-2 rounded-md mb-4 text-black"
                />
                <Editor
                    apiKey="628zzwct6qbsggq5ruwyf8nanp3nm4ip7apzfofv7p1ekkyq"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onEditorChange={setContent}
                    value={content}
                    init={{
                        height: 300,
                        menubar: true,
                        plugins: ["advlist", "autolink", "lists", "link", "preview", "code", "fullscreen"],
                        toolbar: "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image | code preview",
                    }}
                />
                <div className="flex justify-end gap-4 mt-6">
                    {(title || content) && (
                        <button onClick={handleCancel} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg">Cancel</button>
                    )}
                    <button onClick={handleSaveOrUpdate} className="bg-thirdColor hover:bg-yellow-500 text-black px-4 py-2 rounded-lg">
                        {isEditing ? "Update" : "Save"}
                    </button>
                </div>
            </div>
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-thirdColor">Your Diaries</h2>
                <ul className="space-y-4">
                    {diaries.map((diary) => (
                        <li key={diary._id} className="p-4 border rounded-lg flex justify-between items-center bg-white text-black flex-col sm:flex-row gap-4 sm:gap-0 ">
                            <span className="font-medium">{diary.title}</span>
                            <div className="flex gap-2">
                                <button onClick={() => handleView(diary)} className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg">
                                    <Icon className={"text-lg"} icon={"lets-icons:view"} />
                                </button>
                                <button onClick={() => handleEdit(diary)} className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg">
                                    <Icon className={"text-lg"} icon={"tabler:edit"} />
                                </button>
                                <button onClick={() => handleDelete(diary._id)} className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg">
                                    <Icon className={"text-lg"} icon={"ic:baseline-delete"} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DiaryComponent;
