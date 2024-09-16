import {createContext, useContext, useMemo, useState} from "react";
import {Outlet} from "react-router-dom";

export enum Tab {
    Applications = "APPLICATIONS",
    Interactions = "INTERACTIONS"
}

interface ApplicationContextType {
    tab: Tab
    setTab: (tab: Tab) => void
}

const ApplicationContext = createContext<ApplicationContextType>({
    tab: Tab.Applications,
    setTab: () => {}
})

export const ApplicationProvider = () => {
    const [tab, setTab] = useState<Tab>(Tab.Applications)

    const value = useMemo(
        () => ({
            tab,
            setTab,
        }),
        [tab]
    )

    return <ApplicationContext.Provider value={value}><Outlet/></ApplicationContext.Provider>
}

export const useApplication = () => {
    return useContext(ApplicationContext)
}
