import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message, Form } from 'antd'
import { useRegisterMutation } from '@/services/AuthApi'

interface RegisterFormValues {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export const useRegister = () => {
    const [form] = Form.useForm()
    const [register, { isLoading }] = useRegisterMutation()
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleSubmit = async (values: RegisterFormValues) => {
        try {
            setError(null)

            // Call the registration API
            await register({
                name: values.name,
                email: values.email,
                password: values.password,
            }).unwrap()

            message.success('Registration successful!')
            navigate('/login')
        } catch (err: any) {
            // Safe error handling
            let errorMessage = 'Registration failed. Please try again.'

            if (typeof err === 'string') {
                errorMessage = err
            } else if (
                err?.data?.message &&
                typeof err.data.message === 'string'
            ) {
                errorMessage = err.data.message
            } else if (err?.message && typeof err.message === 'string') {
                errorMessage = err.message
            }

            setError(errorMessage)
            message.error(errorMessage)
            console.error('Registration error:', err)
        }
    }

    return {
        handleSubmit,
        isLoading,
        error,
        form,
    }
}
