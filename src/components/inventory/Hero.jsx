import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function Hero(){
    const navigate = useNavigate('')
    const [query, setQuery] = useState()
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const searchListings = async () => {
            console.log(query)
            try{
                const response = await fetch(query,{ credentials: 'include'})
                const data = await response.json()
                if(response.ok){
                    console.log(data)
                    setSearchResults(data)
                }
            }catch(err){
                console.log(err)
            }
        }
        if(searchResults !== null){
            searchListings()
        }
    },[query])

    return(
       <div className="bg-[url('/blake-meyer-CRNbHjNaljo-unsplash.jpg')] bg-cover bg-center h-130 w-full">
            <div className="w-full h-full text-white flex flex-col items-center justify-center text-center bg-black/15">
                <h1 className="text-4xl font-bold m-4">Drive Your Dreams</h1>
                <p>Discover the finest collection of luxury and perfomance vehicles</p>
                <input onChange={(e) => setQuery(`${import.meta.env.VITE_API_URL}/api/car/search?q=${e.target.value}`)} className="max-w-2xl bg-white/30 text-sm w-[80dvw]  h-12 m-8 rounded-full pl-4 backdrop-blur-sm border border-white/80" type="text" placeholder="Search by brand, model, or category..."/>  
                <div className="items-center flex flex-col w-[80%] max-w-2xl justify-center md:flex-row gap-1">
                    <button onClick={() => navigate('/cars')} className="mb-3 max-w-lg w-[100%] md:w-[50%] cursor-pointer transition-all ease-in-out p-1.5 text-sm bg-white/30 rounded-md backdrop-blur-sm border border-white/80">{ searchResults.length ? (<><i className="fa-solid fa-sliders mr-3"></i>Search {searchResults.length} cars</>) : (<><i className="fa-solid fa-magnifying-glass mr-3"></i>Search</>)}</button>
                    <button onClick={() => navigate('/cars')} className="bg-gray-700 p-2 text-sm rounded-md mb-3 max-w-lg w-[100%] md:w-[50%] cursor-pointer transition-all ease-in-out hover:bg-gray-800">Browse Cars<i className="fa-solid fa-arrow-right ml-3"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Hero