import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"

function About(){
    const { showLogIn } = useContext(DataContext)

    return(
        <section className="flex-1">
            { showLogIn && (<LogReg />)}
            About Us
        </section>
    )
}

export default About