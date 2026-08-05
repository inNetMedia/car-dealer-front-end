import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <footer className="bg-gray-800 text-gray-300 p-5">
            <section className="border-b border-slate-200/30 pb-8 md:grid md:grid-cols-3 md:gap-5">
                <div className="[&_a]:mr-3 [&_a]:hover:text-white transition-all ease-in-out">
                    <i className="fa-solid fa-car-side text-lg"></i>
                    <h1 className="inline font-bold ml-2 text-lg">Motors</h1>
                    <p className="text-xs mt-3 mb-3 max-w-xs">
                        With over years of experience in the business, we have built a reputation for providing our customers with pre-owned cars at affordable prices. 
                    </p>
                    <Link><i className="fa-brands fa-instagram"></i></Link>
                    <Link><i className="fa-brands fa-x-twitter"></i></Link>
                    <Link><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link><i className="fa-brands fa-youtube"></i></Link>
                </div>

                <div className="flex flex-col mt-5 [&_a]:mt-3 md:flex md:justify-center [&_a]:hover:underline transition-all ease-in-out">
                    <h2 className="font-bold text-lg">Quick Links</h2>
                    <Link to='/about'>About Us</Link>
                    <Link to='/cars'>Our Cars</Link>
                    <Link to='/sell'>Trade-In</Link>
                    <Link to='/'>Financing</Link>
                    <Link to='/'>Service</Link>
                </div>

                <div className="flex flex-col mt-5">
                    <h2 className="font-bold text-lg">Contact</h2>
                    <span>123 Polokwane City</span>
                    <span>Limpopo, 132</span>
                    <span>Phone: 012 345 6789</span>
                    <span>Email: info@nnmotors.co.za</span>
                </div>

            </section>
            <div className="text-center mt-2 text-xs">
                &copy; {new Date().getFullYear()} NNMotors. All rights reserved
            </div>
        </footer>
    )
}

export default Footer