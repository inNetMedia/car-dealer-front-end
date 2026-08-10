import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const ProfilePopUp = () => {
    const { isAdmin, isProfileView, setIsProfileView, setShowProfile } = useContext(DataContext)
    const email = localStorage.getItem('email')
    const username = localStorage.getItem('username')
    const navigate = useNavigate()

    const handleLogout = async () => {  
        console.log(email)
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/logout`, {
                credentials: 'include'
            })
            console.log(response)
        }catch(err){
            console.log(err)
        }finally{
            localStorage.removeItem('id')
            localStorage.removeItem('role')
            localStorage.removeItem('username')
            localStorage.removeItem('email')
            navigate('/')
            window.location.reload()
        }
    }

    return(
        <div className="absolute bg-white text-sm w-50 right-[0] overflow-clip">
            { isAdmin ? 
                (
                    <>
                        <div className="border-b-1 border-gray-400 pb-2 px-2">
                            <h4 className="font-semibold">{username}</h4>
                            <p className="mb-1 text-gray-500">{email}</p>
                            <span className="bg-black text-white p-1 text-xs">ADMIN</span>
                        </div>
                        <div className="py-3 hover:bg-gray-300 cursor-pointer p-2">
                            <i className="fa-solid fa-gear mr-1"></i>
                            <Link onClick={() => setShowProfile(false)} to='/admin'>Admin Dashboard</Link>
                        </div>
                    </>
                )
                : 
                (
                    <>
                        <div className="border-b-1 border-gray-400 pb-2 px-2">
                            <h4 className="font-semibold">{username}</h4>
                            <p className="mb-1 text-gray-500">{email}</p>
                        </div>
                    </>
                )
            }
            <div onClick={handleLogout} className="pl-3 text-red-500 pb-3 font-semibold hover:bg-gray-300 cursor-pointer p-2">
                <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
                Sign Out
            </div>
            <div onClick={() => setShowProfile(false)} className="fixed top-0 bottom-0 right-0 left-0 z-[-1]"></div>
        </div>
    )
}

export default ProfilePopUp