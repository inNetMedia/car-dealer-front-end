import { useNavigate } from "react-router-dom"


function SellHero(){
    const navigate = useNavigate()
    function navigateToSell(){
        navigate('/sell')
    }

    return(
        <section className="flex justify-center items-center my-4 text-white">
             <div className="bg-[url('src/assets/tyler-clemmensen-uZk1Kk92Xww-unsplash.jpg')] bg-cover bg-center h-100 w-[95dvw]">
                <div className="w-full h-full bg-black/60 p-8">
                    <span className="bg-gray-800 p-2 rounded-full text-sm">Sell with NN Motors</span>
                    <h1 className="font-bold text-3xl mt-5">Ready to Sell Your Car?</h1>
                    <p className="mt-5 text-gray-300">Get a competetive offer in minutes, Our experts handle everything fast, fair, and hassle-free</p>
                    <div className="flex text-xs [&_span]:ml-5 mt-5 text-gray-300">
                        <span>Free valuation</span>
                        <span>No hidden fees</span>
                        <span>Same-day payment</span>
                    </div>
                    <button onClick={navigateToSell} className="mt-8 bg-gray-700 border- hover:bg-gray-800 border-white/40 transition-all ease-in-out p-4 rounded md text-sm cursor-pointer">Sell Your Car <i className="fa-solid fa-arrow-right ml-2"></i></button>
                </div>
             </div>
        </section>
       
    )
}

export default SellHero