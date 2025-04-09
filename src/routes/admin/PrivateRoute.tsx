import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserRole } from './routesConfig'
import useAuth from '@/hooks/useAuth' // You'll need to create this hook

interface PrivateRouteProps {
    children: React.ReactNode
    permissions?: {
        view: UserRole[]
        edit?: UserRole[]
        delete?: UserRole[]
    }
}

const PrivateRoute = ({ children, permissions }: PrivateRouteProps) => {
    const location = useLocation()
    // Get authentication state from your auth context/hook
    const { isAuthenticated, userRole } = useAuth()

    // If user is not authenticated, redirect to login
    if (!isAuthenticated) {
        // Redirect to login page with the return url
        return (
            <Navigate to="/admin/login" state={{ from: location.pathname }} replace />
        )
    }

    // Check if user has required permissions
    if (permissions && !permissions.view.includes(userRole as UserRole)) {
        // User is authenticated but doesn't have required permissions
        return <Navigate to="/admin/unauthorized" replace />
    }

    // User is authenticated and has permission
    return <>{children}</>
}

export default PrivateRoute
