import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {

    if(!localStorage.getItem('role') || localStorage.getItem('role') === "user" || !localStorage.getItem('id') || !localStorage.getItem('email')){
        localStorage.removeItem('role')
        localStorage.removeItem('id')
        localStorage.removeItem('email')
        console.log('Not allowed')
        return <Navigate to='/' replace/>
    }

    return <Outlet />
}

export default ProtectedRoutes