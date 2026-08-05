import AdminList from "../components/inventory/AdminList"
import { useState, useEffect } from 'react'
import AddCar from "../components/inventory/AddCar"
import { DataContext } from "../context/DataContext"
import { useContext } from "react"
import LogReg from "../components/inventory/LogReg"

function Admin(){
    const { windowSize, showNav, changeListState, showLogIn } = useContext(DataContext)
    const width = windowSize?.width ?? 0

    const [showForm, setShowForm] = useState(false)
    const [showSold, setShowSold] = useState(false)
    const [carListings, setCarListings] = useState([])
    const [soldListings, setSoldListings] = useState([])
    const [featured, setFeatured] = useState(0)
    const [isUpdating, setIsUpdating] = useState(false)
    const [listingId, setListingId] = useState()
    const [refreshCount, setRefreshCount] = useState(0)

    const refreshListings = () => setRefreshCount(prev => prev + 1)

    function handleAddCar(){
        setShowForm(true)
    }

    const activeStyle = {
        borderBottom: '2px solid black',
        fontWeight: 'bold'
    }
    const nonActiveStyle = {
        borderBottom: 'none'
    }

    const handleFeaturedListing = (data) => {
        const featuredList = data.map((item) => item.featured === false)
        setFeatured(featuredList.length)
    }


    useEffect(() => {
        const getListings = async () => {
            try{
                const response = await fetch('http://localhost:3500/admin/api/car', {
                    credentials: 'include'
                })
                const data = await response.json()
                setCarListings(data)
                handleFeaturedListing(data)
            }catch(err){
                console.log(err)
            }
        }   

        const getSoldListings = async () => {
            try{
                const response = await fetch('http://localhost:3500/admin/api/car/sold',{
                    credentials: 'include'
                })
                const data = await response.json()
                setSoldListings(data)
            }catch(err){
                console.log(err)
            }
        }   

        getListings()
        getSoldListings()   
    },[showSold, refreshCount])

    return(
        <main className="flex-1">
            { showLogIn && (<LogReg />)}
            { showForm && (<AddCar setShowForm={setShowForm} isUpdating={isUpdating} listingId={listingId} />) }

            <div className="bg-black p-5">
                <h1 className="text-white font-bold text-2xl">Admin Dashboard</h1>
                <p className="text-gray-400 text-sm">Manage your NN inventory</p>
                <button onClick={handleAddCar} className="bg-white cursor-pointer text-black/70 font-bold py-2 text-sm px-3 mt-4 rounded-md"><i className="fa-solid fa-plus mr-2"></i>Add New Car</button>
            </div>

            <section className="grid grid-cols-2 [&_i]:mr-3 mx-3 [&_h1]:font-bold [&_span]:text-sm gap-2 mt-4 bg-white rounded-md md:text-3xl p-4">
                <div className="flex items-center">
                    <i className="fa-solid fa-car"></i>
                    <div>
                        <h1>{ soldListings.length + carListings.length }</h1>
                        <span>Total Fleet</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <i className="fa-solid fa-car-side"></i>
                    <div>
                        <h1>{ carListings.length }</h1>
                        <span>In Stock</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <i className="fa-solid fa-check"></i>
                    <div>
                        <h1>{ soldListings.length }</h1>
                        <span>Sold</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    <div>
                        <h1>{ featured }</h1>
                        <span>Featured</span>
                    </div>
                </div>
            </section>


            <div className="mt-10 mx-3 flex justify-start mb-10 gap-5 items-center border-b-1 border-gray-500/40 md:text-lg">
                <span style={ !showSold ? activeStyle : nonActiveStyle } onClick={() => setShowSold(false)} className="border-b-2 border-black cursor-pointer">In stock ({ carListings.length })</span>
                <span style={ showSold ? activeStyle : nonActiveStyle } onClick={() => setShowSold(true)} className="cursor-pointer">Sold ({ soldListings.length })</span>
            </div>


            <section className="m-3 rounded-t-md border-gray-500/50  border-1">
                {/* <div className="flex bg-gray-300 p-3 text-sm text-gray-600/80 font-bold ">
                    <div className="flex flex-[50%]">Vehicle</div>
                     { width > 768 && (<><div className="flex flex-[20%] items-center justify-center w-30">Mileage</div></>) }
                     { width > 992 && (<><div className="flex flex-[20%] items-center justify-center">Year</div></>) }
                     { width > 1200 && (<><div className="flex flex-[20%] items-center justify-end">Category</div></>) }


                    <div className="flex ml-25 flex-[20%] justify-center">Price</div>
                    <div className="flex justify-start ml-25 flex-[20%]">Actions</div>
                </div> */}
                
                { (showSold && soldListings.length) ? soldListings.map((list) => (<AdminList key={list._id} brand={list.brand} price={list.price} year={list.year} model={list.model} variant={list.variant} thumbnail={list.images[0]} id={list._id} sold={list.sold} refreshListings={refreshListings} category={list.category} mileage={list.mileage} transmission={list.transmission} />)) : (!showSold && carListings.length) ? carListings.map((list) => (<AdminList key={list._id} brand={list.brand} price={list.price} year={list.year} model={list.model} variant={list.variant} thumbnail={list.images[0]} id={list._id} sold={list.sold} refreshListings={refreshListings} setShowForm={setShowForm} setIsUpdating={setIsUpdating} setListingId={setListingId} category={list.category} mileage={list.mileage} transmission={list.specs.transmission} />)) : (<h1 className="text-center font-semibold py-10">No Listing</h1>)  }

            </section>


        </main>
    )
}

export default Admin