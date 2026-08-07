import CarCard from "./CarCard"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function CardHolder({ listingType, listingDesc, filter }){
    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [userId, setUserId] = useState(localStorage.getItem('id'))
    const [wishList, setWishList] = useState([])


    useEffect(() => {
        const getCarListings = async () => {
            try{
                const response = await fetch('https://car-dealer-api-2ie4.onrender.com/api/car', { credentials: 'include'})
                const data = await response.json()
                if(response.ok){
                    const tempArr = []
                    for(let i = filter; i <= filter+2; i++){
                        tempArr.push(data[i])
                    }
                    setListings(tempArr)
                }

            }catch(err){
                console.log(err)
            }finally{
                setIsLoading(false)
            }
        }

        getCarListings()
    },[])

    const navigate = useNavigate()
    function navigateToCars(){
        navigate('/cars')
    }


    return(
        
        <section className="p-4 w-[100%dvw] flex justify-center">
            <div className="max-w-[1336px] w-full">
                { isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <div className="flex justify-between mb-4">
                            <div>
                                <h1 className="font-semibold text-2xl">{listingType}</h1>
                                <span className="text-gray-500 text-sm">{listingDesc}</span>
                            </div>
                            <div>
                                <button className="border border-gray-400/50 p-3 active:bg-black/65 text-sm rounded-md cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out" onClick={navigateToCars}>View All<i className="fa-solid fa-arrow-right ml-3"></i></button>
                            </div>
                        </div>
                        <section className="md:grid md:grid-cols-3 md:gap-2">
                            { !listings.length ? (<h1>{listingType} listing not available</h1>) : (listings.map((list) => (<CarCard key={list._id} thumbnail={list.images[0]} brand={list.brand} model={list.model} price={list.price} variant={list.variant} id={list._id} year={list.year} />)))}
                        </section>
                    </>
                )}
            </div>
        </section>
    )
}

export default CardHolder