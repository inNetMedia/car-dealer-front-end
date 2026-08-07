import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"

function SellCar(){
    const { showLogIn } = useContext(DataContext)
    const [sellerInfo, setSellerInfo] = useState({})

    const handleTextChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setSellerInfo({
            ...sellerInfo,
            [e.target.name]: value
        })
        console.log(sellerInfo)
    }

    const submitOffer = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/sell`, {
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...sellerInfo, id: localStorage.getItem('id')})
            })
            if(response.ok){
                const json = await response.json()
                console.log(json)
            }

        }catch(err){
            console.log(err)
        }
    }

    return(
        <main className="p-4 flex justify-center">
            { showLogIn && (<LogReg />)}
            <div className="max-w-[1336px] w-full">
                <section className="flex items-center bg-white p-4 mb-10 mt-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="mr-6">
                        <Link to='/' className="text-xs flex-1 flex items-center font-bold"><i className="fa-solid fa-arrow-left mr-2"></i> Back</Link>
                    </div>
                    <div>
                        <h1 className="font-bold text-3xl">Sell Your Car</h1>
                        <p className="text-gray-600 text-sm">Fill in the details below and we'll get back to you with an offer</p>
                    </div>
                </section>

                <section>
                    <form onSubmit={(e) => submitOffer(e)} action="" className="[&_label]:block [&_label]:mt-5 [&_label]:font-bold [&_input]:bg-gray-300/75 [&_input]:w-full [&_input]:h-10 [&_input]:p-3 [&_input]:rounded-md [&_select]:w-full">
                        
                        <div className="bg-white p-3 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-10">
                            <h1 className="font-bold text-2xl">Car Details</h1>
                            <div className="md:flex">
                                <div className="md:flex flex-1 md:flex-col md:mr-2">
                                    <label htmlFor="make">Make*</label>
                                    <select onChange={(e) => handleTextChange(e)} name="make" id="make" required>
                                        <option disabled>Select Car Make</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="Mazda">Mazda</option>
                                        <option value="Volkswagen">Volkswagen</option>
                                        <option value="Chery">Chery</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    </select>

                                    <label htmlFor="model">Model*</label>
                                    <input onChange={(e) => handleTextChange(e)} name="model" type="text" placeholder="e.g 3 Series, A4, Model S" required id="model"/>

                                    <label htmlFor="year">Year*</label>
                                    <input onChange={(e) => handleTextChange(e)} name="year" type="number" value={new Date().getFullYear()} required placeholder="e.g 2020" id="year"/>

                                    <label htmlFor="transmission">Transmision</label>
                                    <select onChange={(e) => handleTextChange(e)} name="transmission" id="transmission" required>
                                        <option disabled>Select Transmission</option>
                                        <option value="automatic">Automatic</option>
                                        <option value="manual">Manual</option>
                                    </select>
                                </div>

                                <div className="md:flex flex-1 md:flex-col md:ml-2">
                                    <label htmlFor="condition">Condition</label>
                                    <select onChange={(e) => handleTextChange(e)} name="condition" id="condition" required>
                                        <option disabled>Select Car Condition</option>
                                        <option>Good</option>
                                        <option>Fair</option>
                                        <option>Mint</option>
                                        <option>Almost new</option>
                                    </select>

                                    <label htmlFor="color">Color</label>
                                    <input onChange={(e) => handleTextChange(e)} name="color" id="color" type="text" placeholder="e.g Midnight Black" required/>

                                    <label htmlFor="fuel">Fuel Type</label>
                                    <select onChange={(e) => handleTextChange(e)} name="fuel" required id="fuel">
                                        <option disabled>Select Fuel Type</option>
                                        <option value="petrol">Petrol</option>
                                        <option value="diesel">Diesel</option>
                                    </select>

                                    <label htmlFor="mileage">Mileage</label>
                                    <input onChange={(e) => handleTextChange(e)} name="mileage" id="milage" type="number" placeholder="e.g 2500" required/>
                                </div>

                            </div>

                            <label htmlFor="price">Asking Price</label>
                            <input onChange={(e) => handleTextChange(e)} name="price" type="number" maxLength="6" placeholder="Leave blank for a free valuation" />

                            <label htmlFor="details">Aditional Details</label>
                            <textarea onChange={(e) => handleTextChange(e)} name="details" className="w-full h-30 border border-gray-300 rounded-md p-2"  id="details" maxLength="50" placeholder="Service history, recent repairs, special features, reason for selling..." required></textarea>

                        </div>

                        <div className="mt-10 bg-white rounded-md p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-10">
                            <h1 className="font-bold text-2xl">Your Contact Details</h1>
                            <div className="md:flex md:items-center w-full">
                                <div className="md:mr-5 md:flex md:flex-1  md:flex-col">
                                    <label htmlFor="fullName">Full Name*</label>
                                    <input onChange={(e) => handleTextChange(e)} name="sellerNames" className="md:w-[80%]" type="text" placeholder="John Miller Joe" required id="fullName"/>
                                </div>

                                <div className="md:flex md:flex-1 md:flex-col">
                                    <label htmlFor="email">Email Address*</label>
                                    <input onChange={(e) => handleTextChange(e)} name="email" type="email" placeholder="john@example.com" required id="email"/>
                                </div>
                            </div>   

                            <label htmlFor="phone">Phone Number*</label>
                            <input onChange={(e) => handleTextChange(e)} name="phone" type="number" maxLength="10" placeholder="e.g 0123456789" required/>
                        </div>

                        <div className="flex justify-end mt-5">
                            <button className="bg-black text-white py-2 px-5 text-sm rounded-md cursor-pointer">Submit Listing</button>
                        </div>

                    </form>
                </section>
            </div>
        </main>
    )
}

export default SellCar