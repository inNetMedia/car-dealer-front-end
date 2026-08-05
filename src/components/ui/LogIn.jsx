import apiRequest from '../../api/apiRequest'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

function LogIn(){
    const { setReqError, reqError, setShowLogIn, setIsLoggedIn, setIsAdmin } = useContext(DataContext)

    const [error, setError] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const isUserAdmin =  (role) => {
        if(role === 'user'){
            setIsAdmin(false)
        }else{
            setIsAdmin(true)
        }
    }

    const logInUser = async (e) => {
        e.preventDefault()
        console.log('Is authorizing')
        const API_URL = `http://localhost:3500/user/auth`

        const logReq = await apiRequest(API_URL, {
                        method: 'POST',
                        credentials: 'include',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({ email, password })
                    }, setReqError)
        
        console.log(logReq)
        if(logReq.response.ok){
            setShowLogIn(false)
            setIsLoggedIn(false)
            localStorage.setItem('id', logReq.jsonData.id)
            localStorage.setItem('username', logReq.jsonData.username)
            localStorage.setItem('email', logReq.jsonData.email)
            localStorage.setItem('role', logReq.jsonData.role)
            isUserAdmin(logReq.jsonData.role)
        }
    }

    const getEmail = (e) => {
        setReqError(false)
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setReqError(false)
        setPassword(e.target.value)
    }

    return(
        <form>
            <div className="[&_label]:block [&_label]:mt-5 [&_label]:font-bold [&_input]:bg-gray-300/75 [&_input]:w-full [&_input]:h-10 [&_input]:p-3 [&_input]:rounded-md p-4">
                <label htmlFor="email">Email</label>
                <input onChange={(e) => getEmail(e)} type="email" placeholder="you@example.com" required id="email"/>
                <label htmlFor="password"  id="password">Password</label>
                <input onChange={(e) => getPassword(e)} id="password" placeholder="•••••" required  />
            
                { reqError && (<p className='text-red-500 mt-3 text-xs'>Enter correct email and password</p>)}
                <div>
                    <button onClick={logInUser} className="w-full mt-5 bg-gray-900 text-white py-2 rounded-md cursor-pointer hover:bg-gray-800" type="submit">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default LogIn