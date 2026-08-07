import { useState, useEffect } from 'react'
import apiRequest from '../../api/apiRequest'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react'

function AdminList( { brand, price, year, model, variant, thumbnail, id, sold, setShowForm, refreshListings, category, mileage, transmission, setListingId }){
    const [ listToDel, setListToDel ] = useState()
    const { windowSize, showNav, changeListState, showLogIn, setShowEditListing } = useContext(DataContext)
    const width = windowSize?.width ?? 0

    const handleDeleteListing = async () => {
        const url = `${import.meta.env.VITE_API_URL}/admin/api/car`
        const optionsObj = {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }
        await apiRequest(url, optionsObj)
        if (refreshListings) refreshListings()
    }

    const handleSellCar = async () => {
        const url = `${import.meta.env.VITE_API_URL}/admin/api/car/${id}/mark-sold`
        const optionsObj = {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await apiRequest(url, optionsObj)
        if (refreshListings) refreshListings()
    }

    return(
        <div className=' p-2 flex gap-4 border-b-1 border-gray-400 [&_img]:h-full px-4 h-18 md:text-lg'>
            <div className='flex flex-[40%] items-center md:mr-10'>
                <div className='flex mr-2'><img className='max-h-14 object-cover' src={thumbnail} /></div>
                <div className='flex flex-[10%]'>
                    <h1 className='font- md:font-semibold text-xs md:text-lg'>{brand} {model} {variant}</h1>
                </div>
            </div>
            { width > 768 && (<>
                <div className="flex flex-[20%] items-center justify-start w-30 font-semibold">{mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km</div>
            </>) }

            { width > 992 && (<>
                <div className="flex flex-[20%] items-center justify-start w-50 font-semibold">{year}</div>
            </>) }


            { width > 1200 && (<>
                <div className="flex flex-[20%] items-center font-semibold">{category}</div>
                <div className="flex flex-[20%] items-center font-semibold">{transmission}</div>

            </>) }

            <div className='flex flex-[20%]  items-center font-semibold text-'>
                R {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </div>
            
            <div className='flex justify-start items-center text-lg md:text-1xl flex-[20%]'>
                { !sold ? (<i onClick={handleSellCar} className="fa-regular fa-calendar-check"></i>) : (<i onClick={handleSellCar} className="fa-solid fa-arrow-rotate-left"></i>)}
                <i onClick={() => { setShowEditListing(true); setListingId(id) }} className="fa-regular fa-pen-to-square m-4 md:mx-8"></i>
                <i onClick={handleDeleteListing} className="fa-regular fa-trash-can text-red-500"></i>
            </div>

        </div>
    )
}

export default AdminList