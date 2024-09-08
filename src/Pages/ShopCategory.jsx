import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';

import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = ({ category, banner }) => {
    const {all_products} = useContext(ShopContext);
    const category_products = all_products.filter(product => product.category === category);

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={banner} alt={category} />
            <div className="shopcategory-index-sort">
                <p>
                    <span>showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="dropdown" />
                </div>
            </div>
            <div className="shopcategory-products">
                {
                    category_products.map(product => {
                        return <Item key={product.id} itemInfo={product} />
                    })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}

export default ShopCategory;
