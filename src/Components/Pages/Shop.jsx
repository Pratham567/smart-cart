import Hero from "../Hero/Hero";
import Trending from "../Trending/Trending";
import Offers from "../Offers/Offers";
import NewCollection from "../NewCollection/NewCollection";
import NewsLetter from "../NewsLetter/NewsLetter";

const Shop = () => {
    return ( 
        <div>
            <Hero/>
            <Trending />
            <Offers />
            <NewCollection />
            <NewsLetter />
        </div>
     );
}
 
export default Shop;