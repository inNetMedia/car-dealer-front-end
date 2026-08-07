import CarCard from "../components/inventory/CarCard"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"

function AllCars(){
    const { showLogIn } = useContext(DataContext)
    const [carListings, setCarListings] = useState([])
    const [filterURL, setFilterURL] = useState('https://car-dealer-api-2ie4.onrender.com/api/car/filter?q=all')
    const [filterOptions, setFilterOptions] = useState([
        {
            type:'all',
            selected: true,
            value: 'All'
        },
        {
            type:'Sedan',
            selected: false,
            value: 'Sedan'
        },
        {
            type:'SUV',
            selected: false,
            value: 'suv'
        },
        {
            type:'Sports',
            selected: false,
            value: 'sports'
        },
        {
            type:'Luxury',
            selected: false,
            value: 'luxury'
        },
        {
            type: 'Hatchback',
            selected: false,
            value: 'Hatchback'
        }
    ])

    useEffect(() => {
        // const fetchCars = async () => {
        //     try{
        //         const response = await fetch('https://car-dealer-api-2ie4.onrender.com/api/car')
        //         const data = await response.json()
        //         if(response.ok){
        //             setCarListings(data)
        //         }

        //     }catch(err){
        //         console.log(err)
        //     }
        // }

        const filterListings = async () => {
            console.log(filterURL)
            try{
                const response = await fetch(filterURL)
                const data = await response.json()
                if(response.ok){
                    setCarListings(data)
                }
                console.log(data)
            }catch(err){
                console.log(err)
            }
        }

        //fetchCars()
        filterListings()
        console.log('fetching cars')
    },[filterURL])

    const handleSetFilter = (filter) => {
        setFilterURL(`https://car-dealer-api-2ie4.onrender.com/api/car/filter?q=${filter}`)
        console.log(filterURL)
        const updatedList = filterOptions.map((item) => {
            if(item.type === filter){
                return {
                    type: item.type,
                    selected: true,
                    value: item.value
                }
            }else{
                return {
                    type: item.type,
                    selected: false,
                    value: item.value
                }
            }
        })
        setFilterOptions(prev => updatedList)
    }

    const handleSearchQuery = (search) => {
        setFilterURL(`https://car-dealer-api-2ie4.onrender.com/api/car/search?q=${search}`)
    }

    return(
        <section>
            { showLogIn && (<LogReg />)}
            <div className="bg-black text-white p-8 flex-1">
                <h1 className="font-bold text-4xl mb-5">Our Fleet</h1>
                <p>Every vehicle in our showroom -- hand-picked, fully inspected, ready to drive.</p>
            </div>
            <div className="flex justify-center mt-5 mb-5">
                <div className="relative w-[93%] max-w-3xl ">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
                        </svg>
                    </div>

                    <input 
                        type="text" 
                        placeholder="Search by year, brand or model..." 
                        className="w-full rounded-md border border-slate-900/10 bg-gray-300 py-2 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-gray-900/5 focus:outline-none focus:ring-1 focus:ring-black/20 "
                        onChange={(e) => handleSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-[100%dvw] flex justify-center items-center flex-col">
                <div className="m-5 p-3 items-center inline border border-gray-400/50 w-full max-w-[1336px]">
                    <i className="fa-solid fa-sliders mr-2"></i>
                    <select onChange={(e) => handleSetFilter(e.target.value)} name="Sort">
                        <option disabled>Filter results</option>
                        <option value="dyear">Newest First</option>
                        <option value="year">Oldest</option>
                        <option value="mileage">Least Milage</option>
                        <option value="dmileage">Most Mileage</option>
                        <option value="price">Price Low to High</option>
                        <option value="dprice">Price High to Low</option>
                    </select>
                </div>
                
                <div className=" w-[100%] flex flex-wrap md:flex  justify-start [&_span]:text-center [&_span]: mt-10 [&_span]:mr-6   pl-5 [&_span]:bg-gray- [&_span]:px-3 [&_span]:cursor-pointer max-w-[1336px]">
                    { filterOptions.map((filter) => (<span className="mb-5" key={filter.type} onClick={() => handleSetFilter(filter.type)} style={ filter.selected ? {backgroundColor: 'black', color: 'white', borderRadius: '5px' } : { backgroundColor:'transparent', color: 'black'}}>{filter.type}</span>)) }
                </div>

                <main style={ !carListings.length ? { display: 'flex'} : { display: 'grid' }} className="p-5 md:grid md:grid-cols-3 md:gap-5 w-full items-center max-w-[1336px]">
                    { !carListings.length ? (<h1 className="text-center font-bold text-3xl my-15">Listings not found</h1>) : carListings.map((list) => (<CarCard key={list._id} brand={list.brand} price={list.price} variant={list.variant} year={list.year} model={list.model} thumbnail={list.images[0]} id={list._id} />))}
                </main>
            </div>
        </section>
    )
}

export default AllCars