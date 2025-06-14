import React from 'react'
import Register from '@/features/client/register/Register'
import AuthLayout from '@/components/client/layouts/AuthLayout'

export default function RegisterPage() {
    return (
        <AuthLayout>
            <Register />
        </AuthLayout>
    )
}
