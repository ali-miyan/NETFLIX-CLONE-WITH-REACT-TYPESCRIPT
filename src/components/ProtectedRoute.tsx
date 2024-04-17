import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { ReactNode } from "react";


interface AuthContextProviderProps {
    children: ReactNode;
  }

const ProtectedRoute = ({children}:AuthContextProviderProps) => {
    const {user} = useAuth()

    if(!user){
        return <Navigate to="/" />
    }
  return children
}

export default ProtectedRoute