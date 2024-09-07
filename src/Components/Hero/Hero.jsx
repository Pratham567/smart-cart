import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow_icon.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className="hero">

            <div className="hero-left">
                <div>
                    <div className="hand-hand-icon">
                        <img src={hand_icon} alt="hand_icon" />
                        <p>new</p>
                    </div>
                    <p>collections</p>
                    <p>for smart gen</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow_icon" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="hero_image" />
            </div>

        </div>
    );
}

export default Hero;