import './Navbar.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                <li onClick={() => { setMenu("shopAll") }}> <Link to="/">Shop All</Link> {menu === "shopAll" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("shopmen") }}> <Link to="/men">Shop Men</Link> {menu === "shopmen" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("shopWomen") }}> <Link to="/women">Shop Women</Link> {menu === "shopWomen" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("shopKids") }}> <Link to="/kids">Shop Kids</Link> {menu === "shopKids" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("contact") }}> <Link to="/contact">Contact</Link> {menu === "contact" ? <hr /> : <></>} </li>
            </ul>

            <div className="actions">
                <Link to="/login"><button class="sign-in-button">Sign In</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="cart_icon" className="cart_icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
