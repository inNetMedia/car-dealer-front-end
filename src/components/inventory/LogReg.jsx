import LogIn from "../ui/LogIn"
import Register from "../ui/Register"
import { useState } from "react"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

function LogReg(){
    const { setShowLogIn } = useContext(DataContext)

    const [isSigning, setIsSigning] = useState(true)

    const activeStyle = {
        borderBottom: '2px solid black',
        fontWeight:'700'
    }
    const nonActiveStyle = {
        border: 'none'
    }

    return(
        <section className="fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center bg-black/20">
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-md w-[80%] transition-all duration-300 ease-in-out max-w-xl">
                <div className="bg-black text-white p-5">
                    <div className="flex justify-end"><i className="fa-solid fa-x cursor-pointer" onClick={() => setShowLogIn(false)}></i></div>
                    <div>
                        <h1 className="font-bold text-xl"><i className="fa-solid fa-car-side"></i> NN Motors</h1>
                        <p className="text-sm text-gray-400">{ isSigning ? (<span>Welcome back. Sign in to continue</span>) : (<span>Create your NN account</span>)}</p>
                    </div> 
                </div>   

                <div className="flex  border-b-1 border-gray-400/40">
                    <div style={isSigning ? activeStyle : nonActiveStyle} onClick={() => setIsSigning(true)} className="flex p-3 flex-1 justify-center w-full cursor-pointer">Sign In</div>
                    <div style={!isSigning ? activeStyle : nonActiveStyle} className="flex flex-1 justify-center items-center cursor-pointer" onClick={() => setIsSigning(false)}>Register</div>
                </div>

                { !isSigning ? (<Register />) : (<LogIn />)}
            </div>
        </section>
    )
}


export default LogReg