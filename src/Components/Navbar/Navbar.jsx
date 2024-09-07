import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-title">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">SmartCart</h1>
            </div>
            <ul>
                <li>Shop All</li>
                <li>Shop Men</li>
                <li>Shop Women</li>
                <li>Shop Kids</li>
                <li>Contact</li>
            </ul>
            <div className="actions">
                <button>
                    Sign In
                </button>
                <img src={cart_icon} alt="cart_icon" className="cart_icon" />
            </div>
        </div>
    );
}

export default Navbar;
