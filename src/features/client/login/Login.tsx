import React, { Suspense } from 'react'
import { Card, Skeleton } from 'antd'
import { LoginForm } from '.'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ErrorBoundary from '@/components/shared/ErrorBoudaries'

export default function Login() {
    const location = useLocation()

    return (
        <ErrorBoundary>
            <Suspense fallback={<Skeleton active />}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center w-full h-screen"
                >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <LoginForm/>
                        </motion.div>
                </motion.div>
            </Suspense>
        </ErrorBoundary>
    )
}
