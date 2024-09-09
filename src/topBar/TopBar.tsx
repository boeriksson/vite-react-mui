import TabBar from "./TabBar.tsx";

interface TopBarProps {
    tab: string;
}

const TopBar  = ({tab}: TopBarProps) => {
    return (
        <div>
            <TabBar tab={tab}/>
        </div>
    )
}

export default TopBar