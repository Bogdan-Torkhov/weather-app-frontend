import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'

interface IProtectedRoutes {
    token: string | null ,
    children: React.ReactNode
}

export const ProtectedRoutes:React.FC<IProtectedRoutes> = ({token = null}) => {
    return token ? <Outlet /> : <Navigate to='/auth' replace />
}