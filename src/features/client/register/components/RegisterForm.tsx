import React from 'react'
import { Form, Input, Button, Alert, Divider } from 'antd'
import {
    UserOutlined,
    MailOutlined,
    LockOutlined,
    CheckCircleOutlined,
    GithubOutlined,
    GoogleOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useRegister } from '../hooks/useRegister'

export const RegisterForm: React.FC = () => {
    const { handleSubmit, isLoading, error, form } = useRegister()

    return (
        <div className="glassmorphism p-8 max-w-md w-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <motion.h1
                    className="text-2xl font-bold mb-6 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Create an Account
                </motion.h1>

                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Alert
                                message={error}
                                type="error"
                                showIcon
                                className="mb-6 glassmorphism border-0"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <Form
                    form={form}
                    name="register"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    size="large"
                    layout="vertical"
                    className="space-y-1"
                >
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name',
                            },
                        ]}
                    >
                        <Input
                            className="glass-input"
                            prefix={<UserOutlined className="text-gray-400" />}
                            placeholder="Full Name"
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email',
                            },
                            {
                                type: 'email',
                                message: 'Please enter a valid email',
                            },
                        ]}
                    >
                        <Input
                            className="glass-input"
                            prefix={<MailOutlined className="text-gray-400" />}
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password',
                            },
                            {
                                min: 8,
                                message:
                                    'Password must be at least 8 characters',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            className="glass-input"
                            prefix={<LockOutlined className="text-gray-400" />}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue('password') === value
                                    ) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The two passwords do not match'
                                        )
                                    )
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            className="glass-input"
                            prefix={
                                <CheckCircleOutlined className="text-gray-400" />
                            }
                            placeholder="Confirm Password"
                        />
                    </Form.Item>

                    <Form.Item className="mt-4">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="glass-button w-full"
                                loading={isLoading}
                            >
                                Register
                            </Button>
                        </motion.div>
                    </Form.Item>

                    <Divider>or register with</Divider>

                    <div className="flex space-x-4">
                        <motion.div
                            className="w-1/2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                className="glass-card w-full flex items-center justify-center"
                                icon={<GoogleOutlined />}
                            >
                                Google
                            </Button>
                        </motion.div>

                        <motion.div
                            className="w-1/2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                className="glass-card w-full flex items-center justify-center"
                                icon={<GithubOutlined />}
                            >
                                Github
                            </Button>
                        </motion.div>
                    </div>
                </Form>

                <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-gray-600">
                        Already have an account?
                    </span>{' '}
                    <Link
                        to="/login"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Login
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default RegisterForm
