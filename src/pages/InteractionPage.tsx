import { DefaultPage } from "../components/DefaultPage"
import Settings from "@mui/icons-material/Settings"
import {Tab, useApplication} from "../hooks/useApplication.tsx";
import {useEffect} from "react";

const InteractionPage = () => {
    const {setTab} = useApplication()
    useEffect(() => setTab(Tab.Interactions), [])
    return <DefaultPage title="Application Page" icon={<Settings />} />
}

export default InteractionPage