import React, { Suspense } from 'react'
import RegisterForm from './components/RegisterForm'
import { motion } from 'framer-motion'
import { Skeleton } from 'antd'
import ErrorBoundary from '@/components/shared/ErrorBoudaries'

const Register: React.FC = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Skeleton active />}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center w-full h-screen"
                >
                    <RegisterForm />
                </motion.div>
            </Suspense>
        </ErrorBoundary>
    )
}

export default Register
