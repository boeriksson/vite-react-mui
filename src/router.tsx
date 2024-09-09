import {createBrowserRouter} from "react-router-dom"
import Root from "./routes/root/Root"
import Page2 from "./routes/page2/Page2.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
    },
    {
        path: '/page2',
        element: <Page2/>,
    }
]);

export default router