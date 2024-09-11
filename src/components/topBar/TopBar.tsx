import TabBar from "./TabBar.tsx";
import {useApplication} from "../../hooks/useApplication.tsx";

const TopBar  = () => {
    const { tab } = useApplication()
    console.log('TobpBar tab: ', tab)
    return (
        <div>
            <TabBar tab={tab}/>
        </div>
    )
}

export default TopBar