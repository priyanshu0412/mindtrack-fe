import { ProtectedRoute, TodoComponent } from '@/components'
import React from 'react'

const TodoPage = () => {
    return (
        <>
            <ProtectedRoute>
                <TodoComponent />
            </ProtectedRoute>
        </>
    )
}

export default TodoPage
