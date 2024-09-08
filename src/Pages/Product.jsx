import { useParams } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';

import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
    const { id } = useParams();
    const all_products = useContext(ShopContext);
    const product = all_products.find(product => product.id === Number(id));
    console.log(product);
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
        </div>
    );
}

export default Product;