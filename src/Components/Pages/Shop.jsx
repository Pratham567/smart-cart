import Hero from "../Hero/Hero";
import Trending from "../Trending/Trending";
import Offers from "../Offers/Offers";
import NewCollection from "../NewCollection/NewCollection";

const Shop = () => {
    return ( 
        <div>
            <Hero/>
            <Trending />
            <Offers />
            <NewCollection />
        </div>
     );
}
 
export default Shop;