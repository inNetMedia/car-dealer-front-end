import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import LogReg from '../components/inventory/LogReg';
import { DataContext } from '../context/DataContext';
import ViewSkeleton from '../components/skeletons/ViewSkeleton';

function ViewCar(){
    const navigate = useNavigate()
    const location = useLocation()
    const parameter = useParams()
    const [carListing, setCarListing] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [viewImage, setViewImage] = useState()
    const [viewFull, setViewFull] = useState(false)

    const { showLogIn } = useContext(DataContext)

    function handleBack(){
        
            navigate(-1)
    }

    useEffect(() => {
        console.log(parameter.id)

        const getListing = async () => {
            try{
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/car/${parameter.id}`)
                const data = await response.json()
                if(response.ok){
                    console.log(data)
                    setCarListing(data)
                    setViewImage(data.images[0])
                }

            }catch(err){
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }
        getListing()

    },[])

    function scrollFullView(method){
        let currentIndex = carListing.images.indexOf(viewImage)

        if(method === 'acending'){
            console.log(currentIndex)
            if(currentIndex+1 == carListing.images.length){
                currentIndex = -1
            }
            currentIndex++
            console.log(currentIndex)
            setViewImage(carListing.images[currentIndex])
        }else if(method == 'decending'){
            if(currentIndex == 0){
                currentIndex = carListing.images.length
            }
            currentIndex--
            console.log(currentIndex)
            setViewImage(carListing.images[currentIndex])
        }
    }

    return(
        <main className='p-5 flex w-[100%] justify-center items-center'>
            <div className='md:max-w-[1336px]'>
                { viewFull && (<div className='bg-black fixed top-0 bottom-0 right-0 left-0 z-100 flex items-center justify-center'>
                    <i onClick={() => setViewFull(false)} className="cursor-pointer fa-solid fa-xmark absolute top-3 text-white text-5xl right-5"></i>
                    <i onClick={() => scrollFullView('decending')} className="fa-solid fa-chevron-left text-white absolute text-6xl left-5 cursor-pointer"></i>
                    <img src={viewImage}/>
                    <span className='absolute bottom-20 text-white'>{carListing.images.indexOf(viewImage)+1}/{carListing.images.length}</span>
                    <i onClick={() => scrollFullView('acending')} className="fa-solid fa-chevron-right text-white absolute right-5 text-6xl cursor-pointer"></i>
                </div>)}

                { showLogIn && (<LogReg />)}
                <button onClick={handleBack} className='mb-8 cursor-pointer'>
                    <i className="fa-solid fa-arrow-left mr-3"></i>Back 
                </button>
                { isLoading ? (<ViewSkeleton />) : 
                    <div className='flex lg:flex-row flex-col lg:items-start justify-center lg:gap-4 max-w-[800px] lg:max-w-full'>
                        <div className='md:flex md:flex-col max-w-170'>
                            <div className='mb-5 flex justify-center w-full  md:h-130 h-90'>
                                <img onClick={() => setViewFull(true)} src={viewImage} className='rounded-md object-cover cursor-pointer w-full h-full '/>
                            </div>
                            <div className='flex gap-1 [&_img]:rounded-md mb-2 overflow-auto lg:overflow-clip'>
                                { carListing.images.map((image) => (<img onClick={() => setViewImage(image)} className='size-20 object-cover cursor-pointer' src={image} />))}
                            </div>
                        </div>

                        <section className='md:flex md:flex-col md:flex-[40%] md:min-w-100 max-w-170'>
                            <div>
                                <h1 className='font-bold text-xl'>R {carListing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h1>
                                <h1 className='font-bold text-xl'>{carListing.year} {carListing.brand} {carListing.model}</h1>
                                <span>{carListing.variant}</span>
                            </div>

                            <div className='[&_span]:text-gray-600 bg-white rounded-md p-4 mt-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'>
                                <h2><i className="fa-solid fa-car-side"></i> Key Specifications</h2>
                                <div className='text-xs mt-5 grid grid-cols-2 gap-4'>
                                    <div>
                                        <i className="fa-solid fa-gauge-high mr-1"></i>
                                        <span>Mileage</span>
                                        <h2 className='font-bold'>{carListing.mileage} km</h2>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-gas-pump"></i>
                                        <span> Fuel Type</span>
                                        <h2 className='font-bold'>{carListing.specs.engine.fuelType}</h2>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-gears"></i>
                                        <span> Transmission</span>
                                        <h2 className='font-bold'>{carListing.specs.transmission}</h2>
                                    </div>
                                    <div>
                                        <i className="fa-regular fa-calendar"></i>
                                        <span> Year</span>
                                        <h2 className='font-bold'>{carListing.year}</h2>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white rounded-md p-4 mt-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'>
                                <h1 className='font-bold'>Description</h1>
                                <p className='text-sm text-gray-600'>{carListing.description}</p>
                                <h1 className="font-bold mt-5">Features</h1>
                                <ul className="grid grid-cols-2 list-disc list-inside space-y-1 [&_li]:text-xs">
                                    <li>Twin-Turbo</li>
                                    <li>Carbon-Fiber Roof</li>
                                    <li>19' Alloy Wheels</li>
                                    <li>Leather Seats</li>
                                </ul>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <button className='bg-black text-white p-1 rounded-md mb-2 cursor-pointer'><i className="fa-solid fa-phone"></i> Call</button>
                                <button className='p-1 bg-green-400 rounded-md cursor-pointer'><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                            </div>
                        </section>
                    </div>
            }
           </div>
        </main>
    )
}

export default ViewCar