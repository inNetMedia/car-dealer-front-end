import { createContext, useState, useEffect } from "react";
import useResize from "../hooks/useResize";

const DataContext = createContext({
    windowSize: {
        width: typeof window !== "undefined" ? window.innerWidth : null,
        height: typeof window !== "undefined" ? window.innerHeight : null
    }
})

export const DataProvider = ({ children }) => {
    const windowSize = useResize()
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [showNav, setShowNav] = useState(false)
    const [showLogIn, setShowLogIn] = useState(false)
    const [reqError, setReqError] = useState(false)
    const [isAdmin, setIsAdmin] = useState(true)
    const [isProfileView, setIsProfileView] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showEditListing, setShowEditListing] = useState(false)
    const whatsappContact = '27694171544'

    function handleShowNavigation(){
        setShowNav(!showNav)
    }
    useEffect(() => {
        const id = localStorage.getItem('id')
        const role = localStorage.getItem('role')

        setIsLoggedIn(!Boolean(id))
        setIsAdmin(role !== "user")

    }, [])

    return(
        <DataContext.Provider value={{ 
            windowSize, isLoggedIn, showNav,
            setShowNav, handleShowNavigation,
            showLogIn, setShowLogIn, reqError,
            setReqError, setIsLoggedIn, setIsAdmin,
            setIsProfileView, isProfileView, isAdmin,
            setShowProfile, showProfile, showEditListing,
            setShowEditListing, whatsappContact
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext }
export default DataProvider