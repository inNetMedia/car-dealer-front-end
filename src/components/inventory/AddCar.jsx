import MoreOpt from "./MoreOpt"
import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContext"

function AddCar({ setShowForm }){
    const [showAvanced, setShowAdvanced] = useState(false)
    const [carData, setCarData] = useState({})
    const [posting, setPosting] = useState(false)
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    function handleRemovePopUp(){
        setShowForm(false)
    }

    function toogleAdvanced(){
        setShowAdvanced(!showAvanced)
    }

    const handleTextChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setCarData({
            ...carData,
            [e.target.name]: value
        })
    }

    function postNewListing(e){
        e.preventDefault()
        //setIsLoading(true)
        setPosting(true)
        console.log(carData)
    }

    function handleAddImages(e){
        setImages(e.target.files)
    }

    useEffect(() => {
        const formData = new FormData();

        for(let i = 0; i <= images.length-1; i++){
            formData.append('images', images[i])
        }
        const sendAllData = async (payload) => {
            try{
                const response = await fetch('http://localhost:3500/admin/api/car', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
                const data = await response.json()
                console.log(data)
            }catch(err){
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }

        const uploadFiles = async () => {
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:3500/admin/api/upload', {
                    method: 'POST',
                    credentials: 'include',
                    body: formData
                })
                const data = await response.json()
                if(response.ok){
                    console.log(data)
                    const payload = { ...carData, images: data.images }
                    setCarData(payload)
                    await sendAllData(payload)
                } else {
                    console.log('Upload failed', data)
                }
                
            }catch(err){
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }


        if(Object.keys(carData).length !== 0){
            uploadFiles()
        }
        
    },[posting])

    return(
        <section className="fixed top-0 bottom-0 left-0 right-0 bg-gray-600/40 z-11 flex justify-center items-center">
            <div className="bg-white w-[90%] z-12 px-5 max-h-[80%] overflow-y-scroll relative">
                <div className="flex justify-between left-0 right-0 top-0 bg-white items-center sticky p-3">       
                    <h1 className="font-bold text-xl sticky">Add New Car</h1>
                    <i onClick={handleRemovePopUp} className="fa-solid fa-xmark cursor-pointer text-red-600"></i>
                </div>  
                <form onSubmit={postNewListing}>
                    <section className="[&_label]:block [&_label]:mt-5 [&_label]:font-semibold [&_input]:bg-gray-300/75 [&_input]:w-full [&_input]:h-10 [&_input]:p-3 [&_input]:rounded-md [&_select]:w-full [&_select]:border-1 [&_select]:border-gray-400/75 [&_select]:rounded-md [&_select]:p-2  md:grid md:grid-cols-2 md:gap-2">
                        <div>
                            <label htmlFor="brand">Brand*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="brand" type="text" placeholder="e.g Volkswagen" required id="brand"/>
                        </div>

                        <div>
                            <label htmlFor="model">Model*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="model" type="text" placeholder="e.g Polo" id="model" required/>
                        </div>

                        <div>
                            <label htmlFor="variant">Variant*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="variant" type="text" placeholder="e.g R-Line" required id="variant"/>
                        </div>

                        <div>
                            <label htmlFor="year">Year*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="year" type="number" maxLength="4" id="year" required />
                        </div>

                        <div>
                            <label htmlFor="price">Price (R)*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="price" type="number" required id="price" maxLength="6" required/>
                        </div>

                        <div>
                            <label htmlFor="mileage">Mileage*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="mileage" type="number" maxLength="6" id="mileage required"/>
                        </div>

                        <div>
                            <label htmlFor="category">Category*</label>
                            <select onChange={(e) => handleTextChange(e)} name="category" id="category" required>
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
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="doors" type="number" id="doors" required />
                        </div>

                        <div>
                            <label htmlFor="seats">Number of Seats*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="seats" type="number" id="seats" required />
                        </div>

                        <div>
                            <label htmlFor="driveTrain">Drive Train*</label>
                            <select onChange={(e) => handleTextChange(e)} id="driveTrain" name="driveTrain" required>
                                <option>Select Drive Train</option>
                                <option value="FWD">Front Wheel Drive (FWD)</option>
                                <option value="RWD">Rear Wheel Drive (RWD)</option>
                                <option value="4WD">Four Wheel Drive (4WD)</option>
                                <option value="AWD">All Wheel Drive (AWD)</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="fuel">Fuel Type*</label>
                            <select onChange={(e) => handleTextChange(e)} name="fuelType" id="fuel" required>
                                <option>Select Fuel Type</option>
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="fuelCapacity">Fuel Capacity*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="fuelCapacity" type="number" id="fuelCapacity" required />
                        </div>

                        <div>
                            <label htmlFor="fuelConsumption">Fuel Consumption*</label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="fuelConsumption" type="number" id="fuelConsumption" required />
                        </div>

                    
                        <div>
                            <label htmlFor="transmission">Transmission*</label>
                            <select onChange={(e) => handleTextChange(e)} name="transmission" id="transmission" required>
                                <option>Select Transmission Type</option>
                                <option value="automatic">Automatic</option>
                                <option value="manual">Manual</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="images">Images*</label>
                            <input autoComplete="false" className="cursor-pointer" onChange={(e) => handleAddImages(e)} name="images" type="file" id="images" required accept="images/*" multiple/>
                        </div>

                        <div>
                            <label htmlFor="features">Features* <span className="text-red-400">(comma-separated)</span></label>
                            <input autoComplete="false" onChange={(e) => handleTextChange(e)} name="features" type="text" id="features" placeholder="e.g Twin-Turbo Engine, Carbon Roof, Premium Sound" />
                        </div>

                        <div>
                            <label htmlFor="desc">Description*</label>
                            <textarea autoComplete="false" onChange={(e) => handleTextChange(e)} name="description" className="w-full h-30 border-1 border-gray-400 rounded-md p-2" id="desc" placeholder="Breif description of the car"></textarea>
                        </div>
                    </section>

                    <div className="text-center my-10 font-semibold text-lg text-gray-500 hover:animate-pulse cursor-pointer" onClick={toogleAdvanced}>{ !showAvanced ? (<>More Options</>) : (<>Less Options</>)}</div>
                    
                    { showAvanced && (<MoreOpt carData={carData} setCarData={setCarData} />)}


                    <div className="mt-5 border-t-1 py-4 border-gray-400 font-semibold">
                        <input onChange={(e) => handleTextChange(e)} name="featured" className="accent-black size-4 mr-1" type="checkbox" id="featured"/>
                        <label htmlFor="featured">Mark as Featured</label>
                        <input onChange={(e) => handleTextChange(e)} name="latest" className="accent-black ml-6 size-4 mr-1" type="checkbox" id="latest"/>
                        <label htmlFor="latest">Mark as latest</label>
                    </div>


                    <div className="flex justify-end items-center my-8">
                        <button className="mr-4 bg-white border-1 border-gray-400 px-3 py-2 rounded-md cursor-pointer" onClick={handleRemovePopUp}>Cancel</button>
                        <button className="bg-black text-white px-3 py-2 rounded-md font-bold cursor-pointer" type="submit">{ isLoading ? (<><i className="fa-solid fa-circle-notch animate-spin"></i> Uploading</>) : (<><i className="fa-regular fa-floppy-disk mr-2"></i>Add Car</>)}</button>
                    </div>

                </form>

            </div>
        </section>
    )
}

export default AddCar