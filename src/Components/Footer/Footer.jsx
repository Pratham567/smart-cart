import './Footer.css';

import footer_logo from '../Assets/footer/footer_logo_big.png';
import instagram_icon from '../Assets/footer/instagram_icon.png';
import pinterest_icon from '../Assets/footer/pinterest_icon.png';
import whatsapp_icon from '../Assets/footer/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="footer_logo" />
                <p>Smart Cart</p>
            </div>
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instagram_icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="pinterest_icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="whatsapp_icon" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>© 2023 by Smart Cart. All Rights Reserved. Proudly created by MIT Students</p>
            </div>

        </div>

    );
}

export default Footer;