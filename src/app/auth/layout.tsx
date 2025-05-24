'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/app')
        }
    }, [isAuthenticated, router])

    if (isAuthenticated) {
        return null
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                {children}
            </div>
        </div>
    )
}
