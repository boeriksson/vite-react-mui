import './App.css'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import {Root} from "./pages/Root.tsx";
import {HomePage} from "./pages/Home.tsx";
import {ProtectedLayout} from "./components/ProtectedLayout";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import InteractionPage from "./pages/InteractionPage.tsx";

function App() {

  return (
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="applications" element={<ApplicationPage />} />
          <Route path="interactions" element={<InteractionPage />}
          />
        </Route>
      </Routes>
  )
}

export default App
