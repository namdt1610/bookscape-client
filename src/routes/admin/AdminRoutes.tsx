import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '@/routes/admin/PrivateRoute'
import LoadingError from '@/components/shared/LoadingError'
import AuthLayout from '@/components/admin/layout/AuthLayout'
import AdminLayout from '@/components/admin/layout/AdminLayout'
import adminRoutes, { authRoutes, RouteConfig } from './routesConfig'

export default function AdminRoutes() {
    const renderRoute = ({
        path,
        element: Element,
        protected: isProtected,
        permissions,
        index,
        children,
    }: RouteConfig) => {
        if (index) {
            return (
                <Route
                    key={path}
                    index
                    element={
                        isProtected ? (
                            <PrivateRoute permissions={permissions}>
                                <Element />
                            </PrivateRoute>
                        ) : (
                            <Element />
                        )
                    }
                />
            )
        }

        return (
            <Route
                key={path}
                path={path}
                element={
                    isProtected ? (
                        <PrivateRoute permissions={permissions}>
                            <Element />
                        </PrivateRoute>
                    ) : (
                        <Element />
                    )
                }
            >
                {children && children.map(renderRoute)}
            </Route>
        )
    }

    return (
        <Suspense
            fallback={
                <LoadingError
                    isLoading={true}
                    isError={false}
                    title="Loading..."
                    isLogin={false}
                />
            }
        >
            <Routes>
                {/* Admin routes */}
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <AdminLayout />
                        </PrivateRoute>
                    }
                >
                    {adminRoutes.children?.map(renderRoute)}
                </Route>

                {/* Auth routes (Login/Register) */}
                {authRoutes.map(({ path, element: Element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <AuthLayout>
                                <Element />
                            </AuthLayout>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
