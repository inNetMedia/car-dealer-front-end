import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { Link } from "react-router-dom"
import ProfilePopUp from "./ProfilePopUp"

function NavTablet({ showRgLog }){
    const { isLoggedIn, handleShowNavigation, setShowProfile, showProfile } = useContext(DataContext)

    return(
        <div className="text-xl">
            <Link to='/wish'><i className="fa-regular fa-heart text-gray-700 cursor-pointer hover:text-gray-400"></i></Link>
            { isLoggedIn ? (<i onClick={showRgLog} className="fa-regular fa-user ml-8 text-gray-700 cursor-pointer hover:text-gray-400"></i>) : (<><span onClick={() => setShowProfile(true)} className="cursor-pointer ml-5 mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">{localStorage.getItem('username')[0].toUpperCase()}</span><i onClick={() => setShowProfile(true)} className="fa-solid fa-chevron-down text-gray-700 cursor-pointer"></i></>)}
            <i className="fa-solid fa-bars ml-8 text-gray-700 cursor-pointer hover:text-gray-500" role="button" onClick={handleShowNavigation}></i>
            { showProfile && <ProfilePopUp /> }
        </div>
    )
}

export default NavTablet