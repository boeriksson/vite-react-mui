import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import {AuthProvider} from './hooks/useAuth.tsx'
import LoginPage from './pages/LoginPage.tsx'
import {Root} from './pages/Root.tsx'
import {HomePage} from './pages/Home.tsx'
import {ProtectedLayout} from './components/ProtectedLayout'
import ApplicationPage from './pages/ApplicationPage.tsx'
import InteractionPage from './pages/InteractionPage.tsx'
import {ApplicationProvider} from './hooks/useApplication.tsx'

function App() {

    const router = createBrowserRouter([
        {
            element: <AuthProvider/>,
            children: [
                {
                    element: <ApplicationProvider/>,
                    children: [
                        {
                            element: <Root/>,
                            children: [
                                {
                                    path: '/',
                                    element: <HomePage/>
                                },
                                {
                                    path: '/login',
                                    element: <LoginPage/>
                                }
                            ]
                        },
                        {
                            path: 'dashboard',
                            element: <ProtectedLayout/>,
                            children: [
                                {
                                    path: 'applications',
                                    element: <ApplicationPage/>
                                },
                                {
                                    path: 'interactions',
                                    element: <InteractionPage/>
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App

