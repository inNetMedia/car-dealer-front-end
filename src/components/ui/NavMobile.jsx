import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { useNavigate } from "react-router-dom"
import ProfilePopUp from "./ProfilePopUp"

function NavMobile({ showRgLog }){
    const { isLoggedIn, showNav, setShowNav, handleShowNavigation, setShowProfile, showProfile } = useContext(DataContext)
    const navigate = useNavigate()

    return(
        <div className="relative">
            <i onClick={() => navigate('/wish')} className="fa-regular fa-heart text-gray-700 cursor-pointer hover:text-gray-400"></i>
            { isLoggedIn ? (<i onClick={showRgLog} className="fa-regular fa-user ml-8 text-gray-700 cursor-pointer hover:text-gray-400"></i>) : (<><span onClick={() => setShowProfile(true)} className="ml-5 mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black font-bold text-white cursor-pointer">{localStorage.getItem('username')[0].toUpperCase()}</span><i onClick={() => setShowProfile(true)} className="fa-solid fa-chevron-down text-gray-700 cursor-pointer"></i></>)}
            <i className="fa-solid fa-bars ml-8 text-gray-700 cursor-pointer hover:text-gray-400" role="button" onClick={handleShowNavigation}></i>
            { showProfile && <ProfilePopUp /> }
        </div>
    )
}

export default NavMobile