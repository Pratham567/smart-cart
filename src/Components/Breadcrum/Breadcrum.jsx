import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
    return (
        <div className="breadcrum">
            <a href="/">HOME</a>
            <img src={arrow_icon} alt="arrow" />
            <a href={`/${product.category.toLowerCase()}`}> {product.category.toUpperCase()}</a>
            <img src={arrow_icon} alt="arrow" />
            <span>{product.name}</span>
        </div>
    );
}

export default Breadcrum;