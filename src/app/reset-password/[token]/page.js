"use client";
import { useParams } from "next/navigation";
import { ResetPassComp } from "@/components";
import React from "react";

const ResetPasswordPage = () => {
    const params = useParams();
    const token = params?.token;

    return (
        <>
            <ResetPassComp token={token} />
        </>
    );
};

export default ResetPasswordPage;
