import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span className="title">BE THE FIRST TO KNOW</span>
                    <span className="sub-title">Sign up for updates from mettā muse.</span>
                    <div className="input-group">
                        <input type="text" placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="footer-right">
                    <span className="contact-title">CONTACT US</span>
                    <div className='call-us'>
                        <span className="contact-info">+44 221 133 5360</span>
                        <span className="contact-info">customercare@mettamuse.com</span>
                    </div>
                    <span className="currency">CURRENCY</span>
                    <div className="currency-info">
                        <img
                            src="https://images.thdstatic.com/productImages/538caa8e-baf0-45f4-8e95-0649baa9c07b/svn/house-flags-hddb510-5x8-64_600.jpg"
                            alt="Currency Flag"
                        />
                        <span>+ USD</span>
                    </div>
                    <span className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</span>
                </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom">
                <div className="brand">
                    <span className="brand-title">mettā muse</span>
                    <i className={`brand-title-icon fa-solid fa-chevron-down`}></i>
                    <div className="brand-links">
                        <span className="link">About Us</span>
                        <span className="link">Stories</span>
                        <span className="link">Artisans</span>
                        <span className="link">Boutiques</span>
                        <span className="link">Contact Us</span>
                        <span className="link">EU Compliances Docs</span>
                    </div>
                </div>
                <div className="quick-links">
                    <span className="quick-links-title">Quick Links</span>
                    <i className={`brand-title-icon fa-solid fa-chevron-down`}></i>
                    <div className="quick-links-list">
                        <span className="link">Orders & Shipping</span>
                        <span className="link">Join/Login as a Seller</span>
                        <span className="link">Payment & Pricing</span>
                        <span className="link">Return & Refunds</span>
                        <span className="link">FAQs</span>
                        <span className="link">Privacy Policy</span>
                        <span className="link">Terms & Conditions</span>
                    </div>
                </div>
                <div className="follow-us">
                    <div className='followus-part'>
                        <span className="follow-us-title">Follow Us</span>
                        <i className={`brand-title-icon fa-solid fa-chevron-down`}></i>
                        <div className="social-icons">
                            <div className="social-icon">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="social-icon">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                    <div className="payment-info">
                        <div>
                            <span className="payment-info-title">mettā muse</span>
                            <span className="payment-info-subtitle">Accepts</span>
                        </div>
                        <img
                            alt="paymentimage"
                            src={require('../../images/payment.png')}
                            className="payment-img"
                        />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span className="copyright-text">Copyright © 2023 mettamuse. All rights reserved.</span>
            </div>
        </div>
    );
}

export default Footer;
