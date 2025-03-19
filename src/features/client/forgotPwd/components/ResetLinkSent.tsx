import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import { CheckCircleOutlined } from '@ant-design/icons'

interface ResetLinkSentProps {
    email: string
}

export const ResetLinkSent: React.FC<ResetLinkSentProps> = ({ email }) => {
    return (
        <Result
            icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
            title="Reset Link Sent!"
            subTitle={
                <div className="text-center">
                    <p>We've sent a password reset link to:</p>
                    <p className="font-bold">{email}</p>
                    <p className="mt-4 text-sm text-gray-500">
                        Please check your email (including spam folder) and
                        follow the instructions.
                    </p>
                </div>
            }
            extra={[
                <Button key="login" type="primary">
                    <Link to="/login">Return to Login</Link>
                </Button>,
            ]}
        />
    )
}
