import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"
import officeImg from '/pexels-fatih-guney-337108406-18070140.jpg'
import mercedesImg from '/pexels-krislucas90-3264504.jpg'
import carBack from '/pexels-hamza01nsr-8586689.jpg'

function About(){
    const { showLogIn } = useContext(DataContext)
    const date = new Date().getFullYear()

    return(
        <section className="flex-1">
            { showLogIn && (<LogReg />)}
            <section className="flex justify-end items-start flex-col text-white bg-[url('/conor-samuel-aIbR-deTiWY-unsplash.jpg')] bg-cover bg-center h-140 w-full">
                <div className="w-full bg-black/40">
                    <div className="p-5 flex justify-center">
                        <div className="max-w-[1336px] w-full">
                            <span>EST.1995 Polokwane</span>
                            <h1 className="text-5xl font-bold">{date - 1995} Years of<br></br> Driving Excellence.</h1>
                        </div>
                    </div>
                    <div className="bg-black w-full p-5  gap-5 mt-5 shadow-[0_-10px_30px_rgba(0,0,0,0.6)] rounded-lg flex justify-center">
                        <div className="max-w-[1336px] md:flex md:justify-between grid grid-cols-2 w-full gap-3">
                            <div className="text-center">
                                <h1 className="font-bold text-2xl">100+</h1>
                                <span>Cars sold Annually</span>
                            </div>

                            <div className="text-center">
                                <h1 className="font-bold text-2xl">{date - 1995}</h1>
                                <span>Years in Business</span>
                            </div>

                            <div className="text-center">
                                <h1 className="text-2xl font-bold">40</h1>
                                <span>Expert Specialists</span>
                            </div>

                            <div className="text-center">
                                <h1 className="font-bold text-2xl">98%</h1>
                                <span>Customer Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center mt-10 flex-col lg:flex-row  bg-white">
                <div className="w-full max-w-[1336px] flex flex-col p-5 lg:flex-row lg:gap-10">
                    <div className="lg:w-[50%]">
                        <span className="font-bold my-5">OUR STORY</span>
                        <h1 className="font-bold text-4xl mb-2">Built on passion.</h1>
                        <h1 className="font-bold text-4xl">Trusted by thousands.</h1>
                        <p className="mb-8 mt-7 text-gray-600">
                            NN Motors was born from a single conviction: buying a luxury car should feel as extraordinary as driving one.
                            Sammy Ashford founded the company in 1995 with a small showroom and obsession with quality that has never wavered.
                        </p>
                        <p className="text-gray-600">
                            Today we represent the world's most prestigious marques, from Ferrari and Porsche to Audi and Mercedes-Benz.
                            Every car on our floor passed rigorous 47-points inspection, and every client receives the kind of personalised
                            attention that turns a transaction into a milestone.
                        </p>
                    </div>

                    <div className="flex gap-3 my-10 lg:w-[50%]">
                        <div className="flex flex-col justify-start w-[50%]">
                            <div className="h-[50%]">
                                <img className="h-100 object-cover w-full" src={officeImg} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 justify-center w-[50%]">
                            <div>
                                <img className="h-60 object-cover w-full" src={mercedesImg} />
                            </div>

                            <div>
                                <img className="h-50 object-cover w-full" src={carBack} />
                            </div>
                        </div>

                    </div>

                </div>
            </section> 

            <section className="w-full flex justify-center my-15">
                <div className="w-full max-w-[1336px]">
                    <p className="text-center font-bold text-sm">WHAT WE STAND FOR</p>
                    <h1 className="text-center font-bold text-2xl">Our Values</h1>

                    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row p-5 gap-3 [&_div]:bg-white">
                        <div className="border-t-2 border-black p-3 py-8 ">
                            <i className="fa-solid fa-shield-halved text-2xl"></i>
                            <h3 className="font-bold text-lg">Integrity</h3>
                            <p className="text-gray-600">Every price is transparent. No hidden fees, no pressure ever</p>
                        </div>

                        <div className="border-t-2 border-black p-3 py-8">
                            <i className="fa-solid fa-award text-2xl"></i>
                            <h3 className="font-bold text-lg">Excellence</h3>
                            <p className="text-gray-600">We only carry cars that meet our strict 47-point inspection standard.</p>
                        </div>

                        <div className="border-t-2 border-black p-3 py-8">
                            <i className="fa-regular fa-heart text-2xl"></i>
                            <h3 className="font-bold text-lg">Passion</h3>
                            <p className="text-gray-600">Our team are car enthusiasts first. We love what we sell.</p>
                        </div>

                        <div className="border-t-2 border-black p-3 py-8">
                            <i className="fa-regular fa-gem text-2xl"></i>
                            <h3 className="font-bold text-lg">Luxury</h3>
                            <p className="text-gray-600">Where your high standards meet our flawless execution.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full flex justify-center bg-white py-10">
                <div className="p-5">
                    <p className="text-center font-bold text-sm">OUR JOURNEY</p>
                    <h1 className="text-2xl font-bold my-3 text-center mb-10">A Quater Century of Milestones</h1>

                    <div className="max-w-[1336px] flex flex-col gap-10">
                        <div className="flex gap-5">
                            <div>
                                <span className="bg-white ab">1995</span>
                            </div>

                            <div>
                                <i className="fa-regular fa-circle-dot"></i>
                            </div>

                            <div>
                                <h1 className="font-bold">Founded</h1>
                                <p className="text-sm text-gray-600">NN Motors opens its first showroom on Landdros Mare Polokwane</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <span className="bg-white ab">2005</span>
                            </div>

                            <div>
                                <i className="fa-regular fa-circle-dot"></i>
                            </div>

                            <div>
                                <h1 className="font-bold">Brand Expansion</h1>
                                <p className="text-sm text-gray-600">We bring Porsche and R8 to our floor, cementing our status in the ultra-luxury segment</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <span className="bg-white ab">2012</span>
                            </div>

                            <div>
                                <i className="fa-regular fa-circle-dot"></i>
                            </div>

                            <div>
                                <h1 className="font-bold">Award Winning</h1>
                                <p className="text-sm text-gray-600">Named "Best Luxury Dealership in Polokwane" by Motor Trend Polokwane</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div>
                                <span className="bg-white ab">{new Date().getFullYear()}</span>
                            </div>

                            <div>
                                <i className="fa-regular fa-circle-dot"></i>
                            </div>

                            <div>
                                <h1 className="font-bold">Today</h1>
                                <p className="text-sm text-gray-600">Over 100 cars sold annually and a {new Date().getFullYear() - 1995}-year legacy of trust</p>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

        </section>
    )
}

export default About