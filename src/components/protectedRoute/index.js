"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user || !user.isVerified) {
            router.push("/login");
        }
    }, [user, router]);

    if (!user || !user.isVerified) {
        return null; // Prevent rendering until redirect happens
    }

    return children;
};

export default ProtectedRoute;
