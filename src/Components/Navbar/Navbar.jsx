import './Navbar.css';

import { useState } from 'react';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {

    const [menu, setMenu] = useState("shopAll");

    return (
        <div className="navbar">
            <div className="logo-title">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">SmartCart</h1>
            </div>
            <ul>
                <li onClick={() => {setMenu("shopAll")}}>Shop All {menu==="shopAll" ? <hr /> : <></> } </li>
                <li onClick={() => {setMenu("shopmen")}}>Shop Men {menu==="shopmen" ? <hr /> : <></> } </li>
                <li onClick={() => {setMenu("shopWomen")}}>Shop Women {menu==="shopWomen" ? <hr /> : <></> } </li>
                <li onClick={() => {setMenu("shopKids")}}>Shop Kids {menu==="shopKids" ? <hr /> : <></> } </li>
                <li onClick={() => {setMenu("contact")}}>Contact {menu==="contact" ? <hr /> : <></> } </li>
            </ul>
            <div className="actions">
                <button class="sign-in-button">Sign In</button>
                <img src={cart_icon} alt="cart_icon" className="cart_icon" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
