import CarCard from "../components/inventory/CarCard"
import { useState, useEffect } from 'react'

function WishList(){
    const [userId, setUserId] = useState(localStorage.getItem('id'))
    const [wishList, setWishList] = useState([])

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
        <main className="flex-1">
            {
                !wishList.length ? (
                    <h1>You currently don't have anything in your wish list</h1>
                ) : (
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
                )
            }
        </main>
    )
}

export default WishList