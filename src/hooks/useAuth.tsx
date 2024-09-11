import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'

interface AuthContextType {
    user?: string | null
    login?: (data: string) => void
    logout?: () => void
}

const AuthContext = createContext<AuthContextType>({})

interface AuthContextProps {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthContextProps) => {
    console.log('Running authprovider...')
    const [user, setUser] = useLocalStorage('user', null)
    const navigate = useNavigate()

    const login = async (data: string) => {
        setUser(data);
        navigate('/login');
    }

    const logout = () => {
        setUser(null);
        navigate('/', { replace: true });
    }

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user]
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    console.log('creating context (useAuth)...')
    return useContext(AuthContext)
}