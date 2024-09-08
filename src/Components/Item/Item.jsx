import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ itemInfo }) => {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="item">
            <Link to={`/product/${itemInfo.id}`} onClick={handleClick}>
            <img src={itemInfo.image} alt={itemInfo.name} className="item-image" />
            <h3>{itemInfo.name}</h3>
            <div className="item-cost">
                <div className="item-cost-new">
                    ₹{itemInfo.new_cost}
                </div>
                <div className="item-cost-old">
                    ₹{itemInfo.old_cost}
                </div>
            </div>
            </Link>
        </div>
    );
}

export default Item;