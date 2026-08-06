import CarCard from "../components/inventory/CarCard"
import { useState, useEffect, useContext } from 'react'
import { DataContext } from "../context/DataContext"
import LogReg from "../components/inventory/LogReg"

function WishList(){
    const [userId, setUserId] = useState(localStorage.getItem('id'))
    const [wishList, setWishList] = useState([])
    const { showLogIn } = useContext(DataContext)


    useEffect(() => {
        const getWishList = async () => {
            try{
                const response = await fetch(`http://localhost:3500/user/wishlist/${localStorage.getItem('id')}`, {
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
            <h1 className="font-bold text-3xl bg-black text-white p-8  w-full">Wish List</h1>
            { showLogIn && (<LogReg />)}
            <div className="flex justify-center items-center w-full flex-col">
                {
                    !wishList.length ? (
                        <h1>You currently don't have anything in your wish list</h1>
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