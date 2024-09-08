import { createContext, useState } from "react";
import all_products from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    // initialize the cart object with an empty object, as the cart is empty initially
    let cart = {};
    return cart;
}

const ShopContextProvider = ({ children }) => {
    const [cart, setCart] = useState(getDefaultCart());

    const addProductToCart = (productId) => {
        setCart((prevCart) => {
            // Create a new cart object by copying the previous cart
            // If the product is already in the cart, increment its quantity by 1
            // If the product is not in the cart, add it with a quantity of 1
            return {
                ...prevCart, // Spread the previous cart to copy all existing items
                [productId]: (prevCart[productId] || 0) + 1 // Increment the quantity of the product by 1, or set it to 1 if it doesn't exist
            };
        });
    };

    const removeProductFromCart = (productId) => {
        setCart(prevCart => {
            // Check if the product is in the cart
            if (!prevCart[productId]) {
                return prevCart; // Do nothing if the product is not in the cart
            }

            // If the product quantity is 1, remove the product from the cart
            if (prevCart[productId] === 1) {
                const { [productId]: _, ...newCart } = prevCart;
                return newCart;
            }

            // Otherwise, decrement the product quantity by 1
            return { ...prevCart, [productId]: prevCart[productId] - 1 };
        });
    };

    const contextValue = { all_products, cart, addProductToCart, removeProductFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
