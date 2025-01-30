import { ProtectedRoute } from '@/components'
import React from 'react'

const TodoPage = () => {
    return (
        <>
            <ProtectedRoute>
                This is Todo Page
            </ProtectedRoute>
        </>
    )
}

export default TodoPage
