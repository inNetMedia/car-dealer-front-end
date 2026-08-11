import MoreOptEdit from "../ui/MoreOptEdit"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContext"
import apiRequest from "../../api/apiRequest"

function EditListing({ setShowForm, listingId }){
    const { setShowEditListing, showEditListing } = useContext(DataContext)
    const [showAvanced, setShowAdvanced] = useState(false)
    const [carData, setCarData] = useState({})
    const [posting, setPosting] = useState(false)
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [listingInfo, setListingInfo] = useState()
    const [btnText, setBtnText] = useState('Update')


    function toogleAdvanced(){
        setShowAdvanced(!showAvanced)
    }

    const handleTextChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setListingInfo({
            ...listingInfo,
            [e.target.name]: value
        })
        console.log(listingInfo)
    }

    function postNewListing(e){
        e.preventDefault()
        //setIsLoading(true)
        setPosting(true)
        console.log(carData)
    }

    useEffect(() => {
        const getListing = async () => {
            try{
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/car/${listingId}`)
                if(response.ok){
                    const jsonData = await response.json()
                    console.log(jsonData)
                    setListingInfo(jsonData)
                    setIsLoading(false)
                }

            }catch(err){
                console.log(err)
            }
        }

        getListing()
    },[])

    const updateListing = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const response = await apiRequest(`${import.meta.env.VITE_API_URL}/admin/api/car/${listingId}/update`, {
                        method:'PUT',
                        credentials:'include',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(listingInfo)
                    })
        if(response.response.ok){
            setBtnText('Listing Updated')
            setIsLoading(false)
            window.location.reload()
        }
    }

    return(
        <section className="fixed top-0 bottom-0 left-0 right-0 bg-gray-600/40 z-11 ">
            <div className="max-w w-full h-[90dvh] flex justify-center items-center">
                { !isLoading && (
                <div className="bg-white w-[90%] z-12 px-5 max-h-[80%] overflow-y-scroll relative max-w-[1336px]">
                    <div className="flex justify-between left-0 right-0 top-0 bg-white items-center sticky p-3">       
                        <h1 className="font-bold text-xl sticky">Edit Car Listing</h1>
                        <i onClick={() => setShowEditListing(false)} className="fa-solid fa-xmark cursor-pointer text-red-600"></i>
                    </div>  
                    <form onSubmit={updateListing}>
                        <section className="[&_label]:block [&_label]:mt-5 [&_label]:font-semibold [&_input]:bg-gray-300/75 [&_input]:w-full [&_input]:h-10 [&_input]:p-3 [&_input]:rounded-md [&_select]:w-full [&_select]:border-1 [&_select]:border-gray-400/75 [&_select]:rounded-md [&_select]:p-2  md:grid md:grid-cols-2 md:gap-2">
                            <div>
                                <label htmlFor="brand">Brand*</label>
                                <input value={listingInfo.brand} autoComplete="false" onChange={(e) => handleTextChange(e)} name="brand" type="text" placeholder="e.g Volkswagen" required id="brand"/>
                            </div>

                            <div>
                                <label htmlFor="model">Model*</label>
                                <input value={listingInfo.model} autoComplete="false" onChange={(e) => handleTextChange(e)} name="model" type="text" placeholder="e.g Polo" id="model" required/>
                            </div>

                            <div>
                                <label htmlFor="variant">Variant*</label>
                                <input value={listingInfo.variant} autoComplete="false" onChange={(e) => handleTextChange(e)} name="variant" type="text" placeholder="e.g R-Line" required id="variant"/>
                            </div>

                            <div>
                                <label htmlFor="year">Year*</label>
                                <input value={listingInfo.year} autoComplete="false" onChange={(e) => handleTextChange(e)} name="year" type="number" maxLength="4" id="year" required />
                            </div>

                            <div>
                                <label htmlFor="price">Price (R)*</label>
                                <input value={listingInfo.price} autoComplete="false" onChange={(e) => handleTextChange(e)} name="price" type="number" required id="price" maxLength="6" required/>
                            </div>

                            <div>
                                <label htmlFor="mileage">Mileage*</label>
                                <input value={listingInfo.mileage} autoComplete="false" onChange={(e) => handleTextChange(e)} name="mileage" type="number" maxLength="6" id="mileage required"/>
                            </div>

                            <div>
                                <label htmlFor="category">Category*</label>
                                <select value={listingInfo.category} onChange={(e) => handleTextChange(e)} name="category" id="category" required>
                                    <option>Select Car Category</option>
                                    <option value="Hatchback">Hatch</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Bakkie">Bakkie</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sports">Sports</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="doors">Number of Doors*</label>
                                <input value={listingInfo.specs.comfort.doors} autoComplete="false" onChange={(e) => handleTextChange(e)} name="doors" type="number" id="doors" required />
                            </div>

                            <div>
                                <label htmlFor="seats">Number of Seats*</label>
                                <input value={listingInfo.specs.comfort.seats} autoComplete="false" onChange={(e) => handleTextChange(e)} name="seats" type="number" id="seats" required />
                            </div>

                            <div>
                                <label htmlFor="driveTrain">Drive Train*</label>
                                <select value={listingInfo.specs.handling.driveTrain} onChange={(e) => handleTextChange(e)} id="driveTrain" name="driveTrain" required>
                                    <option>Select Drive Train</option>
                                    <option value="FWD">Front Wheel Drive (FWD)</option>
                                    <option value="RWD">Rear Wheel Drive (RWD)</option>
                                    <option value="4WD">Four Wheel Drive (4WD)</option>
                                    <option value="AWD">All Wheel Drive (AWD)</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="fuel">Fuel Type*</label>
                                <select value={listingInfo.specs.engine.fuelType} onChange={(e) => handleTextChange(e)} name="fuelType" id="fuel" required>
                                    <option>Select Fuel Type</option>
                                    <option value="petrol">Petrol</option>
                                    <option value="diesel">Diesel</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="fuelCapacity">Fuel Capacity*</label>
                                <input value={listingInfo.specs.engine.fuelCapacity} autoComplete="false" onChange={(e) => handleTextChange(e)} name="fuelCapacity" type="number" id="fuelCapacity" required />
                            </div>

                            <div>
                                <label htmlFor="fuelConsumption">Fuel Consumption*</label>
                                <input value={listingInfo.specs.engine.fuelConsumption} autoComplete="false" onChange={(e) => handleTextChange(e)} name="fuelConsumption" type="number" id="fuelConsumption" required />
                            </div>

                        
                            <div>
                                <label htmlFor="transmission">Transmission*</label>
                                <select value={listingInfo.specs.transmission} onChange={(e) => handleTextChange(e)} name="transmission" id="transmission" required>
                                    <option>Select Transmission Type</option>
                                    <option value="automatic">Automatic</option>
                                    <option value="manual">Manual</option>
                                </select>
                            </div>
                            

                            <div>
                                <label htmlFor="features">Features* <span className="text-red-400">(comma-separated)</span></label>
                                <input value={listingInfo.features} autoComplete="false" onChange={(e) => handleTextChange(e)} name="features" type="text" id="features" placeholder="e.g Twin-Turbo Engine, Carbon Roof, Premium Sound" />
                            </div>

                            <div>
                                <label htmlFor="desc">Description*</label>
                                <textarea value={listingInfo.description} autoComplete="false" onChange={(e) => handleTextChange(e)} name="description" className="w-full h-30 border-1 border-gray-400 rounded-md p-2" id="desc" placeholder="Breif description of the car"></textarea>
                            </div>
                        </section>

                        <div className="text-center my-10 font-semibold text-lg text-gray-500 hover:animate-pulse cursor-pointer" onClick={toogleAdvanced}>{ !showAvanced ? (<>More Options</>) : (<>Less Options</>)}</div>
                        
                        { showAvanced && (<MoreOptEdit listingInfo={listingInfo} setListingInfo={setListingInfo} />)}


                        <div className="mt-5 border-t-1 py-4 border-gray-400 font-semibold">
                            <input checked={listingInfo.featured} onChange={(e) => handleTextChange(e)} name="featured" className="accent-black size-4 mr-1" type="checkbox" id="featured"/>
                            <label htmlFor="featured">Mark as Featured</label>
                            <input checked={listingInfo.latest} onChange={(e) => handleTextChange(e)} name="latest" className="accent-black ml-6 size-4 mr-1" type="checkbox" id="latest"/>
                            <label htmlFor="latest">Mark as latest</label>
                        </div>


                        <div className="flex justify-end items-center my-8">
                            <button className="mr-4 bg-white border-1 border-gray-400 px-3 py-2 rounded-md cursor-pointer" onClick={() => setShowEditListing(false)}>Cancel</button>
                            <button className="bg-black text-white px-3 py-2 rounded-md font-bold cursor-pointer" type="submit">{ isLoading ? (<><i className="fa-solid fa-circle-notch animate-spin"></i> Updating</>) : (<><i className="fa-regular fa-floppy-disk mr-2"></i>{btnText}</>)}</button>
                        </div>

                    </form>

                </div>)}
            </div>
        </section>
    )
}

export default EditListing