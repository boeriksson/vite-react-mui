import { useState } from 'react'
import { useAuth } from '../hooks/useAuth.tsx'
const LoginPage = () => {
    console.log('Loginpage..')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would usually send a request to your backend to authenticate the user
        // For the sake of this example, we're using a mock authentication
        if (username === "user" && password === "password") {
            // Replace with actual authentication logic
            login && login(username)
        } else {
            alert('Invalid username or password')
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage