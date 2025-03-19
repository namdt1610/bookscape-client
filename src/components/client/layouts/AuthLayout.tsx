import React from 'react'
import { motion } from 'framer-motion'

interface LoginLayoutProps {
    children: React.ReactNode
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
            {/* Glass orbs background decorations */}
            <div className="fixed -top-40 -left-40 w-80 h-80 rounded-full bg-pink-300 mix-blend-multiply opacity-20 filter blur-3xl"></div>
            <div className="fixed top-20 right-60 w-72 h-72 rounded-full bg-blue-300 mix-blend-multiply opacity-20 filter blur-3xl"></div>
            <div className="fixed bottom-40 right-20 w-96 h-96 rounded-full bg-purple-300 mix-blend-multiply opacity-20 filter blur-3xl"></div>
            <div className="fixed bottom-20 -left-20 w-60 h-60 rounded-full bg-yellow-300 mix-blend-multiply opacity-20 filter blur-3xl"></div>

            {/* Floating particles */}
            <motion.div
                className="absolute w-4 h-4 rounded-full bg-blue-400 opacity-30"
                style={{ top: '10%', left: '10%' }}
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />
            <motion.div
                className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-20"
                style={{ top: '30%', right: '15%' }}
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 1,
                }}
            />
            <motion.div
                className="absolute w-3 h-3 rounded-full bg-indigo-400 opacity-25"
                style={{ bottom: '20%', right: '25%' }}
                animate={{
                    y: [0, -8, 0],
                    opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 0.5,
                }}
            />

            {/* Light mesh gradient overlay */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
            />

            {/* Centered Content */}
            <div className="relative flex items-center justify-center w-full h-full z-10">
                {children}
            </div>
        </div>
    )
}

export default LoginLayout
