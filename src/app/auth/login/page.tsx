'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/slices/authSlice'
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const onFinish = async (values: { email: string; password: string }) => {
        try {
            setLoading(true)
            // Replace with your actual login API call
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error('Login failed')
            }

            const data = await response.json()
            dispatch(login(data))
            message.success('Login successful!')
            router.push('/app')
        } catch (error) {
            message.error('Login failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Welcome to BookScape</h1>
                <p className="text-gray-600">Please sign in to continue</p>
            </div>

            <Form
                name="login"
                onFinish={onFinish}
                layout="vertical"
                requiredMark={false}
            >
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        {
                            type: 'email',
                            message: 'Please enter a valid email!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Email"
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        block
                        size="large"
                    >
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
