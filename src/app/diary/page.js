import { DiaryComponent, ProtectedRoute } from '@/components'
import React from 'react'

// -------------------------------------

const DiaryPage = () => {
    return (
        <>
            <ProtectedRoute>
                <DiaryComponent />
            </ProtectedRoute>
        </>
    )
}

export default DiaryPage
