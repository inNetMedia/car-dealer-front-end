import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"
import { Link } from "react-router-dom"

function Contact(){
    const { showLogIn } = useContext(DataContext)
    const [message, setMessage] = useState()
    const whatsappUrl = `https://wa.me/271234567896?text=${message}`

    return(
        <section className="flex-1">
            { showLogIn && (<LogReg />)}
            <div className="bg-black text-white p-5 py-10">
                <div className="max-w-[]">
                    <p className="text-gray-400 text-sm font-semibold mb-2">WE'D LOVE TO HEAR FROM YOU</p>
                    <h1 className="font-bold text-4xl">Get In Touch</h1>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="p-5 w-full max-w-[1336px] md:flex flex flex-col lg:flex-row justify-center items-start">
                    <section className="lg:w-[40%]">
                        <div className="flex gap-3 items-start mb-10">
                            <div className="">
                                <i className="fa-solid fa-map-location-dot text-2xl bg-gray-300 p-3"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text">Showroom</h1>
                                <p className="text-gray-600">123 Polokwane, Landdros Mare</p>
                                <p className="text-gray-600">0700, Polokwane, South Africa, 0700</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start mb-10">
                            <div className="">
                                <i className="fa-solid fa-phone text-2xl bg-gray-300 p-3"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text">Phone</h1>
                                <p className="text-gray-600">+27 123 456 7896</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start mb-10">
                            <div className="">
                                <i className="fa-regular fa-envelope text-2xl bg-gray-300 p-3"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text">Email</h1>
                                <p className="text-gray-600">info@nnmotors.com</p>
                                <p className="text-gray-600">sales@nnmotors.com</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-start mb-10">
                            <div className="">
                                <i className="fa-regular fa-clock text-2xl bg-gray-300 p-3"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text">Opening Hours</h1>
                                <p className="text-gray-600">Monday - Friday<span className="ml-3 font-bold">9:00AM - 7:00PM</span></p>
                                <p className="text-gray-600">Saturday<span className="ml-3 font-bold">10:00AM - 6:00PM</span></p>
                                <p className="text-gray-600">Sunday<span className="ml-3 font-bold">Closed</span></p>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h1 className="font-bold text-lg [&_a]:hover:cursor-pointer">Follow Us</h1>
                            <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                            <Link to=""><i className="fa-brands fa-x-twitter mx-5"></i></Link>
                            <Link to=""><i className="fa-brands fa-facebook-f"></i></Link>
                        </div>
                    </section>

                    <section className="lg:w-[60%] w-full">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116716.15724045568!2d29.3687057259869!3d-23.911597510342638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d8401183307b%3A0xa720ddd4b18e4df7!2sPolokwane!5e0!3m2!1sen!2sza!4v1786118559143!5m2!1sen!2sza" height="450" style={{border:0, display:'flex', width:'100%'}} allowFullscreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                        <div className="mt-5  p-5 rounded-md border-1 border-gray-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
                            <h1 className="font-bold text-2xl">Send Us a Message</h1>
                            <form className="[&_label]:block [&_label]:mt-2 [&_label]:font-semibold md:grid md:grid-cols-2 md:gap-4 [&_input]:bg-gray-300/75 [&_input]:w-full [&_input]:h-10 [&_input]:p-3 [&_input]:rounded-md ">
                                <div>
                                    <label>Full Name*</label>
                                    <input required placeholder="John Smith" />
                                </div>

                                <div>
                                    <label>Subject*</label>
                                    <input required placeholder="e.g General Enquiry" />
                                </div>
                                <div>
                                    <label>Message*</label>
                                    <textarea className="w-full h-30 border-1 border-gray-400 rounded-md p-2" required placeholder="How can we help you?" ></textarea>
                            
                                    <div className="flex items-end w-full">
                                        <Link 
                                            to={whatsappUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="mt-4 bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center font-semibold hover:bg-black/80 transition-colors"
                                            >
                                            <i className="fa-brands fa-whatsapp mr-2"></i>
                                            Send WhatsApp
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Contact