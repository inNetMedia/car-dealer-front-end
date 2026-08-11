import { useState } from 'react'
import apiRequest from '../../api/apiRequest'

function Register(){
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [confirmPwd, setConfirmPwd] = useState()
    const [error, setError] = useState(null)
    const [regSuccessful, setRegSuccessful] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleRegisterUser = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(password !== confirmPwd){    
            setIsLoading(false)
            return setError('Passwords should match')
        }
        if(!passwordRegex.test(password)){
            setIsLoading(false)
            return setError('Password must be atleast 8 characters in length, contain number, symbol, uppercase and lowercase letter')
        }
        if(!emailRegex.test(email)){
            setIsLoading(false)
            return setError('Enter a correct email')
        }

        setError(null)
        const regReq = await apiRequest(`${import.meta.env.VITE_API_URL}/user/register`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ username, email, password })
                    })
        const response = regReq.response ?? regReq
        if(response.ok){
            setRegSuccessful(true)
            setIsLoading(false)
            return
        }
        if(response.status === 409){
            setError('Email already has an account')
            setIsLoading(false)
            return
        }
        setError('There was a problem creating your account, please try again later')
        setIsLoading(false)
        
    }

    return(
        <form>
            <div className="[&_label]:block [&_label]:mt-5 [&_label]:font-bold [&_input]:bg-gray-300/75 [&_input]:w-full [&_input]:h-10 [&_input]:p-3 [&_input]:rounded-md p-4">
                { regSuccessful ? (
                    <div className='text-center'>
                        <i className="fa-solid fa-circle-check text-5xl pt-20 animate-bounce "></i>
                        <p className='text-xl font-semibold'>Account Registered</p>
                        <p className='text-gray-500 font-'>Follow the link on your email to activate account</p>
                    </div>
                ) : (
                <>
                    <label htmlFor="name">Full Name</label>
                    <input onChange={(e) => { setUsername(e.target.value); setError(null) }} placeholder="John Smith" id="name" required maxLength="25"/>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => { setEmail(e.target.value); setError(null)}} type="email" placeholder="you@example.com" required id="email"/>
                    <label htmlFor="password"  id="password">Password</label>
                    <input onChange={(e) => { setPassword(e.target.value); setError(null) }} id="password" placeholder="•••••" required />
                    <label htmlFor="confirm">Confirm Password</label>
                    <input onChange={(e) => { setConfirmPwd(e.target.value); setError(null) }} type="password" placeholder="•••••" id="confirm" required />
                        
                    { error && (<p className='text-xs text-red-600 mt-4'>{error}</p>)}

                    <div>
                        <button onClick={handleRegisterUser} className="w-full mt-5 bg-gray-900 text-white py-2 rounded-md" type="submit">{ isLoading ? (<><i className="fa-solid fa-circle-notch mr-2 animate-spin"></i>Creating account</>): (<>Create Account</>)}</button>
                    </div>
                </>
                )}
            </div>
        </form>
    )
}

export default Register