import './Trending.css';
import {data_product_trending_women} from '../Assets/data_trending_product';
import Item from '../Item/Item';

const Trending = () => {
    return (
        <div className="trending">
            <h1>TRENDING IN WOMEN</h1>
            <hr />
            <div className="trending-item">
                {data_product_trending_women.map((item, i) => {
                    return <Item itemInfo={item} key={i} />
                }
                )}
            </div>

        </div>
    );
}

export default Trending;