import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { Link } from 'react-router-dom'
import NavLaptop from '../ui/NavLaptop'
import NavMobile from '../ui/NavMobile'
import NavTablet from '../ui/NavTablet'
import ShowMore from '../ui/ShowMore'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { windowSize, showNav, setShowLogIn } = useContext(DataContext)
    const width = windowSize?.width ?? 0
    const navigate = useNavigate()

    function showRgLog(){
        setShowLogIn(true)
    }

    return(
        <>
            <header className="flex justify-between p-5 items-center sticky top-0 bg-white z-10">
                <div onClick={() => navigate('/')} className='cursor-pointer'>
                    <i className="fa-solid fa-car-side text-2xl"></i>
                    <h1 className="inline font-bold ml-2 text-2xl">Motors</h1>
                </div>
                { width > 992 && (
                    <div className='[&_a]:m-5 [&_a]:hover:underline [&_a]:transition-text ease-in-out [&_a]:text-xl [&_a]:font-semibold'>
                        <Link to="/">Home</Link>
                        <Link to="/cars">Cars</Link>
                        <Link to="/about">About</Link>
                        <Link to="/Contact">Contact</Link>
                    </div>
                )}
                <div>
                    { width < 768 ? (<NavMobile setShowLogIn={setShowLogIn} showRgLog={showRgLog} />) : width < 992 ? (<NavTablet setShowLogIn={setShowLogIn} showRgLog={showRgLog} />) : (<NavLaptop setShowLogIn={setShowLogIn} showRgLog={showRgLog} />)}
                </div>
            </header>
            { showNav && (<ShowMore />)}
        </>
    )
}

export default Navbar