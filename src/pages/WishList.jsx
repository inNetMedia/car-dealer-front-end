import CarCard from "../components/inventory/CarCard"
import { useState, useEffect } from 'react'

function WishList(){
    const [userId, setUserId] = useState(localStorage.getItem('id'))
    const [wishList, setWishList] = useState([])

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