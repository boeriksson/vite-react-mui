import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,} from "react-router-dom"
import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import router from "./router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
