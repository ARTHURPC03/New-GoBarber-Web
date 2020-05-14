import React, { createContext, useContext, useCallback, useState } from 'react'

import ToastContainer from '../components/ToastContainer'

interface ToastMessage {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

interface ToastContextData {
  addToast(): void
  removeToast(): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(() => {
    console.log('addToast')
  }, [])

  const removeToast = useCallback(() => {
    console.log('removeToast')
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export { ToastProvider, useToast }
