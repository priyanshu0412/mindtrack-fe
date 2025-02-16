"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const PublicUserLoginRoute = ({ children }) => {
    const router = useRouter();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (user?.isVerified) {
            router.push("/dashboard"); // Redirect verified users
        }
    }, [user, router]);

    // If user is verified, prevent rendering this route
    if (user?.isVerified) {
        return null;
    }

    return children;
};

export default PublicUserLoginRoute;
