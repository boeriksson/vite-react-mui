import {Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";

interface TabBarProps {
    tab: string
}

const TabBar = ({tab}: TabBarProps ) => {
    const [value, setValue] = useState(tab);

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => setValue(newValue)

    return (
        <Tabs
            value={value}
            onChange={handleChange}
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
