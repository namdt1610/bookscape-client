import React from 'react'
import AuthLayout from '@/components/client/layouts/AuthLayout'
import ForgotPwd from '@/features/client/forgotPwd/ForgotPwd'

export default function ForgotPasswordPage() {
    return (
        <AuthLayout>
            <ForgotPwd />
        </AuthLayout>
    )
}
