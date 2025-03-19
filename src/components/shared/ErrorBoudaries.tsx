import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error:', error)
        console.error(errorInfo)
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // Safely convert error to string
            const safeErrorMessage =
                this.state.error === null
                    ? 'Unknown error'
                    : typeof this.state.error.message === 'string'
                    ? this.state.error.message
                    : 'An error occurred'

            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <div className="p-4 rounded bg-red-50 border border-red-200">
                    <h2 className="text-xl font-bold text-red-700">
                        Something went wrong
                    </h2>
                    <p className="text-red-600">{safeErrorMessage}</p>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
