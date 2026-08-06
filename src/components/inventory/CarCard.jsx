import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CarCard({ brand, variant, model, year, price, thumbnail, id }){
    const navigate = useNavigate()
    const [isFavourite, setIsFavourite] = useState(false)

    const handleAddLike = async (e) => {
        e.stopPropagation()
        if(isFavourite === false){    
            try{
                const response = await fetch(`http://localhost:3500/user/wishlist`, {
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
                const response = await fetch(`http://localhost:3500/user/removewish`, {
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
                const response = await fetch(`http://localhost:3500/user/wishlist/${localStorage.getItem('id')}`, {
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
        <div onClick={() => navigate(`/car/${id}`)} className='mb-5 rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer '>
            <div>
                <img className='rounded-t-lg w-full h-full object-cover' src={thumbnail}/>
            </div>
            <div className='p-3'>
                <div className="flex justify-between">
                    <h1 className='font-bold text-xl inline'>R {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h1>
                    <span>
                        { !isFavourite ? (<i onClick={(e) => handleAddLike(e)} className="fa-regular fa-heart cursor-pointer"></i>) : (<i onClick={(e) => handleAddLike(e)} className="fa-solid fa-heart text-red-400"></i>)}
                        
                    </span>
                </div>
                <h3 className='font-bold'>{year} {brand} {model}</h3>
                <span>{variant}</span>
            </div>
        </div>
    )
}

export default CarCard