import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CarCard({ brand, variant, model, year, price, thumbnail, id, latest }){
    const navigate = useNavigate()
    const [isFavourite, setIsFavourite] = useState(false)

    const handleAddLike = async (e) => {
        e.stopPropagation()
        if(isFavourite === false){    
            try{
                const response = await fetch(`${import.meta.env.VITE_API_URL}/user/wishlist`, {
                    method:'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ listingId: id, userId: localStorage.getItem('id') })
                })
                const jsonData = await response.json()
                setIsFavourite(true)
            }catch(err){
                console.log(err)
            }
        }else{
            try{
                const response = await fetch(`${import.meta.env.VITE_API_URL}/user/removewish`, {
                    credentials: 'include',
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ listingId: id, userId: localStorage.getItem('id') })
                })
                const jsonData = await response.json()
                setIsFavourite(false)
            }catch(err){
                console.log(err)
            }
        }
    }

    useEffect(() => {
        const checkFavourite = async () => {
            try{
                const response = await fetch(`${import.meta.env.VITE_API_URL}/user/wishlist/${localStorage.getItem('id')}`, {
                    credentials: 'include'
                })
                const json = await response.json()
                if(json.find((item) => item._id === id)) return setIsFavourite(true)

            }catch(err){
                console.log(err)
            }
        }

        if(localStorage.getItem('id')){
            checkFavourite()
        }

    }, [])

    return(
        <div onClick={() => navigate(`/car/${id}`)} className='max-h-100 h-120 pb-4 mb-5 rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer flex flex-col overflow-hidden'>
    
            {/* THE FIX: Lock the wrapper's height and width */}
            <div className="h-[80%] w-full shrink-0 relative">
                <img className='h-full w-full object-cover' src={thumbnail} alt={`${year} ${brand} ${model}`} />
                { latest && (<span className="absolute top-4 right-4 bg-white text-gray-700 px-2 font-semibold rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">Latest</span>) }
            </div>

            <div className='p-3 flex-1'>
                <div className="flex justify-between">
                    <h1 className='font-bold text-xl inline'>R {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h1>
                    <span>
                        { !isFavourite ? (
                            <i onClick={(e) => handleAddLike(e)} className="fa-regular fa-heart cursor-pointer"></i>
                        ) : (
                            <i onClick={(e) => handleAddLike(e)} className="fa-solid fa-heart text-red-400"></i>
                        )}
                    </span>
                </div>
                <h3 className='font-bold'>{year} {brand} {model}</h3>
                <span>{variant}</span>
            </div>
        </div>
    )
}

export default CarCard