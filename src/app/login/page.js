"use client"
import { Login, PublicUserLoginRoute } from '@/components'
import React from 'react'

// -------------------------------------

const LoginPage = () => {
    return (
        <>
            <PublicUserLoginRoute>
                <Login />
            </PublicUserLoginRoute>
        </>
    )
}

export default LoginPage
