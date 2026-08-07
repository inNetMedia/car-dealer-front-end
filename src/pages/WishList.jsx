import CarCard from "../components/inventory/CarCard"
import { useState, useEffect, useContext } from 'react'
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"
import { useNavigate } from "react-router-dom"

function WishList(){
    const [userId, setUserId] = useState(localStorage.getItem('id'))
    const [wishList, setWishList] = useState([])
    const { showLogIn, setShowLogIn } = useContext(DataContext)

    const navigate = useNavigate()

    useEffect(() => {
        const getWishList = async () => {
            try{
                const response = await fetch(`${import.meta.env.VITE_API_URL}/user/wishlist/${localStorage.getItem('id')}`, {
                    credentials: 'include'
                })
                if(response.ok){
                    const jsonData = await response.json()
                    setWishList(jsonData)
                }

            }catch(err){

            }
        }

        if(localStorage.getItem('id')){
            getWishList()
        }

    },[])

    return(
        <main className="flex-1 justify-center items-center w-[100%]">
            <div className="bg-black w-full flex justify-center p-8 text-white">   
                <div className="w-full max-w-[1336px]">
                    <h1 className="font-bold text-3xl  ">Wish List</h1>
                    <p className="text-gray-300">Your personal collection of saved vehicles.</p>
                </div>
            </div>  
            
            { showLogIn && (<LogReg />)}
            <div className="flex justify-center items-center w-full flex-col">
                {
                    !wishList.length ? (
                        <div className="my-30 text-center">
                            <h1><i className="fa-regular fa-heart text-7xl text-gray-600"></i></h1>
                            <h1 className="font-bold text-2xl my-3">Your Wishlist is Empty</h1>
                            <p className="text-gray-600">Save cars you love to your wishlist and keep track of your favorites.</p>
                            { userId ? (<button onClick={() => navigate('/cars')} className="bg-black text-white p-2 rounded-md mt-5 font-semibold cursor-pointer hover:bg-black/80">Browse Cars</button>) : (<button onClick={() => setShowLogIn(true)} className="bg-black text-white p-2 rounded-md mt-5 font-semibold cursor-pointer hover:bg-black/80">Log In</button>) }
                        </div>
                    ) : (
                        <div className="md:grid grid-cols-3 gap-4 max-w-[1336px] p-3">
                            {
                                wishList.map((item) => (
                                    <CarCard
                                        key={item._id}
                                        brand={item.brand}
                                        variant={item.variant}
                                        model={item.model}
                                        year={item.year}
                                        price={item.price}
                                        thumbnail={item.images?.[0]}
                                        id={item._id}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </main>
    )
}

export default WishList