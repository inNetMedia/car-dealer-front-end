import CardHolder from "../components/inventory/CardHolder"
import Hero from "../components/inventory/Hero"
import SellHero from "../components/inventory/SellHero"
import WhyUs from "../components/inventory/WhyUs"
import CustStories from '../components/inventory/CustStories'
import LogReg from "../components/inventory/LogReg"
import { useContext } from "react"
import { DataContext } from "../context/DataContext"

function Home(){
    const { showLogIn } = useContext(DataContext)

    return(
        <main>
            { showLogIn && (<LogReg />)}
            <Hero />
            <WhyUs />
            <CardHolder listingType="Just Arrived" listingDesc="Latest handpicked and tested" filter={0}/>
            <SellHero />
            <CardHolder listingType="Recommended" listingDesc="Hand-picked premium vehicles" filter={3}/>
            {/* <CustStories /> */}
        </main>
    )
}

export default Home