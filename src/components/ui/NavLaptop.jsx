import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import ProfilePopUp from "./ProfilePopUp"
import { useNavigate } from "react-router-dom"

function NavLaptop({ showRgLog }){
    const { isLoggedIn, showProfile, setShowProfile } = useContext(DataContext)

    const navigate = useNavigate()

    return(
        <div className="">
            <i onClick={() => navigate('/wish')} className="fa-regular fa-heart text-gray-700 cursor-pointer hover:text-gray-400"></i>
            { isLoggedIn ? (<i onClick={showRgLog} className="hover:text-gray-500 fa-regular fa-user ml-8 text-gray-700 cursor-pointer"></i>) : (<><span onClick={() => setShowProfile(false)} className="ml-5 mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black font-bold text-white cursor-pointer cursor-pointer">{localStorage.getItem('username')[0].toUpperCase()}</span><i onClick={() => setShowProfile(true)} className="cursor-pointer fa-solid fa-chevron-down text-gray-700"></i></>)}
            { showProfile && <ProfilePopUp /> }
        </div>
    )
}

export default NavLaptop