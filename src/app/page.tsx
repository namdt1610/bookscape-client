'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        // Redirect to the main app page
        router.push('/app')
    }, [router])

    return null
}
