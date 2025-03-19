import { useState } from 'react'
import { useRequestPasswordResetMutation } from '@/services/AuthApi'

export const useForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [requestPasswordReset, { isLoading, isSuccess }] =
        useRequestPasswordResetMutation()
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async () => {
        if (!email) {
            setError('Please enter your email address')
            return
        }

        try {
            setError(null)
            await requestPasswordReset({ email }).unwrap()
        } catch (err: any) {
            const errorMsg =
                err.data?.message ||
                'Failed to send reset link. Please try again.'
            setError(errorMsg)
        }
    }

    return {
        email,
        setEmail,
        handleSubmit,
        isLoading,
        isSuccess,
        error,
    }
}
