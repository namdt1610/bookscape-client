'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const { isAuthenticated } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/auth/login')
        }
    }, [isAuthenticated, router])

    if (!isAuthenticated) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Add your app layout components here (header, sidebar, etc.) */}
            <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
    )
}
