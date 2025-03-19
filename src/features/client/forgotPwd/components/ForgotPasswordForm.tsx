import React from 'react'
import { Form, Input, Button, Typography, Alert } from 'antd'
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForgotPassword } from '../hooks/useForgotPassword'
import { ResetLinkSent } from './ResetLinkSent'

const { Text } = Typography

export const ForgotPasswordForm: React.FC = () => {
    const { handleSubmit, isLoading, error, isSuccess, email, setEmail } =
        useForgotPassword()

    if (isSuccess) {
        return <ResetLinkSent email={email} />
    }

    return (
        <div className="glassmorphism p-8 max-w-md w-full">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <motion.h2
                    className="text-2xl font-bold mb-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Reset Your Password
                </motion.h2>

                <motion.p
                    className="mb-6 text-gray-600 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Enter your email address and we'll send you a link to reset
                    your password.
                </motion.p>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <Alert
                            className="mb-6 glassmorphism border-0"
                            type="error"
                            message={error}
                            showIcon
                        />
                    </motion.div>
                )}

                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="space-y-4"
                >
                    <Form.Item
                        name="email"
                        label={
                            <span className="text-gray-700 font-medium">
                                Email Address
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email',
                                message: 'Please enter a valid email!',
                            },
                        ]}
                    >
                        <Input
                            className="glass-input py-2 px-4"
                            prefix={
                                <MailOutlined className="text-gray-400 mr-2" />
                            }
                            placeholder="Your email address"
                            size="large"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item className="mb-2">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={isLoading}
                                className="w-full glass-button py-2 h-auto"
                                size="large"
                            >
                                {isLoading ? 'Sending...' : 'Send Reset Link'}
                            </Button>
                        </motion.div>
                    </Form.Item>
                </Form>

                <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        to="/login"
                        className="flex items-center justify-center text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeftOutlined className="mr-1" /> Back to Login
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}
