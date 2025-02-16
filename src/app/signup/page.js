"use client"
import { PublicUserLoginRoute, SignUp } from '@/components'
import React from 'react'

// ----------------------------------

const SignupPage = () => {
    return (
        <>
            <PublicUserLoginRoute>
                <SignUp />
            </PublicUserLoginRoute>
        </>
    )
}

export default SignupPage
