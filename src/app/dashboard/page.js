"use client"
import { ProtectedRoute } from '@/components'
import React from 'react'

// ------------------------------------

const DashboardPage = () => {
    return (
        <>
            <ProtectedRoute>
                This is Dashboard Page
            </ProtectedRoute>
        </>
    )
}

export default DashboardPage
