"use client"
import { PublicUserLoginRoute, VerifyOtpComp } from '@/components'
import React from 'react'

// ----------------------------------

const VerifyOtpPage = () => {
    return (
        <>
            <PublicUserLoginRoute>
                <VerifyOtpComp />
            </PublicUserLoginRoute>
        </>
    )
}

export default VerifyOtpPage
