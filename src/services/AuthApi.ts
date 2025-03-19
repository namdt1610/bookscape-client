import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface AuthResponse {
    user: any
    accessToken: string
}

export interface RequestPasswordResetRequest {
    email: string
}

export interface ResetPasswordRequest {
    token: string
    password: string
}

export interface ResetPasswordResponse {
    success: boolean
    message: string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/auth',
        credentials: 'include',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
    }), // Địa chỉ API backend của bạn
    endpoints: (builder) => ({
        login: builder.mutation<any, { email: string; password: string }>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<
            any,
            { name: string; email: string; password: string }
        >({
            query: (credentials) => ({
                url: '/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),
        // Password reset endpoints
        requestPasswordReset: builder.mutation<
            { success: boolean; message: string },
            RequestPasswordResetRequest
        >({
            query: (data) => ({
                url: '/auth/request-password-reset',
                method: 'POST',
                body: data,
            }),
        }),
        resetPassword: builder.mutation<
            ResetPasswordResponse,
            ResetPasswordRequest
        >({
            query: (data) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body: data,
            }),
        }),
        // Verify reset token validity
        verifyResetToken: builder.query<{ valid: boolean }, string>({
            query: (token) => `/auth/verify-reset-token/${token}`,
        }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useRequestPasswordResetMutation,
    useResetPasswordMutation,
    useVerifyResetTokenQuery,
} = authApi
