import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'



const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <nav className="footer__nav">

                    <div className='footer__card'>
                        <h3 className='footer__card-title'>Follow Us.</h3>
                        <p className='footer__card-info'>We are always looking for new <br/> projects and collaborations. <br/> Feel free to contact us.</p>
                        <div className="footer__card-icons">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>

                    </div>



                    <div className='footer__card'>
                        <h3 className='footer__card-title'>Contact Us.</h3>
                        <address className='footer__card-address'>
                            One Apple Park Way <br/> Cupertino, CA 95014
                        </address>
                        <a className='footer__card-tel' href="/">(408) 996-1010</a>
                        <a className='footer__card-email' href="/">support@apple.com</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;