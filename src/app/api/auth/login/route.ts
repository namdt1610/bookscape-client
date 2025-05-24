import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password } = body

        // Replace with your actual authentication logic
        // This is just a placeholder
        if (email === 'test@example.com' && password === 'password') {
            return NextResponse.json({
                user: {
                    id: '1',
                    email: 'test@example.com',
                    name: 'Test User',
                },
                token: 'dummy-token',
            })
        }

        return NextResponse.json(
            { message: 'Invalid credentials' },
            { status: 401 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        )
    }
}
