import React from 'react'
import { Form, Input, Button, Checkbox, Divider, Alert } from 'antd'
import {
    UserOutlined,
    LockOutlined,
    GithubOutlined,
    GoogleOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLogin } from '../hooks/useLogin'

const LoginForm: React.FC = () => {
    const { handleSubmit, isLoading, error } = useLogin()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="glassmorphism p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Welcome Back
                </h1>

                {error && (
                    <Alert
                        message={error}
                        type="error"
                        showIcon
                        className="mb-4"
                    />
                )}

                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    size="large"
                    layout="vertical"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            className="glass-input"
                            prefix={<UserOutlined className="text-gray-400" />}
                            placeholder="Email"
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
                            className="glass-input"
                            prefix={<LockOutlined className="text-gray-400" />}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-between items-center">
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                noStyle
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Link
                                to="/forgot-password"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                            className="glass-button w-full"
                        >
                            Sign In
                        </Button>
                    </Form.Item>

                    <Divider>or</Divider>

                    <div className="flex space-x-4">
                        <Button
                            className="glass-card w-1/2 flex items-center justify-center"
                            icon={<GoogleOutlined />}
                        >
                            Google
                        </Button>
                        <Button
                            className="glass-card w-1/2 flex items-center justify-center"
                            icon={<GithubOutlined />}
                        >
                            Github
                        </Button>
                    </div>

                    <div className="mt-6 text-center">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Register now
                        </Link>
                    </div>
                </Form>
            </div>
        </motion.div>
    )
}

export default LoginForm
