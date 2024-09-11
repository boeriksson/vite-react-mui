import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter,} from 'react-router-dom'
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {AuthProvider} from "./hooks/useAuth.tsx";
import App from "./App.tsx";
import {ApplicationProvider} from "./hooks/useApplication.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ApplicationProvider>
                    <App/>
                </ApplicationProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)
