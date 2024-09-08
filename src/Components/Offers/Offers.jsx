import './Offers.css';

import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusives</h1>
                <h1>Only For You</h1>
                <p>ON THE BEST SELLERS</p>
                <button>Check 'em out</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="exclusive_image" className="exclusive_image" />
            </div>
        </div>
    );
}

export default Offers;