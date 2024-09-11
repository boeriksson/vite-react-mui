import {Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";
import {Tab as TabType} from "../../hooks/useApplication.tsx";

interface TabBarProps {
    tab?: string
}

const TabBar = ({tab}: TabBarProps ) => {
    return (
        <Tabs
            value={tab}
            aria-label="nav tabs example"
            role="navigation"
            textColor="secondary"
            indicatorColor="secondary"
        >
            <Tab value={TabType.Applications} label="Applications" component={Link} to={"/dashboard/applications"} />
            <Tab value={TabType.Interactions} label="Interactions" component={Link} to={"/dashboard/interactions"} />
        </Tabs>
    )
}

export default TabBar
