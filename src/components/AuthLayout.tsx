import { useOutlet } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth.tsx";

export const AuthLayout = () => {
    const outlet = useOutlet();

    return (
        <AuthProvider>{outlet}</AuthProvider>
    );
};