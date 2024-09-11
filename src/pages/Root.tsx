import {useNavigate, useOutlet} from "react-router-dom"
import { useAuth } from "../hooks/useAuth.tsx"
import {useEffect} from "react";

export const Root = () => {
    const { user } = useAuth()
    const outlet = useOutlet()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/dashboard/applications')
        } else {
            navigate('/login')
        }
    }, [user])

    return <div>
        <div>I root.. </div>
        {outlet}
    </div>
}