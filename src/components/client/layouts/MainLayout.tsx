import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import BackToTop from '@/components/shared/BackToTop'

interface StoreLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<StoreLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50">
            <Header />
            <main className=" mt-[74px]">{children}</main>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default MainLayout
