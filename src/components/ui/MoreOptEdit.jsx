import { useState } from "react"

function MoreOptEdit( { listingInfo, setListingInfo }){

    const handleTextChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setListingInfo({
            ...listingInfo,
            [e.target.name]: value
        })
        console.log(listingInfo)
    }

    return(
        <div className="[&_select]:w-full [&_select]:border-1 [&_select]:border-gray-400/75 [&_select]:rounded-md [&_select]:p-2 md:grid md:grid-cols-2 md:gap-2 [&_h1]:text-xl [&_h1]:font-bold">
            <div className="[&_h1]:text-xl ">
                <h1>Engine</h1>
                <div>
                    <label htmlFor="acceleration" className="block mt-5 font-semibold">Acceleration(s) 0-100km/h</label>
                    <input onChange={(e) => handleTextChange(e)} name="acceleration" type="number" id="acceleration" placeholder="e.g 10.5" className="bg-gray-300/75 w-full h-10 p-3 rounded-md " />
                </div>

                <div>
                    <label htmlFor="emmision" className="block mt-5 font-semibold">Emmision g/km</label>
                    <input onChange={(e) => handleTextChange(e)} name="emmision" id="emmision" placeholder="e.g 146g/km" type="number" className="bg-gray-300/75 w-full h-10 p-3 rounded-md "  />
                </div>

                <div id="position">
                    <label htmlFor="engine-position" className="block mt-5 font-semibold">Engine Position</label>
                    <select onChange={(e) => handleTextChange(e)} name="position" id="engine-position">
                        <option value="front">Front</option>
                        <option value="middle">Middle</option>
                        <option value="back">Back</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="engineSize" className="block mt-5 font-semibold">Engine Size (Liters)</label>
                    <input onChange={(e) => handleTextChange(e)} name="size" id="engineSize" maxLength="3" type="number" placeholder="e.g 2.0 L" className="bg-gray-300/75 w-full h-10 p-3 rounded-md " />
                </div>

                <div>
                    <label htmlFor="capacity" className="block mt-5 font-semibold">Capacity(CC)</label>
                    <input onChange={(e) => handleTextChange(e)} name="capacity" id="capacity" maxLength="3" type="number" placeholder="e.g 1000" className="bg-gray-300/75 w-full h-10 p-3 rounded-md "  />
                </div>

                <div>
                    <label htmlFor="cylinder-layout" className="block mt-5 font-semibold">Cylinder Layout</label>
                    <select onChange={(e) => handleTextChange(e)} name="cylinderLayout" id="cylinder-layout">
                        <option value="Inline">Inline /Straight (I)</option>
                        <option value="V-engine">V-Engine</option>
                        <option value="Boxer/flat">Boxer /Flat(H)</option>
                        <option value="W-engine">W-Engine(W)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="range" className="block mt-5 font-semibold">Range in Km</label>
                    <input onChange={(e) => handleTextChange(e)} name="range" placeholder="e.g 250" id="range" type="number" className="bg-gray-300/75 w-full h-10 p-3 rounded-md " />
                </div>

                <div>
                    <label htmlFor="torque" className="block mt-5 font-semibold">Torque(Nm)</label>
                    <input onChange={(e) => handleTextChange(e)} name="torque" placeholder="e.g 200" id="torque" type="number" className="bg-gray-300/75 w-full h-10 p-3 rounded-md "  />
                </div>
            </div>

            <div>
                <h1 className="mb-3 mt-5 md:mt-0">Safety</h1>
                <div>
                    <div className="flex items-center gap-3">
                        <input onChange={(e) => handleTextChange(e)} name="ABS" type="checkbox" id="ABS" className="size-5 accent-black"/>
                        <label htmlFor="ABS">Anti-lock Braking System (ABS)</label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input onChange={(e) => handleTextChange(e)} name="cruiseCtrl" type="checkbox" id="cruiseCtrl" className="size-5 accent-black"/>
                        <label htmlFor="cruiseCtrl">Cruise Control</label>
                    </div>

                    <label htmlFor="airbag" className="block mt-5 font-semibold">Airbag Quantity</label>
                    <input onChange={(e) => handleTextChange(e)} name="airbagQty" type="number" id="airbag" placeholder="e.g 4" className="bg-gray-300/75 w-full h-10 p-3 rounded-md " />

                    <div>
                        <label htmlFor="lampTech" className="block mt-5 font-semibold">Lamp Technology</label>
                        <select onChange={(e) => handleTextChange(e)} name="lampTech" id="lampTech">
                            <option value="LED">LED</option>
                            <option value="Xenon">Xenon / HID</option>
                            <option value="Halogen">Halogen</option>
                            <option value="Laser">Laser</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                        <input onChange={(e) => handleTextChange(e)} name="remoteCentralLocking" type="checkbox" id="remoteLocking" className="size-5 accent-black"/>
                        <label htmlFor="remoteLocking">Remote Central Locking</label>
                    </div>
                </div>
            
                <h1 className="mt-7 mb-3">Handling</h1>
                <div className="flex items-center gap-3">
                    <input onChange={(e) => handleTextChange(e)} name="powerSteering" type="checkbox" id="powerSteering" className="size-5 accent-black"/>
                    <label htmlFor="powerSteering">Power Steering</label>
                </div>

                <div className="flex items-center gap-3">
                    <input onChange={(e) => handleTextChange(e)} name="tractionCtrl" type="checkbox" id="tractionCtrl" className="size-5 accent-black"/>
                    <label htmlFor="tractionCtrl">Traction Control</label>
                </div>
            
                <h1 className="mt-7 mb-3">Comfort</h1>
                <div className="flex items-center gap-3">
                    <input onChange={(e) => handleTextChange(e)} name="AC" type="checkbox" id="AC" className="size-5 accent-black"/>
                    <label htmlFor="AC">Air Conditioning</label>
                </div>

                <div className="flex items-center gap-3">
                    <input onChange={(e) => handleTextChange(e)} name="electricWindows" type="checkbox" id="electricWindows"  className="size-5 accent-black"/>
                    <label htmlFor="electricWindows">Electric Windows</label>
                </div>

                <h1 className="mt-7 mb-3">Tech</h1>
                <div className="flex items-center gap-3">
                    <input onChange={(e) => handleTextChange(e)} name="steeringWheelCtrl" type="checkbox" id="steeringControl" className="size-5 accent-black"/>
                    <label htmlFor="">Steering Wheel Controls</label>
                </div>
                
                <div className="flex items-center gap-3">
                    <input onChange={(e) => handleTextChange(e)} name="infotainment" type="checkbox" id="infotainment" className="size-5 accent-black"/>
                    <label htmlFor="infotainment">Infotainment System</label>
                </div>

                <div className="flex items-center gap-3">
                    <input onChange={(e) => handleTextChange(e)} name="bluetooth" type="checkbox" id="bluetooth" className="size-5 accent-black"/>
                    <label htmlFor="bluetooth">Bluetooth</label>
                </div>
            </div>

            
            

        </div>
    )
}

export default MoreOptEdit