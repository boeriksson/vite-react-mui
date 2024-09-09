import {Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";

interface TabBarProps {
    tab: string
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
            <Tab value='root' label="Home" component={Link} to={"/"} />
            <Tab value='page2' label="Page 2" component={Link} to={"/page2"} />
        </Tabs>
    )
}

export default TabBar
