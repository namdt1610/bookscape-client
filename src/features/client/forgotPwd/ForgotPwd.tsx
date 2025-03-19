import React, { Suspense } from 'react'
import { ForgotPasswordForm } from './components/ForgotPasswordForm'
import { motion } from 'framer-motion'
import { Skeleton } from 'antd'
import ErrorBoundary from '@/components/shared/ErrorBoudaries'

export default function ForgotPwd() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Skeleton active />}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center w-full h-screen"
                >
                    <ForgotPasswordForm />
                </motion.div>
            </Suspense>
        </ErrorBoundary>
    )
}
