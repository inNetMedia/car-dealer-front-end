import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"

function Contact(){
    const { showLogIn } = useContext(DataContext)
    return(
        <section className="flex-1">
            { showLogIn && (<LogReg />)}
            Contact Us on...
        </section>
    )
}

export default Contact