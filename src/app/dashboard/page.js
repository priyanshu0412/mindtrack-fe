"use client"
import { DashBoardComp, ProtectedRoute } from '@/components'
import React from 'react'

// ------------------------------------

const DashboardPage = () => {
    return (
        <>
            <ProtectedRoute>
                <DashBoardComp />
            </ProtectedRoute>
        </>
    )
}

export default DashboardPage
