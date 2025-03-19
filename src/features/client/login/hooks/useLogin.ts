import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { message } from 'antd'
import { useLoginMutation } from '@/services/AuthApi'

export const useLogin = () => {
  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const location = useLocation()
  
  // Safe error handling - use string only
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (values: any) => {
    try {
      setErrorMessage(null)
      
      await login({
        email: values.email,
        password: values.password
      }).unwrap()
      
      if (values.remember) {
        localStorage.setItem('rememberMe', 'true')
      }
      
      message.success('Login successful!')
      navigate(from, { replace: true })
    } catch (err: any) {
      // IMPORTANT: Safely convert any error to string
      const safeErrorMessage = 
        typeof err === 'string' ? err : 
        typeof err?.data?.message === 'string' ? err.data.message :
        typeof err?.message === 'string' ? err.message :
        'Login failed. Please try again.'
      
      setErrorMessage(safeErrorMessage)
      message.error(safeErrorMessage)
      console.error('Login error:', err)
    }
  }

  return {
    handleSubmit,
    isLoading,
    error: errorMessage // Return simple string
  }
}