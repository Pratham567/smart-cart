import { useParams } from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';

import Breadcrum from "../Components/Breadcrum/Breadcrum";

const Product = () => {
    const { id } = useParams();
    const all_products = useContext(ShopContext);
    const product = all_products.find(product => product.id == id);
    console.log(product);
    return (
        <div>
            <h1>Product Page: {id}</h1>

            <Breadcrum product={product} />
        </div>
    );
}

export default Product;