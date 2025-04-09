import React from 'react'
import { HomeLayout } from '@/components/client/layouts/HomeLayout'
import { Home } from '@/components/home/Home'

export default function HomePage() {
    return (
        <HomeLayout>
            <Home />
        </HomeLayout>
    )
}
