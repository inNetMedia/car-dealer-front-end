import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

function ShowMore(){
    const { showNav, setShowNav } = useContext(DataContext)

    function handleRemoveMore(){
        setShowNav(false)
    }

    return(
        <div onClick={handleRemoveMore} className="[&_a]:m-3 fixed left-0 right-0 h-[100dvh] z-10 top-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="bg-white flex flex-col items-center justify-start z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-15">
                <Link to='/'>Home</Link>
                <Link to='/cars'>Cars</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default ShowMore