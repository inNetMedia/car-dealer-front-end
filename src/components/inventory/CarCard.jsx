import { useNavigate } from "react-router-dom"

function CarCard({ brand, variant, model, year, price, thumbnail, id, liked }){
    const navigate = useNavigate()

    return(
        <div onClick={() => navigate(`/car/${id}`)} className='mb-5 rounded-lg bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-pointer '>
            <div>
                <img className='rounded-t-lg w-full h-full object-cover' src={thumbnail}/>
            </div>
            <div className='p-3'>
                <div className="flex justify-between">
                    <h1 className='font-bold text-xl inline'>R {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h1>
                    <span>
                        { !liked ? (<i className="fa-regular fa-heart cursor-pointer"></i>) : (<i className="fa-solid fa-heart text-red-400"></i>)}
                        
                    </span>
                </div>
                <h3 className='font-bold'>{year} {brand} {model}</h3>
                <span>{variant}</span>
            </div>
        </div>
    )
}

export default CarCard