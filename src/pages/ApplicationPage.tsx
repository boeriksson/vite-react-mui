import { DefaultPage } from "../components/DefaultPage"
import Settings from "@mui/icons-material/Settings"
import {Tab, useApplication} from "../hooks/useApplication.tsx";
import {useEffect} from "react";

const ApplicationPage = () => {
    const {setTab} = useApplication()
    useEffect(() => setTab(Tab.Applications), [])
    return <DefaultPage title="Application Page" icon={<Settings />} />
}

export default ApplicationPage