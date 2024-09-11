import { Navigate, useOutlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import TopBar from "./topBar/TopBar.tsx"

export const ProtectedLayout = () => {
    const { user } = useAuth()
    const outlet = useOutlet()

    if (!user) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <TopBar/>
            {outlet}
        </div>
    )
}